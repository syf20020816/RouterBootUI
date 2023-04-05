// Type definitions for ./lib/index.esm.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// objToMap.!0

/**
 * 
 */
declare interface 0 {
		
	/**
	 * 
	 */
	sunny : string;
		
	/**
	 * 
	 */
	cloudy : string;
		
	/**
	 * 
	 */
	overcast : string;
		
	/**
	 * 
	 */
	rainy : string;
		
	/**
	 * 
	 */
	fitRainy : string;
		
	/**
	 * 
	 */
	moderateRainy : string;
		
	/**
	 * 
	 */
	heavyRainy : string;
		
	/**
	 * 
	 */
	torrentialRainy : string;
		
	/**
	 * 
	 */
	snowy : string;
		
	/**
	 * 
	 */
	fitSnowy : string;
		
	/**
	 * 
	 */
	moderateSnowy : string;
		
	/**
	 * 
	 */
	heavySnowy : string;
		
	/**
	 * 
	 */
	torrentialSnowy : string;
		
	/**
	 * 
	 */
	fog : string;
		
	/**
	 * 
	 */
	smoke : string;
		
	/**
	 * 
	 */
	sand : string;
		
	/**
	 * 
	 */
	sandStorm : string;
		
	/**
	 * 
	 */
	undefined : string;
}
declare namespace defalutNavNode.0{
	// defalutNavNode.0
	
	/**
	 * 
	 */
	interface 0 {
				
		/**
		 * 
		 */
		id : number;
				
		/**
		 * 
		 */
		name : string;
				
		/**
		 * 
		 */
		icon : string;
				
		/**
		 * 
		 */
		content : string;
	}
}
declare namespace defalutNavNode.1{
	// defalutNavNode.1
	
	/**
	 * 
	 */
	interface 1 {
				
		/**
		 * 
		 */
		id : number;
				
		/**
		 * 
		 */
		name : string;
				
		/**
		 * 
		 */
		icon : string;
	}
}
declare namespace defalutNavNode.2{
	// defalutNavNode.2
	
	/**
	 * 
	 */
	interface 2 {
				
		/**
		 * 
		 */
		id : number;
				
		/**
		 * 
		 */
		name : string;
				
		/**
		 * 
		 */
		icon : string;
	}
}
declare namespace defalutNavNode.3{
	// defalutNavNode.3
	
	/**
	 * 
	 */
	interface 3 {
				
		/**
		 * 
		 */
		id : number;
				
		/**
		 * 
		 */
		name : string;
				
		/**
		 * 
		 */
		icon : string;
	}
}
declare namespace defalutNavNode.4{
	// defalutNavNode.4
	
	/**
	 * 
	 */
	interface 4 {
				
		/**
		 * 
		 */
		id : number;
				
		/**
		 * 
		 */
		name : string;
				
		/**
		 * 
		 */
		icon : string;
	}
}
// getComponentNodeList.!ret

/**
 * 
 */
declare interface Ret {
}

/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230330
 * @version:1.0.0
 * @type:function
 * @description: TS构建class，id等名称
 * ============================================
 */
export declare var namespace : string;

/**
 * 
 */
export declare var commonSeparator : string;

/**
 * 
 */
export declare var outterSeparator : string;

/**
 * 
 */
export declare var elementSeparator : string;

/**
 * 
 */
export declare var statePrefix : string;

/**
 * 构建Container
 * @param component
 * @returns
 * @param component 
 * @return  
 */
declare function buildContainer(component : any): string;

/**
 * 构建Wrap
 * @param component
 * @param wrap
 * @returns
 * @param component 
 * @param wrap 
 * @return  
 */
declare function buildWrap(component : any, wrap : any): string;

/**
 * 构建元素
 * @param component
 * @param element
 * @returns
 * @return  
 */
declare function build(): ComponentBuilder;

/**
 * 
 * @param element 
 * @param state 
 * @return  
 */
