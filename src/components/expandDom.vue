<script>
export default {
  functional: true, // 声明该组件是一个函数式组件
  props: {
    // 行数据对象
    row: Object,

    // 渲染函数
    render: Function,

    // 行索引
    index: Number,

    // 列数据对象
    column: {
      type: Object,
      default: null,
    },
  },

  // render 本身有的 h，将虚拟 dom 转换为真实的 dom
  render: (h, ctx) => {
    const params = {
      row: ctx.props.row,
      index: ctx.props.index,
    };

    // 如果传入了列数据对象，则将其加入参数中
    if (ctx.props.column) {
      params.column = ctx.props.column;
    }

    // 调用渲染函数，返回渲染结果
    return ctx.props.render(h, params);
  },
};
</script>

<style>
/* 空样式 */
</style>