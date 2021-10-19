import iconTable from '../../assets/icon-font/iconfont.json'

/**
 * @param {I} iconname 
 */
export default function useBuiltinIconResolver(iconname){
  let builtinIconUnicode = undefined;
  iconTable.glyphs.forEach(icon=>{
    if(iconname === icon.name) {
      builtinIconUnicode = '&#x' + icon.unicode + ';';
    }
  });
  return {
    builtinIconUnicode
  };
}