declare function when(element : string, state : string): string;

/**
 * Object 转 Map
 * @param lowMap
 * @returns
 * @param lowMap 
 * @return  
 */
declare function objToMap(lowMap : 0): Map;

/**
 * 组件get方法构造器
 */
declare interface ComponentBuilder {
		
	/**
	 * 
	 */
	new ();
		
	/**
	 * 
	 */
	componentNodeList : Array<any>;
	
	/**
	 * 
	 */
	tmpNode : {
				
		/**
		 * 
		 */
		key : string;
				
		/**
		 * 
		 */
		description : string;
	}
}

/**
 * 生成GUID
 * @returns
 * @return  
 */
declare function generateUUID(): string;

/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230330
 * @version:1.0.0
 * @type:output
 * @description: 导出所有涉及到的TS-utils中的函数
 * ============================================
 */
declare var nameBuilder : {
		
	/**
	 * 
	 */
	build : /* build */ any;
		
	/**
	 * 
	 */
	buildContainer : /* buildContainer */ any;
		
	/**
	 * 
	 */
	buildWrap : /* buildWrap */ any;
		
	/**
	 * 
	 */
	when : /* when */ any;
}

/**
 * 
 */
declare var usualUser : {
		
	/**
	 * 
	 */
	objToMap : /* objToMap */ any;
}

/**
 * 
 */
declare var uuidBuilder : {
		
	/**
	 * 
	 */
	generateUUID : /* generateUUID */ any;
}

/**
 * 
 */
declare var __default__$g : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script$g : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
declare var __default__$f : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script$f : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
declare var __default__$e : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script$e : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
declare var weatherDay : {
		
	/**
	 * 
	 */
	sunny : string;
		
	/**
	 * 
	 */
	cloudy : string;
		
	/**
	 * 
	 */
	overcast : string;
		
	/**
	 * 
	 */
	rainy : string;
		
	/**
	 * 
	 */
	fitRainy : string;
		
	/**
	 * 
	 */
	moderateRainy : string;
		
	/**
	 * 
	 */
	heavyRainy : string;
		
	/**
	 * 
	 */
	torrentialRainy : string;
		
	/**
	 * 
	 */
	snowy : string;
		
	/**
	 * 
	 */
	fitSnowy : string;
		
	/**
	 * 
	 */
	moderateSnowy : string;
		
	/**
	 * 
	 */
	heavySnowy : string;
		
	/**
	 * 
	 */
	torrentialSnowy : string;
		
	/**
	 * 
	 */
	fog : string;
		
	/**
	 * 
	 */
	smoke : string;
		
	/**
	 * 
	 */
	sand : string;
		
	/**
	 * 
	 */
	sandStorm : string;
		
	/**
	 * 
	 */
	undefined : string;
}

/**
 * 
 */
declare var weatherNight : {
		
	/**
	 * 
	 */
	sunny : string;
		
	/**
	 * 
	 */
	cloudy : string;
		
	/**
	 * 
	 */
	overcast : string;
		
	/**
	 * 
	 */
	rainy : string;
		
	/**
	 * 
	 */
	fitRainy : string;
		
	/**
	 * 
	 */
	moderateRainy : string;
		
	/**
	 * 
	 */
	heavyRainy : string;
		
	/**
	 * 
	 */
	torrentialRainy : string;
		
	/**
	 * 
	 */
	snowy : string;
		
	/**
	 * 
	 */
	fitSnowy : string;
		
	/**
	 * 
	 */
	moderateSnowy : string;
		
	/**
	 * 
	 */
	heavySnowy : string;
		
	/**
	 * 
	 */
	torrentialSnowy : string;
		
	/**
	 * 
	 */
	fog : string;
		
	/**
	 * 
	 */
	smoke : string;
		
	/**
	 * 
	 */
	sand : string;
		
	/**
	 * 
	 */
	sandStorm : string;
		
	/**
	 * 
	 */
	undefined : string;
}

