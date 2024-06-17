import domToImage from 'dom-to-image';

const cloneAndLoadImages = (element: HTMLElement): Promise<void[]> => {
  const images = Array.from(element.getElementsByTagName('img'));
  const clonedImages = images.map((img) => {
    const clonedImg = new Image();
    clonedImg.src = img.src;
    clonedImg.width = img.width;
    clonedImg.height = img.height;
    img.replaceWith(clonedImg);
    return clonedImg;
  });

  const imagePromises = clonedImages.map((img) => {
    return new Promise<void>((resolve, reject) => {
      if (img.complete) {
        resolve();
      } else {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Image load error'));
      }
    });
  });

  return Promise.all(imagePromises);
};

export const exportAsImage = () => {
  const element = document.getElementById('tier-list-container');
  const titleElement = document.querySelector('h1'); // <h1>要素を取得
  const footerElement = document.querySelector('footer'); // <footer>要素を取得

  if (element && titleElement && footerElement) {
    const clonedElement = element.cloneNode(true) as HTMLElement;
    const clonedTitle = titleElement.cloneNode(true) as HTMLElement;
    const clonedFooter = footerElement.cloneNode(true) as HTMLElement;
    const style = document.createElement('style');
    style.innerHTML = '.empty-placeholder { opacity: 0; }';
    clonedTitle.style.paddingTop = '16px';
    clonedTitle.style.paddingBottom = '16px';
    clonedTitle.style.paddingRight = '0px';
    clonedTitle.style.marginBottom = '0px';
    clonedTitle.style.background = '#000';
    clonedFooter.style.opacity = '1.0';
    clonedElement.insertBefore(clonedTitle, clonedElement.firstChild); // <h1>要素を追加
    clonedElement.appendChild(clonedFooter); // <footer>要素を追加
    clonedElement.appendChild(style); // スタイルを追加

    clonedElement.style.width = '640px';
    clonedElement.style.position = 'absolute';
    clonedElement.style.top = '0';
    clonedElement.style.left = '0';
    clonedElement.style.zIndex = '-1';
    clonedElement.style.background = '#1d1d1d';
    clonedElement.classList.add('export');
    document.body.appendChild(clonedElement);

    cloneAndLoadImages(clonedElement)
      .then(() => domToImage.toPng(clonedElement))
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'tier-list.png';
        link.click();
        document.body.removeChild(clonedElement);
      })
      .catch((error) => {
        console.error('Error generating image:', error);
        document.body.removeChild(clonedElement);
      });
  }
};
