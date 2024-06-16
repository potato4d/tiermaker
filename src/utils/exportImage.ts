import domToImage from 'dom-to-image';

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
    clonedElement.insertBefore(clonedFooter, clonedElement.nextSibling); // <footer>要素を追加
    clonedElement.insertBefore(style, clonedElement.nextSibling); // スタイルを追加

    clonedElement.style.width = '640px';
    clonedElement.style.position = 'absolute';
    clonedElement.style.top = '0';
    clonedElement.style.left = '0';
    clonedElement.style.zIndex = '-1';
    clonedElement.style.background = '#1d1d1d';
    clonedElement.classList.add('export');
    document.body.appendChild(clonedElement);

    domToImage.toPng(clonedElement)
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
