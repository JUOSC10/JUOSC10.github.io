// 网站交互功能脚本
document.addEventListener('DOMContentLoaded', function() {
    // 游戏卡片悬停效果
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 响应式导航菜单（如果需要）
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // 游戏详情页面的标签切换功能
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有活动状态
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // 添加当前活动状态
                this.classList.add('active');
                const targetTab = this.getAttribute('data-tab');
                document.getElementById(targetTab).classList.add('active');
            });
        });
        
        // 确保默认显示第一个标签
        // 检查是否已有活动标签，如果没有则激活第一个
        const hasActiveTab = Array.from(tabButtons).some(btn => btn.classList.contains('active'));
        const hasActiveContent = Array.from(tabContents).some(content => content.classList.contains('active'));
        
        if (!hasActiveTab && tabButtons[0]) {
            tabButtons[0].classList.add('active');
        }
        
        if (!hasActiveContent && tabContents[0]) {
            tabContents[0].classList.add('active');
        }
    }
    
    // 添加赛车主题动态效果
    const speedometer = document.querySelector('.speedometer-fill');
    if (speedometer) {
        speedometer.style.width = '75%';
    }
});