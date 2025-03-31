document.addEventListener('DOMContentLoaded', function() {
  // 强制覆盖 Valine 初始化逻辑
  setTimeout(() => {
    // 移除原 Valine 容器
    const oldValine = document.getElementById('valine');
    if (oldValine) oldValine.remove();

    // 创建新容器
    const newContainer = document.createElement('div');
    newContainer.id = 'vcomments';
    const commentSection = document.querySelector('.comments');
    if (commentSection) {
      commentSection.appendChild(newContainer);
      
      // 你的完整配置
      new Valine({
        el: '#vcomments',
        appId: 'GPsPoD3GFkVDHyO98Q7ILOHV-gzGzoHsz',
        appKey: 'Gj2hNbjXtbvok33AkFPGSgdk',
        path: window.location.pathname,
        placeholder: '说点什么吧',
        avatar: 'hide',
        avatarCDN: 'https://cravatar.cn/avatar/',
        meta: ['nick'],
        metaPlaceholder: { 
          nick: '请输入昵称' // 强制生效
        },
        requiredFields: [],
        pageSize: 10,
        lang: 'zh-CN',
        highlight: false,
        recordIP: true,
        serverURLs: ''
      });
    }
  }, 500); // 延迟确保原 Valine 初始化失败后执行
});