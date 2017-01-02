goog.provide("om.dom$macros");
(function (){
om.dom$macros.tags = cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"abbr","abbr",(-565843885),null),new cljs.core.Symbol(null,"address","address",(-2094936343),null),new cljs.core.Symbol(null,"area","area",(2112538783),null),new cljs.core.Symbol(null,"article","article",(1618846482),null),new cljs.core.Symbol(null,"aside","aside",(-1240038232),null),new cljs.core.Symbol(null,"audio","audio",(-835308448),null),new cljs.core.Symbol(null,"b","b",(-1172211299),null),new cljs.core.Symbol(null,"base","base",(1825810849),null),new cljs.core.Symbol(null,"bdi","bdi",(317505641),null),new cljs.core.Symbol(null,"bdo","bdo",(-490616675),null),new cljs.core.Symbol(null,"big","big",(-1750885618),null),new cljs.core.Symbol(null,"blockquote","blockquote",(2012795717),null),new cljs.core.Symbol(null,"body","body",(-408674142),null),new cljs.core.Symbol(null,"br","br",(-1720330977),null),new cljs.core.Symbol(null,"button","button",(-1197855826),null),new cljs.core.Symbol(null,"canvas","canvas",(-158285962),null),new cljs.core.Symbol(null,"caption","caption",(785147625),null),new cljs.core.Symbol(null,"cite","cite",(-744995773),null),new cljs.core.Symbol(null,"code","code",(-1068142627),null),new cljs.core.Symbol(null,"col","col",(-318831557),null),new cljs.core.Symbol(null,"colgroup","colgroup",(-2003317124),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"datalist","datalist",(405488053),null),new cljs.core.Symbol(null,"dd","dd",(300093898),null),new cljs.core.Symbol(null,"del","del",(-2079460185),null),new cljs.core.Symbol(null,"details","details",(-697640358),null),new cljs.core.Symbol(null,"dfn","dfn",(1882439694),null),new cljs.core.Symbol(null,"dialog","dialog",(-1239285634),null),new cljs.core.Symbol(null,"div","div",(-1597244137),null),new cljs.core.Symbol(null,"dl","dl",(-499620186),null),new cljs.core.Symbol(null,"dt","dt",(1272086768),null),new cljs.core.Symbol(null,"em","em",(-1946622734),null),new cljs.core.Symbol(null,"embed","embed",(285618178),null),new cljs.core.Symbol(null,"fieldset","fieldset",(-309239289),null),new cljs.core.Symbol(null,"figcaption","figcaption",(-149590520),null),new cljs.core.Symbol(null,"figure","figure",(1079137448),null),new cljs.core.Symbol(null,"footer","footer",(-1047990379),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"h1","h1",(-256355935),null),new cljs.core.Symbol(null,"h2","h2",(1267868799),null),new cljs.core.Symbol(null,"h3","h3",(-586824606),null),new cljs.core.Symbol(null,"h4","h4",(-649572776),null),new cljs.core.Symbol(null,"h5","h5",(-188625098),null),new cljs.core.Symbol(null,"h6","h6",(-2097141989),null),new cljs.core.Symbol(null,"head","head",(869147608),null),new cljs.core.Symbol(null,"header","header",(1759972661),null),new cljs.core.Symbol(null,"hr","hr",(-1276695702),null),new cljs.core.Symbol(null,"html","html",(641734630),null),new cljs.core.Symbol(null,"i","i",(253690212),null),new cljs.core.Symbol(null,"iframe","iframe",(-1770013743),null),new cljs.core.Symbol(null,"img","img",(-1211748411),null),new cljs.core.Symbol(null,"ins","ins",(618547957),null),new cljs.core.Symbol(null,"kbd","kbd",(1956688402),null),new cljs.core.Symbol(null,"keygen","keygen",(1068838274),null),new cljs.core.Symbol(null,"label","label",(-936024965),null),new cljs.core.Symbol(null,"legend","legend",(613339282),null),new cljs.core.Symbol(null,"li","li",(-1930876848),null),new cljs.core.Symbol(null,"link","link",(-128631941),null),new cljs.core.Symbol(null,"main","main",(-477271134),null),new cljs.core.Symbol(null,"map","map",(-1282745308),null),new cljs.core.Symbol(null,"mark","mark",(1266715182),null),new cljs.core.Symbol(null,"menu","menu",(1992786725),null),new cljs.core.Symbol(null,"menuitem","menuitem",(-1650388416),null),new cljs.core.Symbol(null,"meta","meta",(-1154898805),null),new cljs.core.Symbol(null,"meter","meter",(1452889916),null),new cljs.core.Symbol(null,"nav","nav",(-1934895292),null),new cljs.core.Symbol(null,"noscript","noscript",(935754238),null),new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"ol","ol",(-1721911718),null),new cljs.core.Symbol(null,"optgroup","optgroup",(-916153551),null),new cljs.core.Symbol(null,"output","output",(534662484),null),new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"param","param",(-640803946),null),new cljs.core.Symbol(null,"picture","picture",(718588123),null),new cljs.core.Symbol(null,"pre","pre",(-535978900),null),new cljs.core.Symbol(null,"progress","progress",(1884855074),null),new cljs.core.Symbol(null,"q","q",(-1965434072),null),new cljs.core.Symbol(null,"rp","rp",(-647737686),null),new cljs.core.Symbol(null,"rt","rt",(-2030955077),null),new cljs.core.Symbol(null,"ruby","ruby",(-653698108),null),new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"samp","samp",(-1148294633),null),new cljs.core.Symbol(null,"script","script",(336087726),null),new cljs.core.Symbol(null,"section","section",(1340390001),null),new cljs.core.Symbol(null,"small","small",(-520957065),null),new cljs.core.Symbol(null,"source","source",(1206599988),null),new cljs.core.Symbol(null,"span","span",(-1259562778),null),new cljs.core.Symbol(null,"strong","strong",(1910060527),null),new cljs.core.Symbol(null,"style","style",(1143888791),null),new cljs.core.Symbol(null,"sub","sub",(-453228498),null),new cljs.core.Symbol(null,"summary","summary",(2021379479),null),new cljs.core.Symbol(null,"sup","sup",(-398960819),null),new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"tbody","tbody",(1559853227),null),new cljs.core.Symbol(null,"td","td",(-1174502416),null),new cljs.core.Symbol(null,"tfoot","tfoot",(938931637),null),new cljs.core.Symbol(null,"th","th",(1094922961),null),new cljs.core.Symbol(null,"thead","thead",(1348656231),null),new cljs.core.Symbol(null,"time","time",(-1268547887),null),new cljs.core.Symbol(null,"title","title",(-2017930186),null),new cljs.core.Symbol(null,"tr","tr",(215756881),null),new cljs.core.Symbol(null,"track","track",(1836319014),null),new cljs.core.Symbol(null,"u","u",(483896742),null),new cljs.core.Symbol(null,"ul","ul",(291010124),null),new cljs.core.Symbol(null,"var","var",(870848730),null),new cljs.core.Symbol(null,"video","video",(1797419657),null),new cljs.core.Symbol(null,"wbr","wbr",(1869193327),null),new cljs.core.Symbol(null,"circle","circle",(-751223407),null),new cljs.core.Symbol(null,"clipPath","clipPath",(705911730),null),new cljs.core.Symbol(null,"ellipse","ellipse",(-1518544067),null),new cljs.core.Symbol(null,"g","g",(-916345864),null),new cljs.core.Symbol(null,"line","line",(1852876762),null),new cljs.core.Symbol(null,"mask","mask",(1054783080),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),new cljs.core.Symbol(null,"pattern","pattern",(1882666950),null),new cljs.core.Symbol(null,"polyline","polyline",(-91019517),null),new cljs.core.Symbol(null,"rect","rect",(1531628899),null),new cljs.core.Symbol(null,"svg","svg",(-1797646627),null),new cljs.core.Symbol(null,"text","text",(-150030170),null),new cljs.core.Symbol(null,"defs","defs",(-1255986052),null),new cljs.core.Symbol(null,"linearGradient","linearGradient",(-942471042),null),new cljs.core.Symbol(null,"polygon","polygon",(-1817382010),null),new cljs.core.Symbol(null,"radialGradient","radialGradient",(-1252188576),null),new cljs.core.Symbol(null,"stop","stop",(-500379815),null),new cljs.core.Symbol(null,"tspan","tspan",(82678330),null),new cljs.core.Symbol(null,"use","use",(-205850897),null)], true); return (
new cljs.core.Var(function(){return om.dom$macros.tags;},new cljs.core.Symbol("om.dom$macros","tags","om.dom$macros/tags",(1603026295),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.dom$macros","om.dom$macros",(-1672405631),null),new cljs.core.Symbol(null,"tags","tags",(-883016792),null),"om/dom.cljc",(10),(1),(9),(9),cljs.core.List.EMPTY,null,(cljs.core.truth_(om.dom$macros.tags)?om.dom$macros.tags.cljs$lang$test:null)])));})()
;
(function (){
om.dom$macros.gen_react_dom_inline_fn = (function om$dom$macros$gen_react_dom_inline_fn(tag){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defmacro","cljs.core/defmacro",(-1834053857),null)),(function (){var x__23399__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__201__auto__","opts__201__auto__",(-496737735),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"children__202__auto__","children__202__auto__",(651446083),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",(1908459032),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",(-1331406371),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23399__auto__ = cljs.core.symbol.call(null,"js",[cljs.core.str("React.DOM."),cljs.core.str(cljs.core.name.call(null,tag))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",(-1331406371),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__201__auto__","opts__201__auto__",(-496737735),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map","cljs.core/map",(-338988913),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__203__auto__","x__203__auto__",(251167307),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",(1908459032),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",(-1331406371),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.util","force-children","om.util/force-children",(2134283787),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",(-1331406371),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__203__auto__","x__203__auto__",(251167307),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"children__202__auto__","children__202__auto__",(651446083),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}); return (
new cljs.core.Var(function(){return om.dom$macros.gen_react_dom_inline_fn;},new cljs.core.Symbol("om.dom$macros","gen-react-dom-inline-fn","om.dom$macros/gen-react-dom-inline-fn",(-1489852758),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.dom$macros","om.dom$macros",(-1672405631),null),new cljs.core.Symbol(null,"gen-react-dom-inline-fn","gen-react-dom-inline-fn",(190619971),null),"om/dom.cljc",(40),(1),(140),(140),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",(350170304),null)], null)),null,(cljs.core.truth_(om.dom$macros.gen_react_dom_inline_fn)?om.dom$macros.gen_react_dom_inline_fn.cljs$lang$test:null)])));})()
;
(function (){
om.dom$macros.gen_react_dom_inline_fns = (function om$dom$macros$gen_react_dom_inline_fns(_AMPERSAND_form,_AMPERSAND_env){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",(441598760)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),cljs.core.map.call(null,om.dom$macros.gen_react_dom_inline_fn,om.dom$macros.tags)));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return om.dom$macros.gen_react_dom_inline_fns;},new cljs.core.Symbol("om.dom$macros","gen-react-dom-inline-fns","om.dom$macros/gen-react-dom-inline-fns",(1229041510),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.dom$macros","om.dom$macros",(-1672405631),null),new cljs.core.Symbol(null,"gen-react-dom-inline-fns","gen-react-dom-inline-fns",(-570968743),null),"om/dom.cljc",(45),(1),(145),true,(145),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(om.dom$macros.gen_react_dom_inline_fns)?om.dom$macros.gen_react_dom_inline_fns.cljs$lang$test:null)])));})()
;

