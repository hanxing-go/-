document.getElementById('pdfFileInput').addEventListener('change', function(e) {
    var file = e.target.files[0];
  
    // 使用PDF.js加载并渲染PDF文件
    PDFJS.getDocument(URL.createObjectURL(file)).then(function(pdf) {
      var viewer = document.getElementById('pdfViewer');
  
      // 渲染第一页
      pdf.getPage(1).then(function(page) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var viewport = page.getViewport({ scale: 1.5 });
  
        canvas.width = viewport.width;
        canvas.height = viewport.height;
  
        page.render({
          canvasContext: context,
          viewport: viewport
        }).promise.then(function() {
          viewer.innerHTML = '';
          viewer.appendChild(canvas);
        });
      });
    });
  });
  