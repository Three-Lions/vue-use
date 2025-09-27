module.exports = {
  extends: ['@commitlint/config-conventional'], // 继承标准规则
  rules: {
    // 自定义规则类型列表
    'type-enum': [
      2, // 2 表示错误（error），必须遵守
      'always', // 总是检查
      [
        // 允许的 type 类型
        'feat', // 新功能
        'fix', // 修复 bug
        'docs', // 文档更新
        'style', // 代码格式调整
        'refactor', // 代码重构
        'test', // 测试相关
        'chore', // 构建过程或辅助工具变动
        'revert', // 回滚提交
      ],
    ],
    // 其他规则示例：主题（subject）不能为空
    'subject-empty': [2, 'never'],
  },
}