/**
 * 获取天气图标
 * @param day
 * @param weather
 * @returns
 * @param day 
 * @param weather 
 */
declare function getWeather(day : any, weather : any): void;

/**
 * 
 */
export declare var _hoisted_1$6 : Array<string>;

/**
 * 
 */
export declare var _hoisted_2$5 : Array<string>;

/**
 * 
 */
export declare var _hoisted_3$1 : Array<string>;

/**
 * 
 */
declare var __default__$d : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script$d : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
export declare var img$2 : string;

/**
 * 
 */
export declare var img$1 : string;

/**
 * 
 */
declare var __default__$c : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script$c : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
export declare var defalutNavNode : Array</* defalutNavNode.0,defalutNavNode.1,defalutNavNode.2,defalutNavNode.3,defalutNavNode.4 */ any>;

/**
 * 
 */
declare namespace __default__$b{
		
	/**
	 * 
	 */
	export var name : string;
	
	/**
	 * 
	 */
	var components : {
				
		/**
		 * 
		 */
		RBText : /* script$g */ any;
				
		/**
		 * 
		 */
		RBIcon : /* script$f */ any;
	}
}

/**
 * 
 */
declare var script$b : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
declare var __default__$a : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script$a : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
export declare var _hoisted_1$5 : Array<string>;

/**
 * 
 */
export declare var _hoisted_2$4 : Array<string>;

/**
 * 
 */
declare var __default__$9 : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script$9 : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
export declare var img : string;

/**
 * 
 */
export declare var defaultCode : string;

/**
 * 
 */
export declare var _hoisted_1$4 : Array<string>;

/**
 * 
 */
declare namespace __default__$8{
		
	/**
	 * 
	 */
	export var name : string;
	
	/**
	 * 
	 */
	var components : {
				
		/**
		 * 
		 */
		RBText : /* script$g */ any;
				
		/**
		 * 
		 */
		RBIcon : /* script$f */ any;
	}
}

/**
 * 
 */
declare var script$8 : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
declare var __default__$7 : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script$7 : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
export declare var _hoisted_1$3 : Array<string>;

/**
 * 
 */
export declare var _hoisted_2$2 : Array<string>;

/**
 * 
 */
export declare var _hoisted_3 : Array<string>;

/**
 * 
 */
declare var __default__$6 : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script$6 : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
declare var __default__$5 : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script$5 : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
export declare var _hoisted_1$2 : Array<string>;

/**
 * 
 */
export declare var _hoisted_2$1 : Array<string>;

/**
 * 
 */
declare var __default__$4 : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script$4 : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
declare var __default__$3 : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script$3 : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
declare var __default__$2 : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script$2 : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
declare var __default__$1 : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script$1 : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
export declare var _hoisted_1 : Array<string>;

/**
 * 
 */
declare var __default__ : {
		
	/**
	 * 
	 */
	name : string;
}

/**
 * 
 */
declare var script : {
		
	/**
	 * 
	 */
	__file : string;
}

/**
 * 
 */
export declare var ComponentList : Array</* script$g */ any>;

/**
 * 
 * @param app 
 */
declare function install(app : any): void;

/**
 * 
 */
declare var index : {
		
	/**
	 * 
	 */
	install : /* install */ any;
}

/**
 * 
 * @return  
 */
declare function getComponentNodeList(): Ret;

/**
 * 返回原始对象This
 * @return  
 */
declare function and(): ComponentBuilder;

/**
 * 清除tmpNode
 */
declare function clean(): void;

/**
 * 设置key
 * @param key
 * @returns
 * @param key 
 * @return  
 */
declare function key(key : any): ComponentBuilder;

/**
 * 设置value
 * @param value
 * @returns
 * @param value 
 * @return  
 */
declare function value(value : any): ComponentBuilder;

/**
 * 设置description
 * @param description
 * @returns
 * @param description 
 * @return  
 */
declare function description(description : any): ComponentBuilder;
