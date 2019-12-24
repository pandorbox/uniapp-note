/**
 * 参数工具
 */
export default {
  /**
   * 格式化
   * @param param 参数
   */
  format(param: any) {
    // if (!param) return {};
    // let dParam = {};
    // Object.keys(param).forEach(function(key) {
    //   let dKey = key.substring(0, key.length);
    //   if (key.substring(0, 1) == "_") {
    //     dParam += dKey + "=" + param[key] + "&";
    //   } else {
    //     dParam += dKey + "=" + param[key] + "&";
    //   }
    // });
    // return dParam;
    return param;
  }
};