om.dom$macros.gen_react_dom_inline_fns.cljs$lang$macro = true;
(function (){
om.dom$macros.gen_react_dom_fn = (function om$dom$macros$gen_react_dom_fn(tag){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null)),(function (){var x__23399__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__204__auto__","opts__204__auto__",(2005936061),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",(-2144855648),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"children__205__auto__","children__205__auto__",(-1660542622),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",(-1176201338),null)),(function (){var x__23399__auto__ = cljs.core.symbol.call(null,"js",[cljs.core.str("React.DOM."),cljs.core.str(cljs.core.name.call(null,tag))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into-array","cljs.core/into-array",(1215545861),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",(96507417),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__204__auto__","opts__204__auto__",(2005936061),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map","cljs.core/map",(-338988913),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.util","force-children","om.util/force-children",(2134283787),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"children__205__auto__","children__205__auto__",(-1660542622),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}); return (
new cljs.core.Var(function(){return om.dom$macros.gen_react_dom_fn;},new cljs.core.Symbol("om.dom$macros","gen-react-dom-fn","om.dom$macros/gen-react-dom-fn",(-2029969813),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.dom$macros","om.dom$macros",(-1672405631),null),new cljs.core.Symbol(null,"gen-react-dom-fn","gen-react-dom-fn",(324207692),null),"om/dom.cljc",(33),(1),(152),(152),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",(350170304),null)], null)),null,(cljs.core.truth_(om.dom$macros.gen_react_dom_fn)?om.dom$macros.gen_react_dom_fn.cljs$lang$test:null)])));})()
;
(function (){
om.dom$macros.gen_react_dom_fns = (function om$dom$macros$gen_react_dom_fns(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),cljs.core.map.call(null,om.dom$macros.gen_react_dom_fn,om.dom$macros.tags)));
}); return (
new cljs.core.Var(function(){return om.dom$macros.gen_react_dom_fns;},new cljs.core.Symbol("om.dom$macros","gen-react-dom-fns","om.dom$macros/gen-react-dom-fns",(1453652771),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"om.dom$macros","om.dom$macros",(-1672405631),null),new cljs.core.Symbol(null,"gen-react-dom-fns","gen-react-dom-fns",(-1158494776),null),"om/dom.cljc",(38),(1),(158),true,(158),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(om.dom$macros.gen_react_dom_fns)?om.dom$macros.gen_react_dom_fns.cljs$lang$test:null)])));})()
;

om.dom$macros.gen_react_dom_fns.cljs$lang$macro = true;
