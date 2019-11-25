var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[[5],[1,'uni-navbar']],[[2,'?:'],[[7],[3,'isFixed']],[1,'uni-navbar-fixed'],[1,'']]],[[2,'?:'],[[7],[3,'hasShadow']],[1,'uni-navbar-shadow'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']])
Z([[7],[3,'insertStatusBar']])
Z([3,'__l'])
Z([3,'1'])
Z([3,'uni-navbar-header'])
Z([[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']])
Z([[2,'!'],[[7],[3,'barFalg']]])
Z([[7],[3,'barFalg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-swiper__warp'])
Z([[2,'==='],[[7],[3,'mode']],[1,'default']])
Z([[2,'==='],[[7],[3,'mode']],[1,'long']])
Z([[2,'==='],[[7],[3,'mode']],[1,'nav']])
Z([[2,'==='],[[7],[3,'mode']],[1,'indexes']])
Z([[2,'==='],[[7],[3,'mode']],[1,'long\x26nav']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'wuc-tab']],[[7],[3,'tabClass']]]])
Z([[7],[3,'scrollLeft']])
Z([[7],[3,'tabStyle']])
Z([[2,'!'],[[7],[3,'textFlex']]])
Z([[7],[3,'textFlex']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'allClass'])
Z([[2,'>'],[[6],[[7],[3,'areaArr']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'sortArr']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'yearArr']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'langArr']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'overArr']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'rankArr']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'movieArr']])
Z(z[7])
Z([3,'__e'])
Z([3,'allMovie-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toMovie']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'vodId']])
Z([[6],[[7],[3,'item']],[3,'trgRemark']])
Z([[7],[3,'showLoadMore']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'phone-old'])
Z([[2,'!'],[[7],[3,'beginFalg']]])
Z([[7],[3,'beginFalg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'checkboxChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'collectArr']])
Z(z[2])
Z(z[0])
Z([3,'checkbox'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toMovie']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'vodId']])
Z([[7],[3,'isCancel']])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'listMovie'])
Z([3,'index'])
Z([3,'opts'])
Z([[6],[[6],[[7],[3,'newsitemData']],[[7],[3,'tabIndex']]],[3,'data']])
Z(z[1])
Z([3,'__l'])
Z([[7],[3,'opts']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[7],[3,'baseline']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'list-cell view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'bindClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'uni-list-cell-hover'])
Z([[6],[[7],[3,'options']],[3,'topicPic']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'topicsPage'])
Z([3,'index2'])
Z([3,'newsitem'])
Z([[7],[3,'newsitemData']])
Z(z[1])
Z([3,'__l'])
Z([[7],[3,'newsitem']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index2']]])
Z([[7],[3,'baseline']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-column'])
Z([3,'scrollview'])
Z([[7],[3,'scrollTop']])
Z([1,true])
Z([3,'true'])
Z([[7],[3,'commentListShow']])
Z([3,'index1'])
Z([3,'newsitem'])
Z([[7],[3,'commentData']])
Z(z[6])
Z([[2,'!'],[[7],[3,'commentListShow']]])
Z([3,'__e'])
Z([3,'detail_content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'checkOtherComment']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'commentData']],[1,'']],[[7],[3,'index1']]]]]]]]]]]]]]]])
Z([3,'__l'])
Z([[7],[3,'newsitem']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index1']]])
Z(z[14])
Z(z[11])
Z([[4],[[5],[[4],[[5],[[5],[1,'^sendMessage']],[[4],[[5],[[4],[[5],[1,'toSendMessage']]]]]]]]])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-column'])
Z([3,'scrollview'])
Z([[7],[3,'scrollTop']])
Z([1,true])
Z([3,'true'])
Z([[7],[3,'commentListShow']])
Z([3,'index1'])
Z([3,'newsitem'])
Z([[7],[3,'commentData']])
Z(z[6])
Z([[2,'!'],[[7],[3,'commentListShow']]])
Z([3,'__l'])
Z([[7],[3,'newsitem']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index1']]])
Z(z[11])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^sendMessage']],[[4],[[5],[[4],[[5],[1,'toSendMessage']]]]]]]]])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'downLoad'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'checkboxChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'downVideo']])
Z(z[3])
Z(z[1])
Z([3,'checkbox'])
Z([[6],[[7],[3,'item']],[3,'down']])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'video']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([[6],[[7],[3,'item']],[3,'size']])
Z([[6],[[7],[3,'item']],[3,'path']])
Z([[7],[3,'isCancel']])
Z([3,'movie-info'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'percent']]])
Z([[6],[[7],[3,'item']],[3,'percent']])
Z(z[15])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'downLoad'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'checkboxChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'downVideo']])
Z(z[3])
Z(z[1])
Z([3,'checkbox'])
Z([[6],[[7],[3,'item']],[3,'down']])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'videoMore']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([[6],[[7],[3,'item']],[3,'size']])
Z([[6],[[7],[3,'item']],[3,'path']])
Z([[7],[3,'isCancel']])
Z([3,'movie-info'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'percent']]])
Z([[6],[[7],[3,'item']],[3,'percent']])
Z(z[15])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'forget_password_phone'])
Z([[2,'!'],[[7],[3,'beginFalg']]])
Z([[7],[3,'beginFalg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'modules'])
Z([[6],[[7],[3,'info']],[3,'length']])
Z([3,'__l'])
Z([[7],[3,'currentDot']])
Z([[7],[3,'dotsStyles']])
Z([3,'vodName'])
Z([[7],[3,'info']])
Z([[7],[3,'mode']])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([[7],[3,'autoplay']])
Z([3,'__e'])
Z(z[11])
Z([3,'true'])
Z([3,'swiper-box'])
Z([[7],[3,'currentSwiper']])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'animationfinish']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'dotChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z(z[6])
Z(z[17])
Z(z[11])
Z([[4],[[5],[[5],[1,'swiper-item']],[[6],[[7],[3,'item']],[3,'colorClass']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'movieTo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'vodId']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'vodPicThumb']]])
Z([[6],[[7],[3,'item']],[3,'vodPicThumb']])
Z(z[17])
Z([3,'hotItem'])
Z([[7],[3,'hot']])
Z(z[17])
Z(z[17])
Z(z[18])
Z([[6],[[7],[3,'hotItem']],[3,'movie']])
Z(z[17])
Z(z[11])
Z([3,'movie-style'])
Z(z[23])
Z(z[24])
Z([[6],[[7],[3,'item']],[3,'trgRemark']])
Z(z[17])
Z(z[18])
Z([[7],[3,'module']])
Z(z[17])
Z([[2,'!'],[[2,'==='],[[6],[[7],[3,'item']],[3,'name']],[1,'明星专区']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'name']],[1,'明星专区']])
Z(z[17])
Z(z[18])
Z([[7],[3,'star']])
Z(z[17])
Z(z[11])
Z([3,'module-star-people-movie'])
Z(z[23])
Z(z[24])
Z(z[39])
Z([[6],[[7],[3,'item']],[3,'movie']])
Z([3,'movies-style'])
Z(z[17])
Z(z[18])
Z(z[55])
Z(z[17])
Z(z[11])
Z(z[36])
Z(z[23])
Z(z[24])
Z(z[39])
Z([[2,'&&'],[[2,'==='],[[7],[3,'itemId']],[[6],[[7],[3,'item']],[3,'modleId']]],[[2,'>'],[[6],[[7],[3,'changeList']],[3,'length']],[1,0]]])
Z(z[17])
Z(z[18])
Z([[7],[3,'changeList']])
Z(z[17])
Z(z[11])
Z(z[36])
Z(z[23])
Z(z[24])
Z(z[39])
Z(z[44])
Z([[7],[3,'flag']])
Z(z[17])
Z(z[18])
Z([[7],[3,'more']])
Z(z[17])
Z(z[56])
Z(z[17])
Z(z[18])
Z([[6],[[7],[3,'item']],[3,'modle']])
Z(z[17])
Z(z[11])
Z(z[36])
Z(z[23])
Z(z[24])
Z(z[39])
Z([[2,'==='],[[7],[3,'itemId']],[[6],[[7],[3,'item']],[3,'modleId']]])
Z(z[17])
Z(z[18])
Z(z[69])
Z(z[17])
Z(z[11])
Z(z[36])
Z(z[23])
Z(z[24])
Z(z[39])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([3,'__e'])
Z([3,'swiper'])
Z([[7],[3,'index']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,500])
Z(z[0])
Z(z[1])
Z([3,'showHidePwd'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showPass']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'isShowPwd']])
Z([[2,'!'],[[7],[3,'isShowPwd']]])
Z([3,'swiper-item swiper-item-right'])
Z([[2,'!'],[[7],[3,'beginFalg']]])
Z([[7],[3,'beginFalg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'more'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'moreMovies']])
Z(z[1])
Z([3,'__e'])
Z([3,'movie-style'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'movieTo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'vodId']])
Z([[6],[[7],[3,'item']],[3,'trgRemark']])
Z([[7],[3,'showLoadMore']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[2,'?:'],[[7],[3,'isCancel']],[1,'playHistory'],[1,'']]]])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'checkboxChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'historyArr']])
Z(z[3])
Z(z[1])
Z([3,'checkbox'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toMovie']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'vodId']])
Z([[7],[3,'isCancel']])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeCheckbox']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z(z[4])
Z([[7],[3,'localArr']])
Z(z[3])
Z(z[1])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'footer'])
Z([[7],[3,'inputFocusStatus']])
Z([[2,'!'],[[7],[3,'inputFocusStatus']]])
Z([3,'playFoot_button'])
Z([[7],[3,'imageStatus']])
Z([[2,'!'],[[7],[3,'imageStatus']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'comment_detail'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'checkOtherContent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'other_coment_status']])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'playVideoPage'])
Z([3,'scrollview'])
Z([[7],[3,'scrollTop']])
Z([1,true])
Z([3,'true'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[6],[[7],[3,'style']],[3,'contentViewHeight']],[1,'px']]],[1,';']])
Z([[7],[3,'select_status']])
Z([3,'comment_area'])
Z([[7],[3,'commentListShow']])
Z([3,'index1'])
Z([3,'newsitem'])
Z([[7],[3,'commentData']])
Z(z[9])
Z([[2,'!'],[[7],[3,'commentListShow']]])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^checkOtherContent']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'checkOtherContent']],[[4],[[5],[[5],[[5],[[7],[3,'index1']]],[1,'$0']],[1,'content']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'commentData']],[1,'']],[[7],[3,'index1']]]]]]]]]]]]]]]])
Z([[7],[3,'newsitem']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index1']]])
Z([[7],[3,'loadSurvey']])
Z(z[14])
Z(z[15])
Z(z[15])
Z(z[15])
Z(z[15])
Z(z[15])
Z(z[15])
Z(z[15])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^sendComent']],[[4],[[5],[[4],[[5],[1,'toSendComent']]]]]]]],[[4],[[5],[[5],[1,'^inputFocusEvent']],[[4],[[5],[[4],[[5],[1,'bigInputFocus']]]]]]]],[[4],[[5],[[5],[1,'^inputBlurEvent']],[[4],[[5],[[4],[[5],[1,'bigInputBlur']]]]]]]],[[4],[[5],[[5],[1,'^addMyLikeEvent']],[[4],[[5],[[4],[[5],[1,'toAddLike']]]]]]]],[[4],[[5],[[5],[1,'^toDownLoadEvent']],[[4],[[5],[[4],[[5],[1,'toDownLoad']]]]]]]],[[4],[[5],[[5],[1,'^toShareEvent']],[[4],[[5],[[4],[[5],[1,'toShare']]]]]]]],[[4],[[5],[[5],[1,'^toLoginEvent']],[[4],[[5],[[4],[[5],[1,'toLogin']]]]]]]]])
Z([3,'chatinput'])
Z([[7],[3,'loadComplent']])
Z([3,'2'])
Z(z[14])
Z([3,'bottom'])
Z([[2,'==='],[[7],[3,'type']],[1,'detail']])
Z([3,'3'])
Z([[4],[[5],[1,'default']]])
Z(z[14])
Z(z[34])
Z([[2,'==='],[[7],[3,'type']],[1,'content']])
Z([3,'4'])
Z(z[37])
Z([3,'all_content'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[6],[[7],[3,'style']],[3,'allConment']],[1,'px']]],[1,';']])
Z([3,'detail_infor'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[6],[[7],[3,'style']],[3,'commentViewHeight']],[1,'px']]],[1,';']])
Z(z[9])
Z(z[10])
Z([[7],[3,'otherContentList']])
Z(z[9])
Z([[2,'!'],[[7],[3,'otherCommentListShow']]])
Z(z[14])
Z(z[17])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'5-'],[[7],[3,'index1']]],[1,',']],[1,'4']])
Z([[7],[3,'otherCommentListShow']])
Z(z[19])
Z(z[14])
Z(z[15])
Z(z[15])
Z(z[15])
Z(z[15])
Z(z[15])
Z(z[15])
Z(z[15])
Z(z[28])
Z(z[29])
Z(z[30])
Z(z[31])
Z([[2,'+'],[[2,'+'],[1,'6'],[1,',']],[1,'4']])
Z(z[14])
Z(z[34])
Z([[2,'==='],[[7],[3,'type']],[1,'selected_works']])
Z([3,'7'])
Z(z[37])
Z(z[14])
Z(z[34])
Z([[2,'==='],[[7],[3,'type']],[1,'downLoad_selected_works']])
Z([3,'8'])
Z(z[37])
Z(z[14])
Z(z[15])
Z([[4],[[5],[[4],[[5],[[5],[1,'^hidePopup']],[[4],[[5],[[4],[[5],[[5],[1,'togglePopup']],[[4],[[5],[1,'close_bottom_share']]]]]]]]]]])
Z(z[34])
Z(z[3])
Z([[2,'==='],[[7],[3,'type']],[1,'bottom_share']])
Z([3,'9'])
Z(z[37])
Z([3,'shareGroup'])
Z([[7],[3,'videoToShareStatus']])
Z(z[14])
Z(z[15])
Z(z[15])
Z(z[15])
Z([3,'share_popup'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^failShareEvent']],[[4],[[5],[[4],[[5],[1,'failShare']]]]]]]],[[4],[[5],[[5],[1,'^successShareEvent']],[[4],[[5],[[4],[[5],[1,'successShare']]]]]]]],[[4],[[5],[[5],[1,'^togglePopupEvent']],[[4],[[5],[[4],[[5],[[5],[1,'togglePopup']],[[4],[[5],[1,'close_bottom_share']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'10'],[1,',']],[1,'9']])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'uni-popup']],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'uni-popup-'],[[7],[3,'position']]],[1,' ']],[1,'uni-popup-']],[[7],[3,'mode']]]]])
Z([[2,'!'],[[7],[3,'show']]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'position']],[1,'middle']],[[2,'==='],[[7],[3,'mode']],[1,'insert']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'registered_account_phone'])
Z([[2,'!'],[[7],[3,'beginFalg']]])
Z([[7],[3,'beginFalg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'searchFalg']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'searchArr']])
Z(z[1])
Z([3,'__e'])
Z([3,'search-content-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toMovieItem']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'vodId']])
Z([[6],[[7],[3,'item']],[3,'trgRemark']])
Z([[7],[3,'hasSearch']])
Z([[7],[3,'itemFalg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'system'])
Z([[2,'>'],[[6],[[7],[3,'msgArr']],[3,'length']],[1,0]])
Z([[7],[3,'hasMsg']])
Z([[7],[3,'hasNet']])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_page'])
Z([[2,'=='],[[7],[3,'tabIndex']],[1,0]])
Z([[7],[3,'topicBaseLine']])
Z([3,'__l'])
Z([3,'single_page vue-ref'])
Z([3,'topics'])
Z([[7],[3,'tp1']])
Z([3,'1'])
Z([[2,'=='],[[7],[3,'tabIndex']],[1,1]])
Z([[7],[3,'rankingBaseLine']])
Z(z[3])
Z(z[4])
Z([3,'filmRanking'])
Z([[7],[3,'tp2']])
Z([[7],[3,'tabBars2']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'barFalg']])
Z([[7],[3,'TabCur']])
Z([3,'__l'])
Z([1,false])
Z([3,'false'])
Z([[7],[3,'title']])
Z([3,'1'])
Z(z[2])
Z([3,'__e'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^updateTabCur']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_sync']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'TabCur']],[1,'$event']]]],[[4],[[5],[1,'']]]]]]]]]],[[4],[[5],[[5],[1,'^updateTabCur']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_sync']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'TabCur']],[1,'$event']]]],[[4],[[5],[1,'']]]]]]]]]]])
Z([3,'text-blue text-xl'])
Z([3,'text-center bg-white wuc-tab fixed'])
Z([[7],[3,'tabList']])
Z(z[1])
Z([3,'2'])
Z([[7],[3,'actor']])
Z([[7],[3,'autoplay']])
Z(z[2])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'^star']],[[4],[[5],[[4],[[5],[1,'starChange']]]]]]]]])
Z([[7],[3,'moreFlag']])
Z([[7],[3,'hotMovie']])
Z(z[1])
Z([[7],[3,'info']])
Z(z[0])
Z([[7],[3,'module']])
Z([[7],[3,'moreArray']])
Z([[7],[3,'star']])
Z([3,'3'])
Z([[7],[3,'showLoadMore']])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'mine_head_login'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'userinfo']],[3,'loginStatus']])
Z([[2,'!'],[[6],[[7],[3,'userinfo']],[3,'loginStatus']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'taskShow']])
Z([3,'index2'])
Z([3,'newsitem'])
Z([[6],[[7],[3,'task_basic_data']],[3,'taskList']])
Z(z[1])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^changeData']],[[4],[[5],[[4],[[5],[1,'toChangData']]]]]]]]])
Z([1,1])
Z([[7],[3,'newsitem']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index2']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'my_coin'])
Z([[7],[3,'myCoinListStatus']])
Z([[2,'!'],[[7],[3,'myCoinListStatus']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'my_exchange_list'])
Z([[7],[3,'exchangeListStatus']])
Z([3,'index2'])
Z([3,'newsitem'])
Z([[6],[[7],[3,'exchangeData']],[3,'excList']])
Z(z[2])
Z([[2,'!'],[[7],[3,'exchangeListStatus']]])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^exchange']],[[4],[[5],[[4],[[5],[1,'toExchange']]]]]]]]])
Z([1,2])
Z([[7],[3,'newsitem']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index2']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'my_invitation_list'])
Z([[7],[3,'invitationListStatus']])
Z([3,'index2'])
Z([3,'newsitem'])
Z([[7],[3,'invitationData']])
Z(z[2])
Z([[2,'!'],[[7],[3,'invitationListStatus']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'item_describe'])
Z([[6],[[7],[3,'options']],[3,'taskPointDesc']])
Z([3,'task_reword'])
Z([[6],[[7],[3,'options']],[3,'luckNum']])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/uni-icon/uni-icon.wxml','./components/uni-nav-bar-diy/uni-nav-bar-diy.wxml','./components/uni-status-bar/uni-status-bar.wxml','./components/uni-swiper-dot/uni-swiper-dot.wxml','./components/wuc-tab/wuc-tab.wxml','./pages/allClass/allClass.wxml','./pages/autograph/autograph.wxml','./pages/changeName/changeName.wxml','./pages/changePhone/changePhone.wxml','./pages/changePwd/changePwd.wxml','./pages/classify/classify.wxml','./pages/collection/collection.wxml','./pages/discover/filmRanking/filmList.wxml','./pages/discover/filmRanking/filmRanking.wxml','./pages/discover/topics/input_detail.wxml','./pages/discover/topics/mediaList.wxml','./pages/discover/topics/topics.wxml','./pages/discover/topics/topics_details.wxml','./pages/discover/topics/topics_details_comment.wxml','./pages/download/download.wxml','./pages/download/video/video.wxml','./pages/download/videoPlay/videoPlay.wxml','./pages/editProfile/editProfile.wxml','./pages/feedback/feedback.wxml','./pages/forgetPwd/forgetPwd.wxml','./pages/helpCenter/helpCenter.wxml','./pages/home/home/home-module.wxml','./pages/inviteCode/inviteCode.wxml','./pages/login/login.wxml','./pages/luckDraw/luckDraw.wxml','./pages/more/more.wxml','./pages/playHistory/playHistory.wxml','./pages/playPage/chatinput.wxml','./pages/playPage/commentItem.wxml','./pages/playPage/playPage.wxml','./pages/playPage/share.wxml','./pages/playPage/uni-popup.wxml','./pages/register/register.wxml','./pages/search/search.wxml','./pages/security/security.wxml','./pages/setting/setting.wxml','./pages/systemMsg/systemMsg.wxml','./pages/tarbar/discover/discover.wxml','./pages/tarbar/home/home.wxml','./pages/tarbar/mine/mine.wxml','./pages/tarbar/share/share.wxml','./pages/tarbar/task/task.wxml','./pages/task/my_coin.wxml','./pages/task/my_exchange.wxml','./pages/task/my_invitation.wxml','./pages/task/taskItem.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,2,e,s,gg)){oD.wxVkey=1
var fE=_mz(z,'uni-status-bar',['bind:__l',3,'vueId',1],[],e,s,gg)
_(oD,fE)
}
var cF=_mz(z,'view',['class',5,'style',1],[],e,s,gg)
var cI=_n('slot')
_(cF,cI)
var hG=_v()
_(cF,hG)
if(_oz(z,7,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(cF,oH)
if(_oz(z,8,e,s,gg)){oH.wxVkey=1
}
hG.wxXCkey=1
oH.wxXCkey=1
_(xC,cF)
oD.wxXCkey=1
oD.wxXCkey=3
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var lK=_n('slot')
_(r,lK)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var tM=_n('view')
_rz(z,tM,'class',0,e,s,gg)
var fS=_n('slot')
_(tM,fS)
var eN=_v()
_(tM,eN)
if(_oz(z,1,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(tM,bO)
if(_oz(z,2,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(tM,oP)
if(_oz(z,3,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(tM,xQ)
if(_oz(z,4,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(tM,oR)
if(_oz(z,5,e,s,gg)){oR.wxVkey=1
}
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
_(r,tM)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var hU=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollX',-1,'class',0,'scrollLeft',1,'style',1],[],e,s,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,3,e,s,gg)){oV.wxVkey=1
}
var cW=_v()
_(hU,cW)
if(_oz(z,4,e,s,gg)){cW.wxVkey=1
}
oV.wxXCkey=1
cW.wxXCkey=1
_(r,hU)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var lY=_n('view')
var t1=_n('view')
_rz(z,t1,'class',0,e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,1,e,s,gg)){e2.wxVkey=1
}
var b3=_v()
_(t1,b3)
if(_oz(z,2,e,s,gg)){b3.wxVkey=1
}
var o4=_v()
_(t1,o4)
if(_oz(z,3,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(t1,x5)
if(_oz(z,4,e,s,gg)){x5.wxVkey=1
}
var o6=_v()
_(t1,o6)
if(_oz(z,5,e,s,gg)){o6.wxVkey=1
}
var f7=_v()
_(t1,f7)
if(_oz(z,6,e,s,gg)){f7.wxVkey=1
}
e2.wxXCkey=1
b3.wxXCkey=1
o4.wxXCkey=1
x5.wxXCkey=1
o6.wxXCkey=1
f7.wxXCkey=1
_(lY,t1)
var c8=_v()
_(lY,c8)
var h9=function(cAB,o0,oBB,gg){
var aDB=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2,'id',3],[],cAB,o0,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,15,cAB,o0,gg)){tEB.wxVkey=1
}
tEB.wxXCkey=1
_(oBB,aDB)
return oBB
}
c8.wxXCkey=2
_2z(z,9,h9,e,s,gg,c8,'item','index','index')
var aZ=_v()
_(lY,aZ)
if(_oz(z,16,e,s,gg)){aZ.wxVkey=1
}
aZ.wxXCkey=1
_(r,lY)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var xIB=_n('view')
_rz(z,xIB,'class',0,e,s,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,1,e,s,gg)){oJB.wxVkey=1
}
var fKB=_v()
_(xIB,fKB)
if(_oz(z,2,e,s,gg)){fKB.wxVkey=1
}
oJB.wxXCkey=1
fKB.wxXCkey=1
_(r,xIB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var cOB=_n('view')
var lQB=_mz(z,'checkbox-group',['bindchange',0,'data-event-opts',1],[],e,s,gg)
var aRB=_v()
_(lQB,aRB)
var tSB=function(bUB,eTB,oVB,gg){
var oXB=_mz(z,'label',['bindtap',6,'class',1,'data-event-opts',2,'id',3],[],bUB,eTB,gg)
var fYB=_v()
_(oXB,fYB)
if(_oz(z,10,bUB,eTB,gg)){fYB.wxVkey=1
}
fYB.wxXCkey=1
_(oVB,oXB)
return oVB
}
aRB.wxXCkey=2
_2z(z,4,tSB,e,s,gg,aRB,'item','index','index')
_(cOB,lQB)
var oPB=_v()
_(cOB,oPB)
if(_oz(z,11,e,s,gg)){oPB.wxVkey=1
}
oPB.wxXCkey=1
_(r,cOB)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var o2B=_n('view')
_rz(z,o2B,'class',0,e,s,gg)
var o4B=_v()
_(o2B,o4B)
var l5B=function(t7B,a6B,e8B,gg){
var o0B=_mz(z,'film-list',['bind:__l',5,'options',1,'vueId',2],[],t7B,a6B,gg)
_(e8B,o0B)
return e8B
}
o4B.wxXCkey=4
_2z(z,3,l5B,e,s,gg,o4B,'opts','index','index')
var c3B=_v()
_(o2B,c3B)
if(_oz(z,8,e,s,gg)){c3B.wxVkey=1
}
c3B.wxXCkey=1
_(r,o2B)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var fCC=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2],[],e,s,gg)
var cDC=_v()
_(fCC,cDC)
if(_oz(z,4,e,s,gg)){cDC.wxVkey=1
}
cDC.wxXCkey=1
_(r,fCC)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oFC=_n('view')
_rz(z,oFC,'class',0,e,s,gg)
var oHC=_v()
_(oFC,oHC)
var lIC=function(tKC,aJC,eLC,gg){
var oNC=_mz(z,'media-list',['bind:__l',5,'options',1,'vueId',2],[],tKC,aJC,gg)
_(eLC,oNC)
return eLC
}
oHC.wxXCkey=4
_2z(z,3,lIC,e,s,gg,oHC,'newsitem','index2','index2')
var cGC=_v()
_(oFC,cGC)
if(_oz(z,8,e,s,gg)){cGC.wxVkey=1
}
cGC.wxXCkey=1
_(r,oFC)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var oPC=_n('view')
_rz(z,oPC,'class',0,e,s,gg)
var fQC=_mz(z,'scroll-view',['id',1,'scrollTop',1,'scrollWithAnimation',2,'scrollY',3],[],e,s,gg)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,5,e,s,gg)){cRC.wxVkey=1
}
var hSC=_v()
_(fQC,hSC)
var oTC=function(oVC,cUC,lWC,gg){
var tYC=_v()
_(lWC,tYC)
if(_oz(z,10,oVC,cUC,gg)){tYC.wxVkey=1
var eZC=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],oVC,cUC,gg)
var b1C=_mz(z,'comm-item',['bind:__l',14,'options',1,'vueId',2],[],oVC,cUC,gg)
_(eZC,b1C)
_(tYC,eZC)
}
tYC.wxXCkey=1
tYC.wxXCkey=3
return lWC
}
hSC.wxXCkey=4
_2z(z,8,oTC,e,s,gg,hSC,'newsitem','index1','index1')
cRC.wxXCkey=1
_(oPC,fQC)
var o2C=_mz(z,'input_detail',['bind:__l',17,'bind:sendMessage',1,'data-event-opts',2,'vueId',3],[],e,s,gg)
_(oPC,o2C)
_(r,oPC)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var o4C=_n('view')
_rz(z,o4C,'class',0,e,s,gg)
var f5C=_mz(z,'scroll-view',['id',1,'scrollTop',1,'scrollWithAnimation',2,'scrollY',3],[],e,s,gg)
var c6C=_v()
_(f5C,c6C)
if(_oz(z,5,e,s,gg)){c6C.wxVkey=1
}
var h7C=_v()
_(f5C,h7C)
var o8C=function(o0C,c9C,lAD,gg){
var tCD=_v()
_(lAD,tCD)
if(_oz(z,10,o0C,c9C,gg)){tCD.wxVkey=1
var eDD=_mz(z,'comm-item',['bind:__l',11,'options',1,'vueId',2],[],o0C,c9C,gg)
_(tCD,eDD)
}
tCD.wxXCkey=1
tCD.wxXCkey=3
return lAD
}
h7C.wxXCkey=4
_2z(z,8,o8C,e,s,gg,h7C,'newsitem','index1','index1')
c6C.wxXCkey=1
_(o4C,f5C)
var bED=_mz(z,'input_detail',['bind:__l',14,'bind:sendMessage',1,'data-event-opts',2,'vueId',3],[],e,s,gg)
_(o4C,bED)
_(r,o4C)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var xGD=_n('view')
_rz(z,xGD,'class',0,e,s,gg)
var fID=_mz(z,'checkbox-group',['bindchange',1,'data-event-opts',1],[],e,s,gg)
var cJD=_v()
_(fID,cJD)
var hKD=function(cMD,oLD,oND,gg){
var aPD=_mz(z,'label',['bindtap',7,'class',1,'data-down',2,'data-event-opts',3,'data-index',4,'data-name',5,'data-str',6,'data-url',7],[],cMD,oLD,gg)
var tQD=_v()
_(aPD,tQD)
if(_oz(z,15,cMD,oLD,gg)){tQD.wxVkey=1
}
var eRD=_n('view')
_rz(z,eRD,'class',16,cMD,oLD,gg)
var bSD=_v()
_(eRD,bSD)
if(_oz(z,17,cMD,oLD,gg)){bSD.wxVkey=1
}
var oTD=_v()
_(eRD,oTD)
if(_oz(z,18,cMD,oLD,gg)){oTD.wxVkey=1
}
bSD.wxXCkey=1
oTD.wxXCkey=1
_(aPD,eRD)
tQD.wxXCkey=1
_(oND,aPD)
return oND
}
cJD.wxXCkey=2
_2z(z,5,hKD,e,s,gg,cJD,'item','index','index')
_(xGD,fID)
var oHD=_v()
_(xGD,oHD)
if(_oz(z,19,e,s,gg)){oHD.wxVkey=1
}
oHD.wxXCkey=1
_(r,xGD)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var oVD=_n('view')
_rz(z,oVD,'class',0,e,s,gg)
var cXD=_mz(z,'checkbox-group',['bindchange',1,'data-event-opts',1],[],e,s,gg)
var hYD=_v()
_(cXD,hYD)
var oZD=function(o2D,c1D,l3D,gg){
var t5D=_mz(z,'label',['bindtap',7,'class',1,'data-down',2,'data-event-opts',3,'data-index',4,'data-name',5,'data-str',6,'data-url',7],[],o2D,c1D,gg)
var e6D=_v()
_(t5D,e6D)
if(_oz(z,15,o2D,c1D,gg)){e6D.wxVkey=1
}
var b7D=_n('view')
_rz(z,b7D,'class',16,o2D,c1D,gg)
var o8D=_v()
_(b7D,o8D)
if(_oz(z,17,o2D,c1D,gg)){o8D.wxVkey=1
}
var x9D=_v()
_(b7D,x9D)
if(_oz(z,18,o2D,c1D,gg)){x9D.wxVkey=1
}
o8D.wxXCkey=1
x9D.wxXCkey=1
_(t5D,b7D)
e6D.wxXCkey=1
_(l3D,t5D)
return l3D
}
hYD.wxXCkey=2
_2z(z,5,oZD,e,s,gg,hYD,'item','index','index')
_(oVD,cXD)
var fWD=_v()
_(oVD,fWD)
if(_oz(z,19,e,s,gg)){fWD.wxVkey=1
}
fWD.wxXCkey=1
_(r,oVD)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var oDE=_n('view')
_rz(z,oDE,'class',0,e,s,gg)
var cEE=_v()
_(oDE,cEE)
if(_oz(z,1,e,s,gg)){cEE.wxVkey=1
}
var oFE=_v()
_(oDE,oFE)
if(_oz(z,2,e,s,gg)){oFE.wxVkey=1
}
cEE.wxXCkey=1
oFE.wxXCkey=1
_(r,oDE)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var tIE=_n('view')
_rz(z,tIE,'class',0,e,s,gg)
var eJE=_v()
_(tIE,eJE)
if(_oz(z,1,e,s,gg)){eJE.wxVkey=1
var oLE=_mz(z,'uni-swiper-dot',['bind:__l',2,'current',1,'dotsStyles',2,'field',3,'info',4,'mode',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var xME=_mz(z,'swiper',['autoplay',10,'bindanimationfinish',1,'bindchange',2,'circular',3,'class',4,'current',5,'data-event-opts',6],[],e,s,gg)
var oNE=_v()
_(xME,oNE)
var fOE=function(hQE,cPE,oRE,gg){
var oTE=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2,'data-id',3],[],hQE,cPE,gg)
var lUE=_v()
_(oTE,lUE)
if(_oz(z,25,hQE,cPE,gg)){lUE.wxVkey=1
}
var aVE=_v()
_(oTE,aVE)
if(_oz(z,26,hQE,cPE,gg)){aVE.wxVkey=1
}
lUE.wxXCkey=1
aVE.wxXCkey=1
_(oRE,oTE)
return oRE
}
oNE.wxXCkey=2
_2z(z,19,fOE,e,s,gg,oNE,'item','index','index')
_(oLE,xME)
_(eJE,oLE)
}
var tWE=_v()
_(tIE,tWE)
var eXE=function(oZE,bYE,x1E,gg){
var f3E=_v()
_(x1E,f3E)
var c4E=function(o6E,h5E,c7E,gg){
var l9E=_mz(z,'view',['bindtap',35,'class',1,'data-event-opts',2,'data-id',3],[],o6E,h5E,gg)
var a0E=_v()
_(l9E,a0E)
if(_oz(z,39,o6E,h5E,gg)){a0E.wxVkey=1
}
a0E.wxXCkey=1
_(c7E,l9E)
return c7E
}
f3E.wxXCkey=2
_2z(z,33,c4E,oZE,bYE,gg,f3E,'item','index','index')
return x1E
}
tWE.wxXCkey=2
_2z(z,29,eXE,e,s,gg,tWE,'hotItem','index','index')
var tAF=_v()
_(tIE,tAF)
var eBF=function(oDF,bCF,xEF,gg){
var fGF=_n('view')
var cHF=_v()
_(fGF,cHF)
if(_oz(z,44,oDF,bCF,gg)){cHF.wxVkey=1
}
var hIF=_v()
_(fGF,hIF)
if(_oz(z,45,oDF,bCF,gg)){hIF.wxVkey=1
var oLF=_v()
_(hIF,oLF)
var lMF=function(tOF,aNF,ePF,gg){
var oRF=_mz(z,'view',['bindtap',50,'class',1,'data-event-opts',2,'data-id',3],[],tOF,aNF,gg)
var xSF=_v()
_(oRF,xSF)
if(_oz(z,54,tOF,aNF,gg)){xSF.wxVkey=1
}
xSF.wxXCkey=1
_(ePF,oRF)
return ePF
}
oLF.wxXCkey=2
_2z(z,48,lMF,oDF,bCF,gg,oLF,'item','index','index')
}
var oJF=_v()
_(fGF,oJF)
if(_oz(z,55,oDF,bCF,gg)){oJF.wxVkey=1
var oTF=_n('view')
_rz(z,oTF,'class',56,oDF,bCF,gg)
var cVF=_v()
_(oTF,cVF)
var hWF=function(cYF,oXF,oZF,gg){
var a2F=_mz(z,'view',['bindtap',61,'class',1,'data-event-opts',2,'data-id',3],[],cYF,oXF,gg)
var t3F=_v()
_(a2F,t3F)
if(_oz(z,65,cYF,oXF,gg)){t3F.wxVkey=1
}
t3F.wxXCkey=1
_(oZF,a2F)
return oZF
}
cVF.wxXCkey=2
_2z(z,59,hWF,oDF,bCF,gg,cVF,'item','index','index')
var fUF=_v()
_(oTF,fUF)
if(_oz(z,66,oDF,bCF,gg)){fUF.wxVkey=1
var e4F=_v()
_(fUF,e4F)
var b5F=function(x7F,o6F,o8F,gg){
var c0F=_mz(z,'view',['bindtap',71,'class',1,'data-event-opts',2,'data-id',3],[],x7F,o6F,gg)
var hAG=_v()
_(c0F,hAG)
if(_oz(z,75,x7F,o6F,gg)){hAG.wxVkey=1
}
hAG.wxXCkey=1
_(o8F,c0F)
return o8F
}
e4F.wxXCkey=2
_2z(z,69,b5F,oDF,bCF,gg,e4F,'item','index','index')
}
fUF.wxXCkey=1
_(oJF,oTF)
}
var cKF=_v()
_(fGF,cKF)
if(_oz(z,76,oDF,bCF,gg)){cKF.wxVkey=1
}
cHF.wxXCkey=1
hIF.wxXCkey=1
oJF.wxXCkey=1
cKF.wxXCkey=1
_(xEF,fGF)
return xEF
}
tAF.wxXCkey=2
_2z(z,42,eBF,e,s,gg,tAF,'item','index','index')
var bKE=_v()
_(tIE,bKE)
if(_oz(z,77,e,s,gg)){bKE.wxVkey=1
var oBG=_v()
_(bKE,oBG)
var cCG=function(lEG,oDG,aFG,gg){
var eHG=_n('view')
_rz(z,eHG,'class',82,lEG,oDG,gg)
var oJG=_v()
_(eHG,oJG)
var xKG=function(fMG,oLG,cNG,gg){
var oPG=_mz(z,'view',['bindtap',87,'class',1,'data-event-opts',2,'data-id',3],[],fMG,oLG,gg)
var cQG=_v()
_(oPG,cQG)
if(_oz(z,91,fMG,oLG,gg)){cQG.wxVkey=1
}
cQG.wxXCkey=1
_(cNG,oPG)
return cNG
}
oJG.wxXCkey=2
_2z(z,85,xKG,lEG,oDG,gg,oJG,'item','index','index')
var bIG=_v()
_(eHG,bIG)
if(_oz(z,92,lEG,oDG,gg)){bIG.wxVkey=1
var oRG=_v()
_(bIG,oRG)
var lSG=function(tUG,aTG,eVG,gg){
var oXG=_mz(z,'view',['bindtap',97,'class',1,'data-event-opts',2,'data-id',3],[],tUG,aTG,gg)
var xYG=_v()
_(oXG,xYG)
if(_oz(z,101,tUG,aTG,gg)){xYG.wxVkey=1
}
xYG.wxXCkey=1
_(eVG,oXG)
return eVG
}
oRG.wxXCkey=2
_2z(z,95,lSG,lEG,oDG,gg,oRG,'item','index','index')
}
bIG.wxXCkey=1
_(aFG,eHG)
return aFG
}
oBG.wxXCkey=2
_2z(z,80,cCG,e,s,gg,oBG,'item','index','index')
}
eJE.wxXCkey=1
eJE.wxXCkey=3
bKE.wxXCkey=1
_(r,tIE)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var c2G=_mz(z,'swiper',['autoplay',0,'bindchange',1,'class',1,'current',2,'data-event-opts',3,'duration',4,'indicatorDots',5],[],e,s,gg)
var h3G=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2],[],e,s,gg)
var o4G=_v()
_(h3G,o4G)
if(_oz(z,10,e,s,gg)){o4G.wxVkey=1
}
var c5G=_v()
_(h3G,c5G)
if(_oz(z,11,e,s,gg)){c5G.wxVkey=1
}
o4G.wxXCkey=1
c5G.wxXCkey=1
_(c2G,h3G)
var o6G=_n('view')
_rz(z,o6G,'class',12,e,s,gg)
var l7G=_v()
_(o6G,l7G)
if(_oz(z,13,e,s,gg)){l7G.wxVkey=1
}
var a8G=_v()
_(o6G,a8G)
if(_oz(z,14,e,s,gg)){a8G.wxVkey=1
}
l7G.wxXCkey=1
a8G.wxXCkey=1
_(c2G,o6G)
_(r,c2G)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var bAH=_n('view')
_rz(z,bAH,'class',0,e,s,gg)
var xCH=_v()
_(bAH,xCH)
var oDH=function(cFH,fEH,hGH,gg){
var cIH=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2,'data-id',3],[],cFH,fEH,gg)
var oJH=_v()
_(cIH,oJH)
if(_oz(z,9,cFH,fEH,gg)){oJH.wxVkey=1
}
oJH.wxXCkey=1
_(hGH,cIH)
return hGH
}
xCH.wxXCkey=2
_2z(z,3,oDH,e,s,gg,xCH,'item','index','index')
var oBH=_v()
_(bAH,oBH)
if(_oz(z,10,e,s,gg)){oBH.wxVkey=1
}
oBH.wxXCkey=1
_(r,bAH)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var aLH=_n('view')
var eNH=_n('view')
_rz(z,eNH,'class',0,e,s,gg)
var bOH=_mz(z,'checkbox-group',['bindchange',1,'data-event-opts',1],[],e,s,gg)
var oPH=_v()
_(bOH,oPH)
var xQH=function(fSH,oRH,cTH,gg){
var oVH=_mz(z,'label',['bindtap',7,'class',1,'data-event-opts',2,'id',3],[],fSH,oRH,gg)
var cWH=_v()
_(oVH,cWH)
if(_oz(z,11,fSH,oRH,gg)){cWH.wxVkey=1
}
cWH.wxXCkey=1
_(cTH,oVH)
return cTH
}
oPH.wxXCkey=2
_2z(z,5,xQH,e,s,gg,oPH,'item','index','index')
_(eNH,bOH)
var oXH=_mz(z,'checkbox-group',['bindchange',12,'data-event-opts',1],[],e,s,gg)
var lYH=_v()
_(oXH,lYH)
var aZH=function(e2H,t1H,b3H,gg){
var x5H=_mz(z,'label',['bindtap',18,'class',1,'data-event-opts',2,'id',3],[],e2H,t1H,gg)
var o6H=_v()
_(x5H,o6H)
if(_oz(z,22,e2H,t1H,gg)){o6H.wxVkey=1
}
o6H.wxXCkey=1
_(b3H,x5H)
return b3H
}
lYH.wxXCkey=2
_2z(z,16,aZH,e,s,gg,lYH,'item','index','index')
_(eNH,oXH)
_(aLH,eNH)
var tMH=_v()
_(aLH,tMH)
if(_oz(z,23,e,s,gg)){tMH.wxVkey=1
}
tMH.wxXCkey=1
_(r,aLH)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var c8H=_n('view')
_rz(z,c8H,'class',0,e,s,gg)
var h9H=_v()
_(c8H,h9H)
if(_oz(z,1,e,s,gg)){h9H.wxVkey=1
}
var o0H=_v()
_(c8H,o0H)
if(_oz(z,2,e,s,gg)){o0H.wxVkey=1
var cAI=_n('view')
_rz(z,cAI,'class',3,e,s,gg)
var oBI=_v()
_(cAI,oBI)
if(_oz(z,4,e,s,gg)){oBI.wxVkey=1
}
var lCI=_v()
_(cAI,lCI)
if(_oz(z,5,e,s,gg)){lCI.wxVkey=1
}
oBI.wxXCkey=1
lCI.wxXCkey=1
_(o0H,cAI)
}
h9H.wxXCkey=1
o0H.wxXCkey=1
_(r,c8H)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var tEI=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var eFI=_v()
_(tEI,eFI)
if(_oz(z,3,e,s,gg)){eFI.wxVkey=1
}
eFI.wxXCkey=1
_(r,tEI)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var oHI=_n('view')
_rz(z,oHI,'class',0,e,s,gg)
var oJI=_mz(z,'scroll-view',['id',1,'scrollTop',1,'scrollWithAnimation',2,'scrollY',3,'style',4],[],e,s,gg)
var fKI=_v()
_(oJI,fKI)
if(_oz(z,6,e,s,gg)){fKI.wxVkey=1
}
var cLI=_n('view')
_rz(z,cLI,'class',7,e,s,gg)
var hMI=_v()
_(cLI,hMI)
if(_oz(z,8,e,s,gg)){hMI.wxVkey=1
}
var oNI=_v()
_(cLI,oNI)
var cOI=function(lQI,oPI,aRI,gg){
var eTI=_v()
_(aRI,eTI)
if(_oz(z,13,lQI,oPI,gg)){eTI.wxVkey=1
var bUI=_mz(z,'comm-item',['bind:__l',14,'bind:checkOtherContent',1,'data-event-opts',2,'options',3,'vueId',4],[],lQI,oPI,gg)
_(eTI,bUI)
}
eTI.wxXCkey=1
eTI.wxXCkey=3
return aRI
}
oNI.wxXCkey=4
_2z(z,11,cOI,e,s,gg,oNI,'newsitem','index1','index1')
hMI.wxXCkey=1
_(oJI,cLI)
fKI.wxXCkey=1
_(oHI,oJI)
var xII=_v()
_(oHI,xII)
if(_oz(z,19,e,s,gg)){xII.wxVkey=1
var oVI=_mz(z,'chatinput',['bind:__l',20,'bind:addMyLikeEvent',1,'bind:inputBlurEvent',2,'bind:inputFocusEvent',3,'bind:sendComent',4,'bind:toDownLoadEvent',5,'bind:toLoginEvent',6,'bind:toShareEvent',7,'class',8,'data-event-opts',9,'data-ref',10,'imageStatus',11,'vueId',12],[],e,s,gg)
_(xII,oVI)
}
var xWI=_mz(z,'uni-popup',['bind:__l',33,'position',1,'show',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(oHI,xWI)
var oXI=_mz(z,'uni-popup',['bind:__l',38,'position',1,'show',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var fYI=_mz(z,'view',['class',43,'style',1],[],e,s,gg)
var h1I=_mz(z,'scroll-view',['scrollY',-1,'class',45,'style',1],[],e,s,gg)
var c3I=_v()
_(h1I,c3I)
var o4I=function(a6I,l5I,t7I,gg){
var b9I=_v()
_(t7I,b9I)
if(_oz(z,51,a6I,l5I,gg)){b9I.wxVkey=1
var o0I=_mz(z,'comm-item',['bind:__l',52,'options',1,'vueId',2],[],a6I,l5I,gg)
_(b9I,o0I)
}
b9I.wxXCkey=1
b9I.wxXCkey=3
return t7I
}
c3I.wxXCkey=4
_2z(z,49,o4I,e,s,gg,c3I,'newsitem','index1','index1')
var o2I=_v()
_(h1I,o2I)
if(_oz(z,55,e,s,gg)){o2I.wxVkey=1
}
o2I.wxXCkey=1
_(fYI,h1I)
var cZI=_v()
_(fYI,cZI)
if(_oz(z,56,e,s,gg)){cZI.wxVkey=1
var xAJ=_mz(z,'chatinput',['bind:__l',57,'bind:addMyLikeEvent',1,'bind:inputBlurEvent',2,'bind:inputFocusEvent',3,'bind:sendComent',4,'bind:toDownLoadEvent',5,'bind:toLoginEvent',6,'bind:toShareEvent',7,'class',8,'data-event-opts',9,'data-ref',10,'imageStatus',11,'vueId',12],[],e,s,gg)
_(cZI,xAJ)
}
cZI.wxXCkey=1
cZI.wxXCkey=3
_(oXI,fYI)
_(oHI,oXI)
var oBJ=_mz(z,'uni-popup',['bind:__l',70,'position',1,'show',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(oHI,oBJ)
var fCJ=_mz(z,'uni-popup',['bind:__l',75,'position',1,'show',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(oHI,fCJ)
var cDJ=_mz(z,'uni-popup',['bind:__l',80,'bind:hidePopup',1,'data-event-opts',2,'position',3,'shareStatus',4,'show',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var hEJ=_n('view')
_rz(z,hEJ,'class',88,e,s,gg)
var oFJ=_v()
_(hEJ,oFJ)
if(_oz(z,89,e,s,gg)){oFJ.wxVkey=1
}
var cGJ=_mz(z,'share-page',['bind:__l',90,'bind:failShareEvent',1,'bind:successShareEvent',2,'bind:togglePopupEvent',3,'class',4,'data-event-opts',5,'vueId',6],[],e,s,gg)
_(hEJ,cGJ)
oFJ.wxXCkey=1
_(cDJ,hEJ)
_(oHI,cDJ)
xII.wxXCkey=1
xII.wxXCkey=3
_(r,oHI)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var aJJ=_mz(z,'view',['class',0,'hidden',1],[],e,s,gg)
var eLJ=_n('slot')
_(aJJ,eLJ)
var tKJ=_v()
_(aJJ,tKJ)
if(_oz(z,2,e,s,gg)){tKJ.wxVkey=1
}
tKJ.wxXCkey=1
_(r,aJJ)
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var oNJ=_n('view')
_rz(z,oNJ,'class',0,e,s,gg)
var xOJ=_v()
_(oNJ,xOJ)
if(_oz(z,1,e,s,gg)){xOJ.wxVkey=1
}
var oPJ=_v()
_(oNJ,oPJ)
if(_oz(z,2,e,s,gg)){oPJ.wxVkey=1
}
xOJ.wxXCkey=1
oPJ.wxXCkey=1
_(r,oNJ)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var cRJ=_n('view')
var hSJ=_v()
_(cRJ,hSJ)
if(_oz(z,0,e,s,gg)){hSJ.wxVkey=1
var oVJ=_v()
_(hSJ,oVJ)
var lWJ=function(tYJ,aXJ,eZJ,gg){
var o2J=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2,'id',3],[],tYJ,aXJ,gg)
var x3J=_v()
_(o2J,x3J)
if(_oz(z,9,tYJ,aXJ,gg)){x3J.wxVkey=1
}
x3J.wxXCkey=1
_(eZJ,o2J)
return eZJ
}
oVJ.wxXCkey=2
_2z(z,3,lWJ,e,s,gg,oVJ,'item','index','index')
}
var oTJ=_v()
_(cRJ,oTJ)
if(_oz(z,10,e,s,gg)){oTJ.wxVkey=1
}
var cUJ=_v()
_(cRJ,cUJ)
if(_oz(z,11,e,s,gg)){cUJ.wxVkey=1
}
hSJ.wxXCkey=1
oTJ.wxXCkey=1
cUJ.wxXCkey=1
_(r,cRJ)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var h7J=_n('view')
_rz(z,h7J,'class',0,e,s,gg)
var o8J=_v()
_(h7J,o8J)
if(_oz(z,1,e,s,gg)){o8J.wxVkey=1
}
var c9J=_v()
_(h7J,c9J)
if(_oz(z,2,e,s,gg)){c9J.wxVkey=1
}
var o0J=_v()
_(h7J,o0J)
if(_oz(z,3,e,s,gg)){o0J.wxVkey=1
}
o8J.wxXCkey=1
c9J.wxXCkey=1
o0J.wxXCkey=1
_(r,h7J)
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var aBK=_n('view')
_rz(z,aBK,'class',0,e,s,gg)
var tCK=_v()
_(aBK,tCK)
if(_oz(z,1,e,s,gg)){tCK.wxVkey=1
var bEK=_mz(z,'topics',['baseline',2,'bind:__l',1,'class',2,'data-ref',3,'newsitemData',4,'vueId',5],[],e,s,gg)
_(tCK,bEK)
}
var eDK=_v()
_(aBK,eDK)
if(_oz(z,8,e,s,gg)){eDK.wxVkey=1
var oFK=_mz(z,'film-ranking',['baseline',9,'bind:__l',1,'class',2,'data-ref',3,'newsitemData',4,'tabBars',5,'vueId',6],[],e,s,gg)
_(eDK,oFK)
}
tCK.wxXCkey=1
tCK.wxXCkey=3
eDK.wxXCkey=1
eDK.wxXCkey=3
_(r,aBK)
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var oHK=_n('view')
var cJK=_mz(z,'uni-nav-bar',['barFalg',0,'barIndex',1,'bind:__l',1,'fixed',2,'shadow',3,'title',4,'vueId',5],[],e,s,gg)
_(oHK,cJK)
var hKK=_mz(z,'wuc-tab',['tabStyle',-1,'bind:__l',7,'bind:updateTabCur',1,'data-event-opts',2,'selectClass',3,'tabClass',4,'tabList',5,'tabCur',6,'vueId',7],[],e,s,gg)
_(oHK,hKK)
var oLK=_mz(z,'home-module',['actor',15,'autoplay',1,'bind:__l',2,'bind:star',3,'data-event-opts',4,'flag',5,'hot',6,'indexTab',7,'info',8,'isOne',9,'module',10,'more',11,'star',12,'vueId',13],[],e,s,gg)
_(oHK,oLK)
var fIK=_v()
_(oHK,fIK)
if(_oz(z,29,e,s,gg)){fIK.wxVkey=1
}
fIK.wxXCkey=1
_(r,oHK)
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var oNK=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var lOK=_v()
_(oNK,lOK)
if(_oz(z,3,e,s,gg)){lOK.wxVkey=1
}
var aPK=_v()
_(oNK,aPK)
if(_oz(z,4,e,s,gg)){aPK.wxVkey=1
}
lOK.wxXCkey=1
aPK.wxXCkey=1
_(r,oNK)
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
var bSK=_v()
_(r,bSK)
if(_oz(z,0,e,s,gg)){bSK.wxVkey=1
var oTK=_v()
_(bSK,oTK)
var xUK=function(fWK,oVK,cXK,gg){
var oZK=_mz(z,'task-item',['bind:__l',5,'bind:changeData',1,'data-event-opts',2,'fromPage',3,'options',4,'vueId',5],[],fWK,oVK,gg)
_(cXK,oZK)
return cXK
}
oTK.wxXCkey=4
_2z(z,3,xUK,e,s,gg,oTK,'newsitem','index2','index2')
}
bSK.wxXCkey=1
bSK.wxXCkey=3
return r
}
e_[x[46]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
var o2K=_n('view')
_rz(z,o2K,'class',0,e,s,gg)
var l3K=_v()
_(o2K,l3K)
if(_oz(z,1,e,s,gg)){l3K.wxVkey=1
}
var a4K=_v()
_(o2K,a4K)
if(_oz(z,2,e,s,gg)){a4K.wxVkey=1
}
l3K.wxXCkey=1
a4K.wxXCkey=1
_(r,o2K)
return r
}
e_[x[47]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
var e6K=_n('view')
_rz(z,e6K,'class',0,e,s,gg)
var b7K=_v()
_(e6K,b7K)
if(_oz(z,1,e,s,gg)){b7K.wxVkey=1
}
var o8K=_v()
_(e6K,o8K)
var x9K=function(fAL,o0K,cBL,gg){
var oDL=_v()
_(cBL,oDL)
if(_oz(z,6,fAL,o0K,gg)){oDL.wxVkey=1
var cEL=_mz(z,'task-item',['bind:__l',7,'bind:exchange',1,'data-event-opts',2,'fromPage',3,'options',4,'vueId',5],[],fAL,o0K,gg)
_(oDL,cEL)
}
oDL.wxXCkey=1
oDL.wxXCkey=3
return cBL
}
o8K.wxXCkey=4
_2z(z,4,x9K,e,s,gg,o8K,'newsitem','index2','index2')
b7K.wxXCkey=1
_(r,e6K)
return r
}
e_[x[48]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
var lGL=_n('view')
_rz(z,lGL,'class',0,e,s,gg)
var aHL=_v()
_(lGL,aHL)
if(_oz(z,1,e,s,gg)){aHL.wxVkey=1
}
var tIL=_v()
_(lGL,tIL)
var eJL=function(oLL,bKL,xML,gg){
var fOL=_v()
_(xML,fOL)
if(_oz(z,6,oLL,bKL,gg)){fOL.wxVkey=1
}
fOL.wxXCkey=1
return xML
}
tIL.wxXCkey=2
_2z(z,4,eJL,e,s,gg,tIL,'newsitem','index2','index2')
aHL.wxXCkey=1
_(r,lGL)
return r
}
e_[x[49]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
var hQL=_n('view')
_rz(z,hQL,'class',0,e,s,gg)
var oRL=_v()
_(hQL,oRL)
if(_oz(z,1,e,s,gg)){oRL.wxVkey=1
}
var cSL=_n('view')
_rz(z,cSL,'class',2,e,s,gg)
var oTL=_v()
_(cSL,oTL)
if(_oz(z,3,e,s,gg)){oTL.wxVkey=1
}
var lUL=_v()
_(cSL,lUL)
if(_oz(z,4,e,s,gg)){lUL.wxVkey=1
}
oTL.wxXCkey=1
lUL.wxXCkey=1
_(hQL,cSL)
oRL.wxXCkey=1
_(r,hQL)
return r
}
e_[x[50]]={f:m50,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/tarbar/home/home","pages/tarbar/discover/discover","pages/discover/topics/topics_details","pages/tarbar/share/share","pages/tarbar/task/task","pages/task/my_invitation","pages/task/my_exchange","pages/tarbar/mine/mine","pages/more/more","pages/playPage/playPage","pages/classify/classify","pages/login/login","pages/forgetPwd/forgetPwd","pages/register/register","pages/download/download","pages/collection/collection","pages/task/my_coin","pages/search/search","pages/playHistory/playHistory","pages/changePwd/changePwd","pages/setting/setting","pages/allClass/allClass","pages/feedback/feedback","pages/helpCenter/helpCenter","pages/editProfile/editProfile","pages/inviteCode/inviteCode","pages/systemMsg/systemMsg","pages/security/security","pages/changePhone/changePhone","pages/changeName/changeName","pages/autograph/autograph","pages/discover/topics/topics_details_comment","pages/download/video/video","pages/download/videoPlay/videoPlay","pages/luckDraw/luckDraw"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"rgba(45,45,45,1)","selectedColor":"rgba(36,138,223,1)","borderStyle":"black","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/tarbar/home/home","iconPath":"static/shouye.png","selectedIconPath":"static/shouye_pre.png","text":"首页"},{"pagePath":"pages/tarbar/discover/discover","iconPath":"static/faxian.png","selectedIconPath":"static/faxian_pre.png","text":"发现"},{"pagePath":"pages/tarbar/share/share","iconPath":"static/fenxiang.png","selectedIconPath":"static/fenxiang_pre.png","text":"分享"},{"pagePath":"pages/tarbar/task/task","iconPath":"static/renwu.png","selectedIconPath":"static/renwu_pre.png","text":"任务"},{"pagePath":"pages/tarbar/mine/mine","iconPath":"static/wode.png","selectedIconPath":"static/wode_pre.png","text":"我的"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"98影院","compilerVersion":"2.3.7","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/uni-icon/uni-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icon/uni-icon.wxml']=$gwx('./components/uni-icon/uni-icon.wxml');

__wxAppCode__['components/uni-nav-bar-diy/uni-nav-bar-diy.json']={"usingComponents":{"uni-status-bar":"/components/uni-status-bar/uni-status-bar","uni-icon":"/components/uni-icon/uni-icon"},"component":true};
__wxAppCode__['components/uni-nav-bar-diy/uni-nav-bar-diy.wxml']=$gwx('./components/uni-nav-bar-diy/uni-nav-bar-diy.wxml');

__wxAppCode__['components/uni-status-bar/uni-status-bar.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-status-bar/uni-status-bar.wxml']=$gwx('./components/uni-status-bar/uni-status-bar.wxml');

__wxAppCode__['components/uni-swiper-dot/uni-swiper-dot.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-swiper-dot/uni-swiper-dot.wxml']=$gwx('./components/uni-swiper-dot/uni-swiper-dot.wxml');

__wxAppCode__['components/wuc-tab/wuc-tab.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/wuc-tab/wuc-tab.wxml']=$gwx('./components/wuc-tab/wuc-tab.wxml');

__wxAppCode__['pages/allClass/allClass.json']={"navigationBarTitleText":"电影","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"}},"usingComponents":{}};
__wxAppCode__['pages/allClass/allClass.wxml']=$gwx('./pages/allClass/allClass.wxml');

__wxAppCode__['pages/autograph/autograph.json']={"softinputNavBar":"none","navigationBarTitleText":"设置签名","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"},"buttons":[{"text":"保存","fontSize":"14px","color":"#248ADF","width":"60px"}]},"usingComponents":{}};
__wxAppCode__['pages/autograph/autograph.wxml']=$gwx('./pages/autograph/autograph.wxml');

__wxAppCode__['pages/changeName/changeName.json']={"softinputNavBar":"none","navigationBarTitleText":"设置昵称","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"},"buttons":[{"text":"保存","fontSize":"14px","color":"#248ADF","width":"60px"}]},"usingComponents":{}};
__wxAppCode__['pages/changeName/changeName.wxml']=$gwx('./pages/changeName/changeName.wxml');

__wxAppCode__['pages/changePhone/changePhone.json']={"softinputNavBar":"none","navigationBarTitleText":"修改手机号","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"}},"usingComponents":{}};
__wxAppCode__['pages/changePhone/changePhone.wxml']=$gwx('./pages/changePhone/changePhone.wxml');

__wxAppCode__['pages/changePwd/changePwd.json']={"softinputNavBar":"none","navigationBarTitleText":"修改密码","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"}},"usingComponents":{}};
__wxAppCode__['pages/changePwd/changePwd.wxml']=$gwx('./pages/changePwd/changePwd.wxml');

__wxAppCode__['pages/classify/classify.json']={"navigationBarTitleText":"频道","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"}},"usingComponents":{}};
__wxAppCode__['pages/classify/classify.wxml']=$gwx('./pages/classify/classify.wxml');

__wxAppCode__['pages/collection/collection.json']={"navigationBarTitleText":"收藏","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"},"buttons":[{"text":"编辑","fontSize":"14px","width":"60px"}]},"usingComponents":{}};
__wxAppCode__['pages/collection/collection.wxml']=$gwx('./pages/collection/collection.wxml');

__wxAppCode__['pages/discover/filmRanking/filmList.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/discover/filmRanking/filmList.wxml']=$gwx('./pages/discover/filmRanking/filmList.wxml');

__wxAppCode__['pages/discover/filmRanking/filmRanking.json']={"usingComponents":{"film-list":"/pages/discover/filmRanking/filmList"},"component":true};
__wxAppCode__['pages/discover/filmRanking/filmRanking.wxml']=$gwx('./pages/discover/filmRanking/filmRanking.wxml');

__wxAppCode__['pages/discover/topics/input_detail.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/discover/topics/input_detail.wxml']=$gwx('./pages/discover/topics/input_detail.wxml');

__wxAppCode__['pages/discover/topics/mediaList.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/discover/topics/mediaList.wxml']=$gwx('./pages/discover/topics/mediaList.wxml');

__wxAppCode__['pages/discover/topics/topics_details_comment.json']={"navigationBarTitleText":"查看全部评论","usingComponents":{"input_detail":"/pages/discover/topics/input_detail","comm-item":"/pages/playPage/commentItem"}};
__wxAppCode__['pages/discover/topics/topics_details_comment.wxml']=$gwx('./pages/discover/topics/topics_details_comment.wxml');

__wxAppCode__['pages/discover/topics/topics_details.json']={"navigationBarTitleText":"专题详情页","titleNView":{"buttons":[{"type":"share"}]},"usingComponents":{"input_detail":"/pages/discover/topics/input_detail","comm-item":"/pages/playPage/commentItem"}};
__wxAppCode__['pages/discover/topics/topics_details.wxml']=$gwx('./pages/discover/topics/topics_details.wxml');

__wxAppCode__['pages/discover/topics/topics.json']={"usingComponents":{"media-list":"/pages/discover/topics/mediaList"},"component":true};
__wxAppCode__['pages/discover/topics/topics.wxml']=$gwx('./pages/discover/topics/topics.wxml');

__wxAppCode__['pages/download/download.json']={"navigationBarTitleText":"缓存","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"},"buttons":[{"text":"编辑","fontSize":"14px","width":"60px"}]},"usingComponents":{}};
__wxAppCode__['pages/download/download.wxml']=$gwx('./pages/download/download.wxml');

__wxAppCode__['pages/download/video/video.json']={"navigationBarTitleText":"电视剧","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"},"buttons":[{"text":"编辑","fontSize":"14px","width":"60px"}]},"usingComponents":{}};
__wxAppCode__['pages/download/video/video.wxml']=$gwx('./pages/download/video/video.wxml');

__wxAppCode__['pages/download/videoPlay/videoPlay.json']={"navigationStyle":"custom","scrollIndicator":"none","usingComponents":{}};
__wxAppCode__['pages/download/videoPlay/videoPlay.wxml']=$gwx('./pages/download/videoPlay/videoPlay.wxml');

__wxAppCode__['pages/editProfile/editProfile.json']={"softinputNavBar":"none","navigationBarTitleText":"编辑资料","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"}},"usingComponents":{}};
__wxAppCode__['pages/editProfile/editProfile.wxml']=$gwx('./pages/editProfile/editProfile.wxml');

__wxAppCode__['pages/feedback/feedback.json']={"softinputNavBar":"none","navigationBarTitleText":"反馈","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"}},"usingComponents":{}};
__wxAppCode__['pages/feedback/feedback.wxml']=$gwx('./pages/feedback/feedback.wxml');

__wxAppCode__['pages/forgetPwd/forgetPwd.json']={"navigationBarTitleText":"忘记密码","softinputNavBar":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"}},"usingComponents":{}};
__wxAppCode__['pages/forgetPwd/forgetPwd.wxml']=$gwx('./pages/forgetPwd/forgetPwd.wxml');

__wxAppCode__['pages/helpCenter/helpCenter.json']={"navigationBarTitleText":"帮助中心","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"}},"usingComponents":{}};
__wxAppCode__['pages/helpCenter/helpCenter.wxml']=$gwx('./pages/helpCenter/helpCenter.wxml');

__wxAppCode__['pages/home/home/home-module.json']={"usingComponents":{"uni-swiper-dot":"/components/uni-swiper-dot/uni-swiper-dot"},"component":true};
__wxAppCode__['pages/home/home/home-module.wxml']=$gwx('./pages/home/home/home-module.wxml');

__wxAppCode__['pages/inviteCode/inviteCode.json']={"softinputNavBar":"none","navigationBarTitleText":"填写邀请码","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"},"buttons":[{"text":"完成","fontSize":"14px","color":"#248ADF","width":"60px"}]},"usingComponents":{}};
__wxAppCode__['pages/inviteCode/inviteCode.wxml']=$gwx('./pages/inviteCode/inviteCode.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录","softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/luckDraw/luckDraw.json']={"navigationBarTitleText":"每日福利","navigationBarBackgroundColor":"#2270DA","navigationBarTextStyle":"white","scrollIndicator":"none","nvueCompiler":"uni-app","subNVues":[{"id":"hasPrize","type":"popup","path":"pages/luckDraw/subNvue/prizeDialog","style":{"width":"100%","height":"100%","background":"rgba(0,0,0,0)"}},{"id":"showRule","type":"popup","path":"pages/luckDraw/subNvue/prizeRule","style":{"width":"100%","height":"100%","background":"rgba(0,0,0,0)"}}],"usingComponents":{}};
__wxAppCode__['pages/luckDraw/luckDraw.wxml']=$gwx('./pages/luckDraw/luckDraw.wxml');

__wxAppCode__['pages/more/more.json']={"navigationBarTitleText":"热播推荐","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"}},"usingComponents":{}};
__wxAppCode__['pages/more/more.wxml']=$gwx('./pages/more/more.wxml');

__wxAppCode__['pages/playHistory/playHistory.json']={"navigationBarTitleText":"播放历史","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"},"buttons":[{"text":"编辑","fontSize":"14px","width":"60px"}]},"usingComponents":{}};
__wxAppCode__['pages/playHistory/playHistory.wxml']=$gwx('./pages/playHistory/playHistory.wxml');

__wxAppCode__['pages/playPage/chatinput.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/playPage/chatinput.wxml']=$gwx('./pages/playPage/chatinput.wxml');

__wxAppCode__['pages/playPage/commentItem.json']={"usingComponents":{"uni-popup":"/pages/playPage/uni-popup"},"component":true};
__wxAppCode__['pages/playPage/commentItem.wxml']=$gwx('./pages/playPage/commentItem.wxml');

__wxAppCode__['pages/playPage/playPage.json']={"navigationStyle":"custom","scrollIndicator":"none","bounce":"none","softinputNavBar":"none","subNVues":[{"id":"goback","path":"pages/playPage/subnvue/goback","style":{"position":"absolute","top":"30px","left":"0","width":"50px","height":"50px","background":"transparent"}}],"usingComponents":{"comm-item":"/pages/playPage/commentItem","chatinput":"/pages/playPage/chatinput","uni-popup":"/pages/playPage/uni-popup","share-page":"/pages/playPage/share"}};
__wxAppCode__['pages/playPage/playPage.wxml']=$gwx('./pages/playPage/playPage.wxml');

__wxAppCode__['pages/playPage/share.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/playPage/share.wxml']=$gwx('./pages/playPage/share.wxml');

__wxAppCode__['pages/playPage/uni-popup.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/playPage/uni-popup.wxml']=$gwx('./pages/playPage/uni-popup.wxml');

__wxAppCode__['pages/register/register.json']={"navigationBarTitleText":"注册账号","softinputNavBar":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"}},"usingComponents":{}};
__wxAppCode__['pages/register/register.wxml']=$gwx('./pages/register/register.wxml');

__wxAppCode__['pages/search/search.json']={"softinputNavBar":"none","scrollIndicator":"none","titleNView":{"autoBackButton":"false","splitLine":{"color":"#C1C1C1","height":"1px"},"backgroundColor":"#FFFFFF","titleColor":"rgba(255,255,255,0)","searchInput":{"autoFocus":true,"backgroundColor":"#F8F9FB","borderRadius":"16px","align":"left","placeholder":"请输入搜索内容","placeholderColor":"#CCCCCC"},"buttons":[{"type":"none","float":"left","width":"15px"},{"text":"取消","fontSize":"14px","float":"right","color":"#505050","width":"60px"}]},"usingComponents":{}};
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/security/security.json']={"navigationBarTitleText":"账户与安全","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"}},"usingComponents":{}};
__wxAppCode__['pages/security/security.wxml']=$gwx('./pages/security/security.wxml');

__wxAppCode__['pages/setting/setting.json']={"navigationBarTitleText":"设置","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"}},"usingComponents":{}};
__wxAppCode__['pages/setting/setting.wxml']=$gwx('./pages/setting/setting.wxml');

__wxAppCode__['pages/systemMsg/systemMsg.json']={"navigationBarTitleText":"系统消息","scrollIndicator":"none","titleNView":{"splitLine":{"color":"#C1C1C1","height":"1px"}},"usingComponents":{}};
__wxAppCode__['pages/systemMsg/systemMsg.wxml']=$gwx('./pages/systemMsg/systemMsg.wxml');

__wxAppCode__['pages/tarbar/discover/discover.json']={"navigationStyle":"custom","usingComponents":{"topics":"/pages/discover/topics/topics","film-ranking":"/pages/discover/filmRanking/filmRanking"}};
__wxAppCode__['pages/tarbar/discover/discover.wxml']=$gwx('./pages/tarbar/discover/discover.wxml');

__wxAppCode__['pages/tarbar/home/home.json']={"navigationStyle":"custom","scrollIndicator":"none","usingComponents":{"wuc-tab":"/components/wuc-tab/wuc-tab","uni-nav-bar":"/components/uni-nav-bar-diy/uni-nav-bar-diy","home-module":"/pages/home/home/home-module"}};
__wxAppCode__['pages/tarbar/home/home.wxml']=$gwx('./pages/tarbar/home/home.wxml');

__wxAppCode__['pages/tarbar/mine/mine.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/tarbar/mine/mine.wxml']=$gwx('./pages/tarbar/mine/mine.wxml');

__wxAppCode__['pages/tarbar/share/share.json']={"navigationBarTitleText":"分享","navigationBarBackgroundColor":"#248ADF","navigationBarTextStyle":"white","scrollIndicator":"none","usingComponents":{}};
__wxAppCode__['pages/tarbar/share/share.wxml']=$gwx('./pages/tarbar/share/share.wxml');

__wxAppCode__['pages/tarbar/task/task.json']={"navigationBarTitleText":"任务","usingComponents":{"task-item":"/pages/task/taskItem"}};
__wxAppCode__['pages/tarbar/task/task.wxml']=$gwx('./pages/tarbar/task/task.wxml');

__wxAppCode__['pages/task/my_coin.json']={"navigationBarTitleText":"我的金币","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#248ADF","usingComponents":{}};
__wxAppCode__['pages/task/my_coin.wxml']=$gwx('./pages/task/my_coin.wxml');

__wxAppCode__['pages/task/my_exchange.json']={"navigationBarTitleText":"兑换中心","scrollIndicator":"none","nvueCompiler":"uni-app","subNVues":[{"id":"exchangeRule","type":"popup","path":"pages/task/subNvue/prizeRule","style":{"width":"100%","height":"100%","background":"rgba(0,0,0,0)"}}],"usingComponents":{"task-item":"/pages/task/taskItem"}};
__wxAppCode__['pages/task/my_exchange.wxml']=$gwx('./pages/task/my_exchange.wxml');

__wxAppCode__['pages/task/my_invitation.json']={"navigationBarTitleText":"我的邀请","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#248ADF","usingComponents":{}};
__wxAppCode__['pages/task/my_invitation.wxml']=$gwx('./pages/task/my_invitation.wxml');

__wxAppCode__['pages/task/taskItem.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/task/taskItem.wxml']=$gwx('./pages/task/taskItem.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"32b8":function(t,e,n){"use strict";(function(t){n("eee4"),n("921b");var e=r(n("66fd")),a=r(n("cf5e")),o=r(n("2a5f"));r(n("840b"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.prototype.$store=o.default,e.default.prototype.websiteUrl="http://192.168.5.254:8080/98video",e.default.config.productionTip=!1,a.default.mpType="app";var c=new e.default(i({},a.default));t(c).$mount()}).call(this,n("6e42")["createApp"])},"443e":function(t,e,n){"use strict";var a=n("a08a"),o=n.n(a);o.a},"4e35":function(t,e,n){"use strict";n.r(e);var a=n("833b"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},"833b":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={data:function(){return{}},onLaunch:function(){var e=this;console.log(t("App Launch"," at App.vue:10")),plus.screen.lockOrientation("portrait-primary"),a.getStorage({key:"userInfo",success:function(t){e.login(t.data)}}),a.getStorage({key:"network",success:function(t){e.allowDown(t.data)}}),a.getStorage({key:"push",success:function(t){e.allowPush(t.data)}}),a.getStorage({key:"userImage",success:function(t){e.storeImage(t.data)}}),a.getStorage({key:"device",success:function(t){e.storeDevice(t.data)}}),this.randomStr(),this.update()},onShow:function(){console.log(t("App Show"," at App.vue:49"))},onHide:function(){console.log(t("App Hide"," at App.vue:52"))},methods:r({},(0,o.mapMutations)(["login","allowDown","allowPush","storeImage","storeDevice"]),{update:function(){var e,n,o=this,r=plus.os.name.toUpperCase(),i=0,s=plus.runtime.appid,c=6048e5,u=0;a.getStorage({key:"version_update_time",success:function(t){u=t.data}}),plus.runtime.getProperty(s,function(s){e=plus.storage.getItem("app-id"),console.log(t(e," at App.vue:74")),e=e?e.replace(/\./g,""):s.versionCode,a.request({url:o.websiteUrl+"/sys/checkversion",method:"POST",data:{systemName:r,versionCode:e},success:function(e){var s=e.data;if(s.data)var l=s.data.versionName;var p=new Date;if(p=p.getTime(),null!=s.data){var f=o.CreateDownNotification();if(u+c>p)return;3!=plus.networkinfo.getCurrentType()?(""!=s.data.versionWgtPath&&a.showModal({title:"发现新版本",content:"有新的版本发布，检测到您当前为非Wifi连接，是否立即进行新版本下载？",showCancel:!0,cancelText:"下次再说",confirmText:"现在更新",success:function(e){if(!e.confirm){var o=new Date;return o=o.getTime(),void a.setStorage({key:"version_update_time",data:o,success:function(){console.log(t("保存成功"," at App.vue:173"))}})}switch(r){case"ANDROID":var c=a.downloadFile({url:s.data.versionWgtPath,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){plus.storage.setItem("app-id",l.toString()),plus.nativeUI.toast("更新成功"),plus.runtime.restart()},function(){plus.nativeUI.toast("更新失败")}):(f(i,!1),clearInterval(n),plus.nativeUI.toast("下载失败，请检查网络"))}});c.onProgressUpdate(function(t){i=t.progress}),f(i,!0),clearInterval(n),n=setInterval(function(){f(i,!0),100!=i||clearInterval(n)},500);break;case"IOS":a.downloadFile({url:s.data.versionWgtPath,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){plus.storage.setItem("app-id",l.toString()),plus.nativeUI.toast("更新成功"),plus.runtime.restart()},function(){plus.nativeUI.toast("更新失败")}):plus.nativeUI.toast("下载失败，请检查网络")}});break}},fail:function(){},complete:function(){}}),""!=s.data.path&&a.showModal({title:"发现新版本",content:"有新的版本发布，检测到您当前为非Wifi连接，是否立即进行新版本下载？",showCancel:!0,cancelText:"下次再说",confirmText:"现在更新",success:function(e){if(!e.confirm){var o=new Date;return o=o.getTime(),void a.setStorage({key:"version_update_time",data:o,success:function(){console.log(t("保存成功"," at App.vue:234"))}})}switch(r){case"ANDROID":var c=a.downloadFile({url:s.data.path,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){},function(){plus.nativeUI.toast("安装失败")}):(f(i,!1),clearInterval(n),plus.nativeUI.toast("下载失败，请检查网络"))}});c.onProgressUpdate(function(t){i=t.progress}),f(i,!0),clearInterval(n),n=setInterval(function(){f(i,!0),100!=i||clearInterval(n)},500);break;case"IOS":plus.runtime.openURL(s.data.path);break}},fail:function(){},complete:function(){}})):(""!=s.data.versionWgtPath&&a.showModal({title:"发现新版本",content:"有新的版本发布，是否立即进行新版本下载？",showCancel:!0,cancelText:"下次再说",confirmText:"现在更新",success:function(e){if(!e.confirm){var o=new Date;return o=o.getTime(),void a.setStorage({key:"version_update_time",data:o,success:function(){console.log(t("保存成功"," at App.vue:317"))}})}switch(r){case"ANDROID":var c=a.downloadFile({url:s.data.versionWgtPath,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){plus.storage.setItem("app-id",l.toString()),plus.nativeUI.toast("更新成功"),plus.runtime.restart()},function(){plus.nativeUI.toast("更新失败")}):(f(i,!1),clearInterval(n),plus.nativeUI.toast("下载失败，请检查网络"))}});c.onProgressUpdate(function(t){i=t.progress}),f(i,!0),clearInterval(n),n=setInterval(function(){f(i,!0),100!=i||clearInterval(n)},500);break;case"IOS":a.downloadFile({url:s.data.versionWgtPath,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){plus.storage.setItem("app-id",l.toString()),plus.nativeUI.toast("更新成功"),plus.runtime.restart()},function(){plus.nativeUI.toast("更新失败")}):plus.nativeUI.toast("下载失败，请检查网络")}});break}},fail:function(){},complete:function(){}}),""!=s.data.path&&a.showModal({title:"发现新版本",content:"有新的版本发布，是否立即进行新版本下载？",showCancel:!0,cancelText:"下次再说",confirmText:"现在更新",success:function(e){if(!e.confirm){var o=new Date;return o=o.getTime(),void a.setStorage({key:"version_update_time",data:o,success:function(){console.log(t("保存成功"," at App.vue:378"))}})}switch(r){case"ANDROID":var c=a.downloadFile({url:s.data.path,success:function(t){200===t.statusCode?plus.runtime.install(t.tempFilePath,{force:!0},function(){},function(){plus.nativeUI.toast("安装失败")}):(f(i,!1),clearInterval(n),plus.nativeUI.toast("下载失败，请检查网络"))}});c.onProgressUpdate(function(t){i=t.progress}),f(i,!0),clearInterval(n),n=setInterval(function(){f(i,!0),100!=i||clearInterval(n)},500);break;case"IOS":plus.runtime.openURL(s.data.path);break}},fail:function(){},complete:function(){}}))}},fail:function(){},complete:function(){}})})},randomStr:function(){if(""==this.$store.state.deviceId){var t="",e=!1,n=32,a=null,o=null,r=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(n=Math.round(Math.random()*(a-min))+min);for(var i=0;i<n;i++)o=Math.round(Math.random()*(r.length-1)),t+=r[o];this.$store.commit("storeDevice",t)}},CreateDownNotification:function(){var t=1,e=plus.android.runtimeMainActivity(),n=plus.android.importClass("android.app.Notification"),a=plus.android.importClass("android.app.NotificationManager"),o=plus.android.importClass("android.content.Context"),r=plus.android.importClass("android.os.Build"),i=plus.android.importClass("com.yangze.cinema.R"),s=plus.android.importClass("android.graphics.BitmapFactory"),c=e.getSystemService(o.NOTIFICATION_SERVICE),u=new n.Builder(e);if(u.setAutoCancel(!1),u.setOngoing(!0),u.setShowWhen(!1),u.setSmallIcon(i.mipmap.ic_launcher),u.setLargeIcon(s.decodeResource(e.getResources(),i.mipmap.ic_launcher)),r.VERSION.SDK_INT>=26){var l=plus.android.importClass("android.app.NotificationChannel"),p=new l("com.yangze.cinema","downtask",a.IMPORTANCE_DEFAULT);u.setChannelId("com.yangze.cinema"),c.createNotificationChannel(p)}function f(e,n){var a=e.toString();u.setContentTitle("下载中..."+a+"%"),u.setProgress(100,e,!1);var o=u.build();c.notify(t,o),100==e&&c.cancel(t),n||c.cancel(t)}return f}})};e.default=s}).call(this,n("0de9")["default"],n("6e42")["default"])},a08a:function(t,e,n){},cf5e:function(t,e,n){"use strict";n.r(e);var a=n("4e35");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("443e");var r,i,s=n("2877"),c=Object(s["a"])(a["default"],r,i,!1,null,null,null);e["default"]=c.exports}},[["32b8","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var a, o, s = t[0], p = t[1], u = t[2], c = 0, l = []; c < s.length; c++) {
      o = s[c], i[o] && l.push(i[o][0]), i[o] = 0;
    }

    for (a in p) {
      Object.prototype.hasOwnProperty.call(p, a) && (e[a] = p[a]);
    }

    m && m(t);

    while (l.length) {
      l.shift()();
    }

    return r.push.apply(r, u || []), n();
  }

  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], a = !0, o = 1; o < n.length; o++) {
        var s = n[o];
        0 !== i[s] && (a = !1);
      }

      a && (r.splice(t--, 1), e = p(p.s = n[0]));
    }

    return e;
  }

  var a = {},
      o = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      r = [];

  function s(e) {
    return p.p + "" + e + ".js";
  }

  function p(t) {
    if (a[t]) return a[t].exports;
    var n = a[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, p), n.l = !0, n.exports;
  }

  p.e = function (e) {
    var t = [],
        n = {
      "components/uni-nav-bar-diy/uni-nav-bar-diy": 1,
      "components/wuc-tab/wuc-tab": 1,
      "pages/home/home/home-module": 1,
      "pages/discover/filmRanking/filmRanking": 1,
      "pages/discover/topics/topics": 1,
      "pages/discover/topics/input_detail": 1,
      "pages/playPage/commentItem": 1,
      "pages/task/taskItem": 1,
      "pages/playPage/chatinput": 1,
      "pages/playPage/share": 1,
      "pages/playPage/uni-popup": 1,
      "components/uni-icon/uni-icon": 1,
      "components/uni-status-bar/uni-status-bar": 1,
      "components/uni-swiper-dot/uni-swiper-dot": 1,
      "pages/discover/filmRanking/filmList": 1,
      "pages/discover/topics/mediaList": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var a = ({
        "components/uni-nav-bar-diy/uni-nav-bar-diy": "components/uni-nav-bar-diy/uni-nav-bar-diy",
        "components/wuc-tab/wuc-tab": "components/wuc-tab/wuc-tab",
        "pages/home/home/home-module": "pages/home/home/home-module",
        "pages/discover/filmRanking/filmRanking": "pages/discover/filmRanking/filmRanking",
        "pages/discover/topics/topics": "pages/discover/topics/topics",
        "pages/discover/topics/input_detail": "pages/discover/topics/input_detail",
        "pages/playPage/commentItem": "pages/playPage/commentItem",
        "pages/task/taskItem": "pages/task/taskItem",
        "pages/playPage/chatinput": "pages/playPage/chatinput",
        "pages/playPage/share": "pages/playPage/share",
        "pages/playPage/uni-popup": "pages/playPage/uni-popup",
        "components/uni-icon/uni-icon": "components/uni-icon/uni-icon",
        "components/uni-status-bar/uni-status-bar": "components/uni-status-bar/uni-status-bar",
        "components/uni-swiper-dot/uni-swiper-dot": "components/uni-swiper-dot/uni-swiper-dot",
        "pages/discover/filmRanking/filmList": "pages/discover/filmRanking/filmList",
        "pages/discover/topics/mediaList": "pages/discover/topics/mediaList"
      }[e] || e) + ".wxss", i = p.p + a, r = document.getElementsByTagName("link"), s = 0; s < r.length; s++) {
        var u = r[s],
            c = u.getAttribute("data-href") || u.getAttribute("href");
        if ("stylesheet" === u.rel && (c === a || c === i)) return t();
      }

      var l = document.getElementsByTagName("style");

      for (s = 0; s < l.length; s++) {
        u = l[s], c = u.getAttribute("data-href");
        if (c === a || c === i) return t();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = t, m.onerror = function (t) {
        var a = t && t.target && t.target.src || i,
            r = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
        r.request = a, delete o[e], m.parentNode.removeChild(m), n(r);
      }, m.href = i;
      var g = document.getElementsByTagName("head")[0];
      g.appendChild(m);
    }).then(function () {
      o[e] = 0;
    }));
    var a = i[e];
    if (0 !== a) if (a) t.push(a[2]);else {
      var r = new Promise(function (t, n) {
        a = i[e] = [t, n];
      });
      t.push(a[2] = r);
      var u,
          c = document.createElement("script");
      c.charset = "utf-8", c.timeout = 120, p.nc && c.setAttribute("nonce", p.nc), c.src = s(e), u = function u(t) {
        c.onerror = c.onload = null, clearTimeout(l);
        var n = i[e];

        if (0 !== n) {
          if (n) {
            var a = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                r = new Error("Loading chunk " + e + " failed.\n(" + a + ": " + o + ")");
            r.type = a, r.request = o, n[1](r);
          }

          i[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        u({
          type: "timeout",
          target: c
        });
      }, 12e4);
      c.onerror = c.onload = u, document.head.appendChild(c);
    }
    return Promise.all(t);
  }, p.m = e, p.c = a, p.d = function (e, t, n) {
    p.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, p.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, p.t = function (e, t) {
    if (1 & t && (e = p(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (p.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) {
      p.d(n, a, function (t) {
        return e[t];
      }.bind(null, a));
    }
    return n;
  }, p.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return p.d(t, "a", t), t;
  }, p.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, p.p = "/", p.oe = function (e) {
    throw console.error(e), e;
  };
  var u = global["webpackJsonp"] = global["webpackJsonp"] || [],
      c = u.push.bind(u);
  u.push = t, u = u.slice();

  for (var l = 0; l < u.length; l++) {
    t(u[l]);
  }

  var m = c;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),o="";if(i.length>1){var a=i.pop();o=i.join("---COMMA---"),0===a.indexOf(" at ")?o+=a:o+="---COMMA---"+a}else o=i[0];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"1fb5":function(t,e,n){"use strict";e.byteLength=f,e.toByteArray=h,e.fromByteArray=v;for(var r=[],i=[],o="undefined"!==typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,c=a.length;s<c;++s)r[s]=a[s],i[a.charCodeAt(s)]=s;function u(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");-1===n&&(n=e);var r=n===e?0:4-n%4;return[n,r]}function f(t){var e=u(t),n=e[0],r=e[1];return 3*(n+r)/4-r}function l(t,e,n){return 3*(e+n)/4-n}function h(t){for(var e,n=u(t),r=n[0],a=n[1],s=new o(l(t,r,a)),c=0,f=a>0?r-4:r,h=0;h<f;h+=4)e=i[t.charCodeAt(h)]<<18|i[t.charCodeAt(h+1)]<<12|i[t.charCodeAt(h+2)]<<6|i[t.charCodeAt(h+3)],s[c++]=e>>16&255,s[c++]=e>>8&255,s[c++]=255&e;return 2===a&&(e=i[t.charCodeAt(h)]<<2|i[t.charCodeAt(h+1)]>>4,s[c++]=255&e),1===a&&(e=i[t.charCodeAt(h)]<<10|i[t.charCodeAt(h+1)]<<4|i[t.charCodeAt(h+2)]>>2,s[c++]=e>>8&255,s[c++]=255&e),s}function p(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}function d(t,e,n){for(var r,i=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),i.push(p(r));return i.join("")}function v(t){for(var e,n=t.length,i=n%3,o=[],a=16383,s=0,c=n-i;s<c;s+=a)o.push(d(t,s,s+a>c?c:s+a));return 1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),o.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"2a5f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("66fd")),i=o(n("2f62"));function o(t){return t&&t.__esModule?t:{default:t}}r.default.use(i.default);var a={TarCur:0,isLogin:!1,isDown:!1,isPush:!0,userInfo:{},userImage:{},deviceId:""},s={},c={changeTar:function(t,e){t.TarCur=e},login:function(e,n){e.isLogin=!0,e.userInfo.userPhone=n.userPhone,e.userInfo.userName=n.userName,e.userInfo.userCode=n.userCode,e.userInfo.userId=n.userId,e.userInfo.loginToken=n.loginToken,e.userInfo.userText=n.userText,t.setStorage({key:"userInfo",data:n})},logout:function(){a.isLogin=!1,a.userInfo={},t.removeStorage({key:"userInfo"})},storeImage:function(e,n){e.userImage.networkImage=n.networkImage,e.userImage.localImage=n.localImage,t.setStorage({key:"userImage",data:n})},allowDown:function(e,n){1===n.status?e.isDown=!0:e.isDown=!1,t.setStorage({key:"network",data:n})},allowPush:function(e,n){1===n.status?e.isPush=!0:e.isPush=!1,t.setStorage({key:"push",data:n})},storeDevice:function(e,n){e.deviceId=n,t.setStorage({key:"device",data:n})}},u={},f=new i.default.Store({state:a,getters:s,actions:u,mutations:c});e.default=f}).call(this,n("6e42")["default"])},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return E}),n.d(e,"mapState",function(){return C}),n.d(e,"mapMutations",function(){return $}),n.d(e,"mapGetters",function(){return T}),n.d(e,"mapActions",function(){return P}),n.d(e,"createNamespacedHelpers",function(){return D});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},i="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){i.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){a(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,f);var l=function(t){this.register([],t,!1)};function h(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;h(t.concat(r),e.getChild(r),n.modules[r])}}l.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},l.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},l.prototype.update=function(t){h([],this.root,t)},l.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new u(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&a(e.modules,function(e,i){r.register(t.concat(i),e,n)})},l.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var p;var d=function(t){var e=this;void 0===t&&(t={}),!p&&"undefined"!==typeof window&&window.Vue&&E(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.state;void 0===i&&(i={}),"function"===typeof i&&(i=i()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new l(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new p;var a=this,s=this,c=s.dispatch,u=s.commit;this.dispatch=function(t,e){return c.call(a,t,e)},this.commit=function(t,e,n){return u.call(a,t,e,n)},this.strict=r,m(this,i,[],this._modules.root),_(this,i),n.forEach(function(t){return t(e)}),p.config.devtools&&o(this)},v={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),_(t,n,e)}function _(t,e,n){var r=t._vm;t.getters={};var i=t._wrappedGetters,o={};a(i,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=p.config.silent;p.config.silent=!0,t._vm=new p({data:{$$state:e},computed:o}),p.config.silent=s,t.strict&&S(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),p.nextTick(function(){return r.$destroy()}))}function m(t,e,n,r,i){var o=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!o&&!i){var s=B(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){p.set(s,c,r.state)})}var u=r.context=w(t,a,n);r.forEachMutation(function(e,n){var r=a+n;x(t,r,e,u)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,i=e.handler||e;k(t,r,i,u)}),r.forEachGetter(function(e,n){var r=a+n;A(t,r,e,u)}),r.forEachChild(function(r,o){m(t,e,n.concat(o),r,i)})}function w(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=O(n,r,i),a=o.payload,s=o.options,c=o.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:r?t.commit:function(n,r,i){var o=O(n,r,i),a=o.payload,s=o.options,c=o.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return B(t.state,n)}}}),i}function b(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}}),n}function x(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(e){n.call(t,r.state,e)})}function k(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(e,i){var o=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,i);return c(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):o})}function A(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function S(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function B(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function O(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function E(t){p&&t===p||(p=t,r(p))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,i=O(t,e,n),o=i.type,a=i.payload,s=(i.options,{type:o,payload:a}),c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=O(t,e),i=r.type,o=r.payload,a={type:i,payload:o},s=this._actions[i];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(o)})):s[0](o)},d.prototype.subscribe=function(t){return g(t,this._subscribers)},d.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),_(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=B(e.state,t.slice(0,-1));p.delete(n,t[t.length-1])}),y(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var C=I(function(t,e){var n={};return R(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=j(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0}),n}),$=I(function(t,e){var n={};return R(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=j(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),T=I(function(t,e){var n={};return R(e).forEach(function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||j(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0}),n}),P=I(function(t,e){var n={};return R(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=j(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),D=function(t){return{mapState:C.bind(null,t),mapGetters:T.bind(null,t),mapMutations:$.bind(null,t),mapActions:P.bind(null,t)}};function R(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function I(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function j(t,e,n){var r=t._modulesNamespaceMap[n];return r}var N={Store:d,install:E,version:"3.0.1",mapState:C,mapMutations:$,mapGetters:T,mapActions:P,createNamespacedHelpers:D};e["default"]=N},3522:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/tarbar/home/home":{navigationStyle:"custom",scrollIndicator:"none"},"pages/tarbar/discover/discover":{navigationStyle:"custom"},"pages/discover/topics/topics_details":{navigationBarTitleText:"专题详情页",titleNView:{buttons:[{type:"share"}]}},"pages/tarbar/share/share":{navigationBarTitleText:"分享",navigationBarBackgroundColor:"#248ADF",navigationBarTextStyle:"white",scrollIndicator:"none"},"pages/tarbar/task/task":{navigationBarTitleText:"任务"},"pages/task/my_invitation":{navigationBarTitleText:"我的邀请",navigationBarTextStyle:"white",navigationBarBackgroundColor:"#248ADF"},"pages/task/my_exchange":{navigationBarTitleText:"兑换中心",scrollIndicator:"none",nvueCompiler:"uni-app",subNVues:[{id:"exchangeRule",type:"popup",path:"pages/task/subNvue/prizeRule",style:{width:"100%",height:"100%",background:"rgba(0,0,0,0)"}}]},"pages/tarbar/mine/mine":{navigationStyle:"custom"},"pages/more/more":{navigationBarTitleText:"热播推荐",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"}}},"pages/playPage/playPage":{navigationStyle:"custom",scrollIndicator:"none",bounce:"none",softinputNavBar:"none",subNVues:[{id:"goback",path:"pages/playPage/subnvue/goback",style:{position:"absolute",top:"30px",left:"0",width:"50px",height:"50px",background:"transparent"}}]},"pages/classify/classify":{navigationBarTitleText:"频道",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"}}},"pages/login/login":{navigationBarTitleText:"登录",softinputNavBar:"none"},"pages/forgetPwd/forgetPwd":{navigationBarTitleText:"忘记密码",softinputNavBar:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"}}},"pages/register/register":{navigationBarTitleText:"注册账号",softinputNavBar:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"}}},"pages/download/download":{navigationBarTitleText:"缓存",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"},buttons:[{text:"编辑",fontSize:"14px",width:"60px"}]}},"pages/collection/collection":{navigationBarTitleText:"收藏",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"},buttons:[{text:"编辑",fontSize:"14px",width:"60px"}]}},"pages/task/my_coin":{navigationBarTitleText:"我的金币",navigationBarTextStyle:"white",navigationBarBackgroundColor:"#248ADF"},"pages/search/search":{softinputNavBar:"none",scrollIndicator:"none",titleNView:{autoBackButton:"false",splitLine:{color:"#C1C1C1",height:"1px"},backgroundColor:"#FFFFFF",titleColor:"rgba(255,255,255,0)",searchInput:{autoFocus:!0,backgroundColor:"#F8F9FB",borderRadius:"16px",align:"left",placeholder:"请输入搜索内容",placeholderColor:"#CCCCCC"},buttons:[{type:"none",float:"left",width:"15px"},{text:"取消",fontSize:"14px",float:"right",color:"#505050",width:"60px"}]}},"pages/playHistory/playHistory":{navigationBarTitleText:"播放历史",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"},buttons:[{text:"编辑",fontSize:"14px",width:"60px"}]}},"pages/changePwd/changePwd":{softinputNavBar:"none",navigationBarTitleText:"修改密码",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"}}},"pages/setting/setting":{navigationBarTitleText:"设置",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"}}},"pages/allClass/allClass":{navigationBarTitleText:"电影",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"}}},"pages/feedback/feedback":{softinputNavBar:"none",navigationBarTitleText:"反馈",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"}}},"pages/helpCenter/helpCenter":{navigationBarTitleText:"帮助中心",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"}}},"pages/editProfile/editProfile":{softinputNavBar:"none",navigationBarTitleText:"编辑资料",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"}}},"pages/inviteCode/inviteCode":{softinputNavBar:"none",navigationBarTitleText:"填写邀请码",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"},buttons:[{text:"完成",fontSize:"14px",color:"#248ADF",width:"60px"}]}},"pages/systemMsg/systemMsg":{navigationBarTitleText:"系统消息",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"}}},"pages/security/security":{navigationBarTitleText:"账户与安全",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"}}},"pages/changePhone/changePhone":{softinputNavBar:"none",navigationBarTitleText:"修改手机号",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"}}},"pages/changeName/changeName":{softinputNavBar:"none",navigationBarTitleText:"设置昵称",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"},buttons:[{text:"保存",fontSize:"14px",color:"#248ADF",width:"60px"}]}},"pages/autograph/autograph":{softinputNavBar:"none",navigationBarTitleText:"设置签名",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"},buttons:[{text:"保存",fontSize:"14px",color:"#248ADF",width:"60px"}]}},"pages/discover/topics/topics_details_comment":{navigationBarTitleText:"查看全部评论"},"pages/download/video/video":{navigationBarTitleText:"电视剧",scrollIndicator:"none",titleNView:{splitLine:{color:"#C1C1C1",height:"1px"},buttons:[{text:"编辑",fontSize:"14px",width:"60px"}]}},"pages/download/videoPlay/videoPlay":{navigationStyle:"custom",scrollIndicator:"none"},"pages/luckDraw/luckDraw":{navigationBarTitleText:"每日福利",navigationBarBackgroundColor:"#2270DA",navigationBarTextStyle:"white",scrollIndicator:"none",nvueCompiler:"uni-app",subNVues:[{id:"hasPrize",type:"popup",path:"pages/luckDraw/subNvue/prizeDialog",style:{width:"100%",height:"100%",background:"rgba(0,0,0,0)"}},{id:"showRule",type:"popup",path:"pages/luckDraw/subNvue/prizeRule",style:{width:"100%",height:"100%",background:"rgba(0,0,0,0)"}}]}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};e.default=r},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function f(t){return"[object Object]"===u.call(t)}function l(t){return"[object RegExp]"===u.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function _(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function w(t,e){return m.call(t,e)}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var x=/-(\w)/g,k=b(function(t){return t.replace(x,function(t,e){return e?e.toUpperCase():""})}),A=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),S=/\B([A-Z])/g,B=b(function(t){return t.replace(S,"-$1").toLowerCase()});function O(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function E(t,e){return t.bind(e)}var C=Function.prototype.bind?E:O;function $(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function T(t,e){for(var n in e)t[n]=e[n];return t}function P(t){for(var e={},n=0;n<t.length;n++)t[n]&&T(e,t[n]);return e}function D(t,e,n){}var R=function(t,e,n){return!1},I=function(t){return t};function j(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every(function(t,n){return j(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return j(t[n],e[n])})}catch(u){return!1}}function N(t,e){for(var n=0;n<t.length;n++)if(j(t[n],e))return n;return-1}function M(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var L=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],H={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:R,isReservedAttr:R,isUnknownElement:R,getTagNamespace:D,parsePlatformTagName:I,mustUseProp:R,async:!0,_lifecycleHooks:U},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function V(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var q=new RegExp("[^"+F.source+".$_\\d]");function Y(t){if(!q.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var W,G="__proto__"in{},K="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,J=X&&WXEnvironment.platform.toLowerCase(),Z=K&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===J),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(K)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(ei){}var it=function(){return void 0===W&&(W=!K&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),W},ot=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ct="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=D,ft=0,lt=function(){this.id=ft++,this.subs=[]};function ht(t){lt.SharedObject.targetStack.push(t),lt.SharedObject.target=t}function pt(){lt.SharedObject.targetStack.pop(),lt.SharedObject.target=lt.SharedObject.targetStack[lt.SharedObject.targetStack.length-1]}lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){_(this.subs,t)},lt.prototype.depend=function(){lt.SharedObject.target&&lt.SharedObject.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},lt.SharedObject.target=null,lt.SharedObject.targetStack=[];var dt=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var gt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function _t(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,wt=Object.create(mt),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=mt[t];V(wt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o})});var xt=Object.getOwnPropertyNames(wt),kt=!0;function At(t){kt=t}var St=function(t){this.value=t,this.dep=new lt,this.vmCount=0,V(t,"__ob__",this),Array.isArray(t)?(G?t.push!==t.__proto__.push?Ot(t,wt,xt):Bt(t,wt):Ot(t,wt,xt),this.observeArray(t)):this.walk(t)};function Bt(t,e){t.__proto__=e}function Ot(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];V(t,o,e[o])}}function Et(t,e){var n;if(c(t)&&!(t instanceof dt))return w(t,"__ob__")&&t.__ob__ instanceof St?n=t.__ob__:kt&&!it()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new St(t)),e&&n&&n.vmCount++,n}function Ct(t,e,n,r,i){var o=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Et(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return lt.SharedObject.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Pt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!c||(c?c.call(t,e):n=e,u=!i&&Et(e),o.notify())}})}}function $t(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Ct(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Tt(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function Pt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Pt(e)}St.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Ct(t,e[n])},St.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Et(t[e])};var Dt=H.optionMergeStrategies;function Rt(t,e){if(!e)return t;for(var n,r,i,o=ct?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(r=t[n],i=e[n],w(t,n)?r!==i&&f(r)&&f(i)&&Rt(r,i):$t(t,n,i));return t}function It(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Rt(r,i):i}:e?t?function(){return Rt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function jt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Nt(n):n}function Nt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Mt(t,e,n,r){var i=Object.create(t||null);return e?T(i,e):i}Dt.data=function(t,e,n){return n?It(t,e,n):e&&"function"!==typeof e?t:It(t,e)},U.forEach(function(t){Dt[t]=jt}),L.forEach(function(t){Dt[t+"s"]=Mt}),Dt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in T(i,t),e){var a=i[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Dt.props=Dt.methods=Dt.inject=Dt.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return T(i,t),e&&T(i,e),i},Dt.provide=It;var Lt=function(t,e){return void 0===e?t:e};function Ut(t,e){var n=t.props;if(n){var r,i,o,a={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=k(i),a[o]={type:null})}else if(f(n))for(var s in n)i=n[s],o=k(s),a[o]=f(i)?i:{type:i};else 0;t.props=a}}function Ht(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(f(n))for(var o in n){var a=n[o];r[o]=f(a)?T({from:o},a):{from:a}}else 0}}function Ft(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function zt(t,e,n){if("function"===typeof e&&(e=e.options),Ut(e,n),Ht(e,n),Ft(e),!e._base&&(e.extends&&(t=zt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=zt(t,e.mixins[r],n);var o,a={};for(o in t)s(o);for(o in e)w(t,o)||s(o);function s(r){var i=Dt[r]||Lt;a[r]=i(t[r],e[r],n,r)}return a}function Vt(t,e,n,r){if("string"===typeof n){var i=t[e];if(w(i,n))return i[n];var o=k(n);if(w(i,o))return i[o];var a=A(o);if(w(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function qt(t,e,n,r){var i=e[t],o=!w(n,t),a=n[t],s=Kt(Boolean,i.type);if(s>-1)if(o&&!w(i,"default"))a=!1;else if(""===a||a===B(t)){var c=Kt(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=Yt(r,i,t);var u=kt;At(!0),Et(a),At(u)}return a}function Yt(t,e,n){if(w(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Wt(e.type)?r.call(t):r}}function Wt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Gt(t,e){return Wt(t)===Wt(e)}function Kt(t,e){if(!Array.isArray(e))return Gt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Gt(e[n],t))return n;return-1}function Xt(t,e,n){ht();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=!1===i[o].call(r,t,e,n);if(a)return}catch(ei){Zt(ei,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{pt()}}function Jt(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&p(o)&&!o._handled&&(o.catch(function(t){return Xt(t,r,i+" (Promise/async)")}),o._handled=!0)}catch(ei){Xt(ei,r,i)}return o}function Zt(t,e,n){if(H.errorHandler)try{return H.errorHandler.call(null,t,e,n)}catch(ei){ei!==t&&Qt(ei,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!K&&!X||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var ie=Promise.resolve();te=function(){ie.then(re),et&&setTimeout(D)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var oe=1,ae=new MutationObserver(re),se=document.createTextNode(String(oe));ae.observe(se,{characterData:!0}),te=function(){oe=(oe+1)%2,se.data=String(oe)}}function ce(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(ei){Xt(ei,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ue=new st;function fe(t){le(t,ue),ue.clear()}function le(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)le(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)le(t[r[n]],e)}}}var he=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function pe(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Jt(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Jt(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,i,a,s){var c,u,f,l;for(c in t)u=t[c],f=e[c],l=he(c),r(u)||(r(f)?(r(u.fns)&&(u=t[c]=pe(u,s)),o(l.once)&&(u=t[c]=a(l.name,u,l.capture)),n(l.name,u,l.capture,l.passive,l.params)):u!==f&&(f.fns=u,t[c]=f));for(c in e)r(t[c])&&(l=he(c),i(l.name,e[c],l.capture))}function ve(t,e,n){var o=e.options.props;if(!r(o)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in o){var f=B(u);ge(a,c,u,f,!0)||ge(a,s,u,f,!1)}return a}}function ge(t,e,n,r,o){if(i(e)){if(w(e,n))return t[n]=e[n],o||delete e[n],!0;if(w(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function _e(t){return s(t)?[yt(t)]:Array.isArray(t)?we(t):void 0}function me(t){return i(t)&&i(t.text)&&a(t.isComment)}function we(t,e){var n,a,c,u,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(c=f.length-1,u=f[c],Array.isArray(a)?a.length>0&&(a=we(a,(e||"")+"_"+n),me(a[0])&&me(u)&&(f[c]=yt(u.text+a[0].text),a.shift()),f.push.apply(f,a)):s(a)?me(u)?f[c]=yt(u.text+a):""!==a&&f.push(yt(a)):me(a)&&me(u)?f[c]=yt(u.text+a.text):(o(t._isVList)&&i(a.tag)&&r(a.key)&&i(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function xe(t){var e=ke(t.$options.inject,t);e&&(At(!1),Object.keys(e).forEach(function(n){Ct(t,n,e[n])}),At(!0))}function ke(t,e){if(t){for(var n=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&w(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var c=t[o].default;n[o]="function"===typeof c?c.call(e):c}else 0}}return n}}function Ae(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)o.asyncMeta&&o.asyncMeta.data&&"page"===o.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(o):(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Se)&&delete n[u];return n}function Se(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Be(t,e,r){var i,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=Oe(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=Ee(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),V(i,"$stable",a),V(i,"$key",s),V(i,"$hasNormal",o),i}function Oe(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:_e(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Ee(t,e){return function(){return t[e]}}function Ce(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),f=u.next();while(!f.done)n.push(e(f.value,n.length)),f=u.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)||(n=[]),n._isVList=!0,n}function $e(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=T(T({},r),n)),i=o(n)||e):i=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Te(t){return Vt(this.$options,"filters",t,!0)||I}function Pe(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function De(t,e,n,r,i){var o=H.keyCodes[e]||n;return i&&r&&!H.keyCodes[e]?Pe(i,r):o?Pe(o,t):r?B(r)!==e:void 0}function Re(t,e,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=P(n));var a=function(a){if("class"===a||"style"===a||y(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||H.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=k(a),u=B(a);if(!(c in o)&&!(u in o)&&(o[a]=n[a],i)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ie(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ne(r,"__static__"+t,!1),r)}function je(t,e,n){return Ne(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ne(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Me(t[r],e+"_"+r,n);else Me(t,e,n)}function Me(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Le(t,e){if(e)if(f(e)){var n=t.on=t.on?T({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Ue(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Ue(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function He(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Fe(t,e){return"string"===typeof t?e+t:t}function ze(t){t._o=je,t._n=v,t._s=d,t._l=Ce,t._t=$e,t._q=j,t._i=N,t._m=Ie,t._f=Te,t._k=De,t._b=Re,t._v=yt,t._e=gt,t._u=Ue,t._g=Le,t._d=He,t._p=Fe}function Ve(t,e,r,i,a){var s,c=this,u=a.options;w(i,"_uid")?(s=Object.create(i),s._original=i):(s=i,i=i._original);var f=o(u._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=ke(u.inject,i),this.slots=function(){return c.$slots||Be(t.scopedSlots,c.$slots=Ae(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Be(t.scopedSlots,this.slots())}}),f&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Be(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var o=rn(s,t,e,n,r,l);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,l)}}function qe(t,e,r,o,a){var s=t.options,c={},u=s.props;if(i(u))for(var f in u)c[f]=qt(f,u,e||n);else i(r.attrs)&&We(c,r.attrs),i(r.props)&&We(c,r.props);var l=new Ve(r,c,a,o,t),h=s.render.call(null,l._c,l);if(h instanceof dt)return Ye(h,r,l.parent,s,l);if(Array.isArray(h)){for(var p=_e(h)||[],d=new Array(p.length),v=0;v<p.length;v++)d[v]=Ye(p[v],r,l.parent,s,l);return d}}function Ye(t,e,n,r,i){var o=_t(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function We(t,e){for(var n in e)t[k(n)]=e[n]}ze(Ve.prototype);var Ge={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ge.prepatch(n,n)}else{var r=t.componentInstance=Je(t,kn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;On(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Tn(n,"mounted")),t.data.keepAlive&&(e._isMounted?zn(n):Cn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?$n(e,!0):e.$destroy())}},Ke=Object.keys(Ge);function Xe(t,e,n,a,s){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=dn(f,u),void 0===t))return pn(f,e,n,a,s);e=e||{},hr(t),i(e.model)&&tn(t.options,e);var l=ve(e,t,s);if(o(t.options.functional))return qe(t,l,e,n,a);var h=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}Ze(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:h,tag:s,children:a},f);return v}}}function Je(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Ke.length;n++){var r=Ke[n],i=e[r],o=Ge[r];i===o||i&&i._merged||(e[r]=i?Qe(o,i):o)}}function Qe(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],s=e.model.callback;i(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[r]=[s].concat(a)):o[r]=s}var en=1,nn=2;function rn(t,e,n,r,i,a){return(Array.isArray(n)||s(n))&&(i=r,r=n,n=void 0),o(a)&&(i=nn),on(t,e,n,r,i)}function on(t,e,n,r,o){if(i(n)&&i(n.__ob__))return gt();if(i(n)&&i(n.is)&&(e=n.is),!e)return gt();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===nn?r=_e(r):o===en&&(r=ye(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||H.getTagNamespace(e),a=H.isReservedTag(e)?new dt(H.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=Vt(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Xe(c,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:i(a)?(i(s)&&an(a,s),i(n)&&sn(n),a):gt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var a=0,s=t.children.length;a<s;a++){var c=t.children[a];i(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&an(c,e,n)}}function sn(t){c(t.style)&&fe(t.style),c(t.class)&&fe(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Ae(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return rn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return rn(t,e,n,r,i,!0)};var o=r&&r.data;Ct(t,"$attrs",o&&o.attrs||n,null,!0),Ct(t,"$listeners",e._parentListeners||n,null,!0)}var un,fn=null;function ln(t){ze(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Be(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{fn=e,t=r.call(e._renderProxy,e.$createElement)}catch(ei){Xt(ei,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=gt()),t.parent=i,t}}function hn(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function pn(t,e,n,r,i){var o=gt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function dn(t,e){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=fn;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var a=t.owners=[n],s=!0,u=null,f=null;n.$on("hook:destroyed",function(){return _(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==f&&(clearTimeout(f),f=null))},h=M(function(n){t.resolved=hn(n,e),s?a.length=0:l(!0)}),d=M(function(e){i(t.errorComp)&&(t.error=!0,l(!0))}),v=t(h,d);return c(v)&&(p(v)?r(t.resolved)&&v.then(h,d):p(v.component)&&(v.component.then(h,d),i(v.error)&&(t.errorComp=hn(v.error,e)),i(v.loading)&&(t.loadingComp=hn(v.loading,e),0===v.delay?t.loading=!0:u=setTimeout(function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),i(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function gn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function _n(t,e){un.$on(t,e)}function mn(t,e){un.$off(t,e)}function wn(t,e){var n=un;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function bn(t,e,n){un=t,de(e,n||{},_n,mn,wn,t),un=void 0}function xn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?$(n):n;for(var r=$(arguments,1),i='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Jt(n[o],e,r,e,i)}return e}}var kn=null;function An(t){var e=kn;return kn=t,function(){kn=e}}function Sn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Bn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=An(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Tn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Tn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function On(t,e,r,i,o){var a=i.data.scopedSlots,s=t.$scopedSlots,c=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),u=!!(o||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){At(!1);for(var f=t._props,l=t.$options._propKeys||[],h=0;h<l.length;h++){var p=l[h],d=t.$options.props;f[p]=qt(p,d,e,t)}At(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,bn(t,r,v),u&&(t.$slots=Ae(o,i.context),t.$forceUpdate())}function En(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Cn(t,e){if(e){if(t._directInactive=!1,En(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Cn(t.$children[n]);Tn(t,"activated")}}function $n(t,e){if((!e||(t._directInactive=!0,!En(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)$n(t.$children[n]);Tn(t,"deactivated")}}function Tn(t,e){ht();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Jt(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),pt()}var Pn=[],Dn=[],Rn={},In=!1,jn=!1,Nn=0;function Mn(){Nn=Pn.length=Dn.length=0,Rn={},In=jn=!1}var Ln=Date.now;if(K&&!Q){var Un=window.performance;Un&&"function"===typeof Un.now&&Ln()>document.createEvent("Event").timeStamp&&(Ln=function(){return Un.now()})}function Hn(){var t,e;for(Ln(),jn=!0,Pn.sort(function(t,e){return t.id-e.id}),Nn=0;Nn<Pn.length;Nn++)t=Pn[Nn],t.before&&t.before(),e=t.id,Rn[e]=null,t.run();var n=Dn.slice(),r=Pn.slice();Mn(),Vn(n),Fn(r),ot&&H.devtools&&ot.emit("flush")}function Fn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Tn(r,"updated")}}function zn(t){t._inactive=!1,Dn.push(t)}function Vn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Cn(t[e],!0)}function qn(t){var e=t.id;if(null==Rn[e]){if(Rn[e]=!0,jn){var n=Pn.length-1;while(n>Nn&&Pn[n].id>t.id)n--;Pn.splice(n+1,0,t)}else Pn.push(t);In||(In=!0,ce(Hn))}}var Yn=0,Wn=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Yn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=Y(e),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()};Wn.prototype.get=function(){var t;ht(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(ei){if(!this.user)throw ei;Xt(ei,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),pt(),this.cleanupDeps()}return t},Wn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Wn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Wn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():qn(this)},Wn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(ei){Xt(ei,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Wn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Wn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Wn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Gn={enumerable:!0,configurable:!0,get:D,set:D};function Kn(t,e,n){Gn.get=function(){return this[e][n]},Gn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Gn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Jn(t,e.props),e.methods&&or(t,e.methods),e.data?Zn(t):Et(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Jn(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||At(!1);var a=function(o){i.push(o);var a=qt(o,e,n,t);Ct(r,o,a),o in t||Kn(t,"_props",o)};for(var s in e)a(s);At(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Qn(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&w(r,o)||z(o)||Kn(t,"_data",o)}Et(e,!0)}function Qn(t,e){ht();try{return t.call(e,e)}catch(ei){return Xt(ei,e,"data()"),{}}finally{pt()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var i in e){var o=e[i],a="function"===typeof o?o:o.get;0,r||(n[i]=new Wn(t,a||D,D,tr)),i in t||nr(t,i,o)}}function nr(t,e,n){var r=!it();"function"===typeof n?(Gn.get=r?rr(e):ir(n),Gn.set=D):(Gn.get=n.get?r&&!1!==n.cache?rr(e):ir(n.get):D,Gn.set=n.set||D),Object.defineProperty(t,e,Gn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.SharedObject.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function or(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?D:C(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)sr(t,n,r[i]);else sr(t,n,r)}}function sr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=$t,t.prototype.$delete=Tt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return sr(r,t,e,n);n=n||{},n.user=!0;var i=new Wn(r,t,e,n);if(n.immediate)try{e.call(r,i.value)}catch(o){Xt(o,r,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}}}var ur=0;function fr(t){t.prototype._init=function(t){var e=this;e._uid=ur++,e._isVue=!0,t&&t._isComponent?lr(e,t):e.$options=zt(hr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Sn(e),yn(e),cn(e),Tn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&xe(e),Xn(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&Tn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function lr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function hr(t){var e=t.options;if(t.super){var n=hr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=pr(t);i&&T(t.extendOptions,i),e=t.options=zt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function pr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function dr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=$(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function gr(t){t.mixin=function(t){return this.options=zt(this.options,t),this}}function yr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=zt(n.options,t),a["super"]=n,a.options.props&&_r(a),a.options.computed&&mr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,L.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=T({},a.options),i[r]=a,a}}function _r(t){var e=t.options.props;for(var n in e)Kn(t.prototype,"_props",n)}function mr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function wr(t){L.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function br(t){return t&&(t.Ctor.options.name||t.tag)}function xr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function kr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var s=br(a.componentOptions);s&&!e(s)&&Ar(n,o,r,i)}}}function Ar(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,_(n,e)}fr(dr),cr(dr),xn(dr),Bn(dr),ln(dr);var Sr=[String,RegExp,Array],Br={name:"keep-alive",abstract:!0,props:{include:Sr,exclude:Sr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ar(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){kr(t,function(t){return xr(e,t)})}),this.$watch("exclude",function(e){kr(t,function(t){return!xr(e,t)})})},render:function(){var t=this.$slots.default,e=gn(t),n=e&&e.componentOptions;if(n){var r=br(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!xr(o,r))||a&&r&&xr(a,r))return e;var s=this,c=s.cache,u=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[f]?(e.componentInstance=c[f].componentInstance,_(u,f),u.push(f)):(c[f]=e,u.push(f),this.max&&u.length>parseInt(this.max)&&Ar(c,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Or={KeepAlive:Br};function Er(t){var e={get:function(){return H}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:T,mergeOptions:zt,defineReactive:Ct},t.set=$t,t.delete=Tt,t.nextTick=ce,t.observable=function(t){return Et(t),t},t.options=Object.create(null),L.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,T(t.options.components,Or),vr(t),gr(t),yr(t),wr(t)}Er(dr),Object.defineProperty(dr.prototype,"$isServer",{get:it}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:Ve}),dr.version="2.6.10";var Cr="[object Array]",$r="[object Object]";function Tr(t,e){var n={};return Pr(t,e),Dr(t,e,"",n),n}function Pr(t,e){if(t!==e){var n=Ir(t),r=Ir(e);if(n==$r&&r==$r){if(Object.keys(t).length>=Object.keys(e).length)for(var i in e){var o=t[i];void 0===o?t[i]=null:Pr(o,e[i])}}else n==Cr&&r==Cr&&t.length>=e.length&&e.forEach(function(e,n){Pr(t[n],e)})}}function Dr(t,e,n,r){if(t!==e){var i=Ir(t),o=Ir(e);if(i==$r)if(o!=$r||Object.keys(t).length<Object.keys(e).length)Rr(r,n,t);else{var a=function(i){var o=t[i],a=e[i],s=Ir(o),c=Ir(a);if(s!=Cr&&s!=$r)o!=e[i]&&Rr(r,(""==n?"":n+".")+i,o);else if(s==Cr)c!=Cr?Rr(r,(""==n?"":n+".")+i,o):o.length<a.length?Rr(r,(""==n?"":n+".")+i,o):o.forEach(function(t,e){Dr(t,a[e],(""==n?"":n+".")+i+"["+e+"]",r)});else if(s==$r)if(c!=$r||Object.keys(o).length<Object.keys(a).length)Rr(r,(""==n?"":n+".")+i,o);else for(var u in o)Dr(o[u],a[u],(""==n?"":n+".")+i+"."+u,r)};for(var s in t)a(s)}else i==Cr?o!=Cr?Rr(r,n,t):t.length<e.length?Rr(r,n,t):t.forEach(function(t,i){Dr(t,e[i],n+"["+i+"]",r)}):Rr(r,n,t)}}function Rr(t,e,n){t[e]=n}function Ir(t){return Object.prototype.toString.call(t)}function jr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Nr(t){return Pn.find(function(e){return t._watcher===e})}function Mr(t,e){if(!t.__next_tick_pending&&!Nr(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(ei){Xt(ei,t,"nextTick")}else i&&i(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}function Lr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Ur=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,i=Object.create(null);try{i=Lr(this)}catch(s){console.error(s)}i.__webviewId__=r.data.__webviewId__;var o=Object.create(null);Object.keys(i).forEach(function(t){o[t]=r.data[t]});var a=Tr(i,o);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,jr(n)})):jr(this)}};function Hr(){}function Fr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Hr),t.$options.render||(t.$options.render=Hr),"mp-toutiao"!==t.mpHost&&Tn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Wn(t,r,D,{before:function(){t._isMounted&&!t._isDestroyed&&Tn(t,"beforeUpdate")}},!0),n=!1,t}function zr(t,e){return i(t)||i(e)?Vr(t,qr(e)):""}function Vr(t,e){return t?e?t+" "+e:t:e||""}function qr(t){return Array.isArray(t)?Yr(t):c(t)?Wr(t):"string"===typeof t?t:""}function Yr(t){for(var e,n="",r=0,o=t.length;r<o;r++)i(e=qr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Wr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Gr=b(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Kr(t){return Array.isArray(t)?P(t):"string"===typeof t?Gr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Jr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Jr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:$(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Mr(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=xe,t.prototype.__call_hook=function(t,e){var n=this;ht();var r,i=n.$options[t],o=t+" hook";if(i)for(var a=0,s=i.length;a<s;a++)r=Jt(i[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),pt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Jr(e||this,t)},t.prototype.__get_class=function(t,e){return zr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Kr(t),r=e?T(e,n):n;return Object.keys(r).map(function(t){return B(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,i,o,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);return n}if(c(t)){for(o=Object.keys(t),n=Object.create(null),r=0,i=o.length;r<i;r++)a=o[r],n[a]=e(t[a],a,r);return n}return[]}}var Qr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ti(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Qr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Qr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Qr}dr.prototype.__patch__=Ur,dr.prototype.$mount=function(t,e){return Fr(this,t,e)},ti(dr),Zr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Ae,e.createPage=ke,e.default=void 0;var r=i(n("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return c(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return n}function c(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return p(t)||h(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function _(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function w(){}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var x=/-(\w)/g,k=b(function(t){return t.replace(x,function(t,e){return e?e.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],S={},B={};function O(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?E(n):n}function E(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function C(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function $(t,e){Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&g(e[n])&&(t[n]=O(t[n],e[n]))})}function T(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&g(e[n])&&C(t[n],e[n])})}function P(t,e){"string"===typeof t&&_(e)?$(B[t]||(B[t]={}),e):_(t)&&$(S,t)}function D(t,e){"string"===typeof t?_(e)?T(B[t],e):delete B[t]:_(t)&&T(S,t)}function R(t){return function(e){return t(e)||e}}function I(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function j(t,e){for(var n=!1,r=0;r<t.length;r++){var i=t[r];if(n)n=Promise.then(R(i));else{var o=i(e);if(I(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function N(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){j(t[n],e).then(function(t){return g(r)&&r(t)||t})}}}),e}function M(t,e){var n=[];Array.isArray(S.returnValue)&&n.push.apply(n,f(S.returnValue));var r=B[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function L(t){var e=Object.create(null);Object.keys(S).forEach(function(t){"returnValue"!==t&&(e[t]=S[t].slice())});var n=B[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function U(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];var a=L(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=j(a.invoke,n);return s.then(function(t){return e.apply(void 0,[N(a,t)].concat(i))})}return e.apply(void 0,[N(a,n)].concat(i))}return e.apply(void 0,[n].concat(i))}var H={returnValue:function(t){return I(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,z=/^create|Manager$/,V=/^on/;function q(t){return z.test(t)}function Y(t){return F.test(t)}function W(t){return V.test(t)}function G(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(q(t)||Y(t)||W(t))}function X(t,e){return K(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return g(n.success)||g(n.fail)||g(n.complete)?M(t,U.apply(void 0,[t,e,n].concat(i))):M(t,G(new Promise(function(r,o){U.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:o})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var J=1e-4,Z=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Q="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+J),0===n?1!==et&&Q?.5:1:t<0?-n:n}var it={promiseInterceptor:H},ot=Object.freeze({upx2px:rt,interceptors:it,addInterceptor:P,removeInterceptor:D}),at={},st=[],ct=[],ut=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(ht(t,r,n))}}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(_(e)){var o=!0===i?e:{};for(var a in g(n)&&(n=n(e,o)||{}),e)if(m(n,a)){var s=n[a];g(s)&&(s=s(e[a],e,o)),s?y(s)?o[s]=e[a]:_(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ut.indexOf(a)?o[a]=ft(t,e[a],r):i||(o[a]=e[a]);return o}return g(e)&&(e=ft(t,e,r)),e}function ht(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(at.returnValue)&&(e=at.returnValue(t,e)),lt(t,e,n,{},r)}function pt(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var i=n;g(n)&&(i=n(e)),e=lt(t,e,i.args,i.returnValue);var o=[e];"undefined"!==typeof r&&o.push(r);var a=wx[i.name||t].apply(wx,o);return Y(t)?ht(t,a,i.returnValue,q(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,r=e.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(i),g(r)&&r(i)}}vt.forEach(function(t){dt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function _t(t,e,n){return t[e].apply(t,n)}function mt(){return _t(yt(),"$on",Array.prototype.slice.call(arguments))}function wt(){return _t(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return _t(yt(),"$once",Array.prototype.slice.call(arguments))}function xt(){return _t(yt(),"$emit",Array.prototype.slice.call(arguments))}var kt=Object.freeze({$on:mt,$off:wt,$once:bt,$emit:xt});function At(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function St(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;At("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),i=t.show,o=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},c=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a.apply(t,r)}}}function Bt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&St(e),e}var Ot=Object.freeze({getSubNVueById:Bt,requireNativePlugin:At}),Et=Page,Ct=Component,$t=/:/g,Tt=b(function(t){return k(t.replace($t,"-"))});function Pt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.apply(t,[Tt(n)].concat(i))}}}function Dt(t,e){var n=e[t];e[t]=n?function(){Pt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Pt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Dt("onLoad",t),Et(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Dt("created",t),Ct(t)};var Rt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function It(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function jt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return jt(t,e)}):void 0}function Nt(t,e,n){e.forEach(function(e){jt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Mt(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Lt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ut(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Ht(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(i){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(i){}return _(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function zt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Vt(t,e){var n=t["behaviors"],r=t["extends"],i=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),_(r)&&r.props&&a.push(e({properties:Yt(r.props,!0)})),Array.isArray(i)&&i.forEach(function(t){_(t)&&t.props&&a.push(e({properties:Yt(t.props,!0)}))}),a}function qt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Yt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:zt(t)}}):_(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(_(r)){var i=r["default"];g(i)&&(i=i()),r.type=qt(e,r.type),n[e]={type:-1!==Ft.indexOf(r.type)?r.type:null,value:i,observer:zt(e)}}else{var o=qt(e,r);n[e]={type:-1!==Ft.indexOf(o)?o:null,observer:zt(e)}}}),n}function Wt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=w,t.preventDefault=w,t.target=t.target||{},m(t,"detail")||(t.detail={}),_(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Gt(t,e){var n=t;return e.forEach(function(e){var r=e[0],i=e[2];if(r||"undefined"!==typeof i){var o=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=i:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===i}):_(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===i}):console.error("v-for 暂不支持循环数据：",s):n=s[i],a&&(n=t.__get_value(a,n))}}),n}function Kt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,i){"string"===typeof e?e?"$event"===e?r["$"+i]=n:0===e.indexOf("$event.")?r["$"+i]=t.__get_value(e.replace("$event.",""),n):r["$"+i]=t.__get_value(e):r["$"+i]=t:r["$"+i]=Gt(t,e)}),r}function Xt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Jt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(i&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Kt(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||i?i&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Xt(t)):"string"===typeof t&&m(s,t)?c.push(s[t]):c.push(t)}),c}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Wt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var i=t.type,o=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Qt;r=s?r.slice(1):r;var c=r.charAt(0)===Zt;r=c?r.slice(1):r,a&&te(i,r)&&a.forEach(function(n){var r=n[0];if(r){var i=e.$vm;i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent);var a=i[r];if(!g(a))throw new Error(" _vm.".concat(r," is not a function"));if(c){if(a.once)return;a.once=!0}o.push(a.apply(i,Jt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===i&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,i=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),It(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},Nt(o,ne),o}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var i=n.length-1;i>=0;i--)if(r=oe(n[i],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function ue(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,i=n.vueOptions;r&&(e=oe(this.$vm,r)),e||(e=this.$vm),i.parent=e}function le(t){return re(t,{mocks:ie,initRefs:ue})}var he=["onUniNViewMessage"];function pe(t){var e=le(t);return Nt(e,he),e}function de(t){return App(pe(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,i=e.initRelation,a=Mt(r.default,t),s=o(a,2),c=s[0],u=s[1],f={options:{multipleSlots:!0,addGlobalClass:!0},data:Ht(u,r.default.prototype),behaviors:Vt(u,ae),properties:Yt(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ut(t.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),Lt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return Array.isArray(u.wxsCallMethods)&&u.wxsCallMethods.forEach(function(t){f.methods[t]=function(e){return this.$vm[t](e)}}),n?f:[f,c]}function ge(t){return ve(t,{isPage:se,initRelation:ce})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var _e=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ye(t);return Nt(n.methods,_e,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function we(t){return me(t,{isPage:se,initRelation:ce})}_e.push.apply(_e,Rt);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function xe(t){var e=we(t);return Nt(e.methods,be),e}function ke(t){return Component(xe(t))}function Ae(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),ct.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Se={};Object.keys(ot).forEach(function(t){Se[t]=ot[t]}),Object.keys(kt).forEach(function(t){Se[t]=kt[t]}),Object.keys(Ot).forEach(function(t){Se[t]=X(t,Ot[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(Se[t]=X(t,pt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Se,t.UniEmitter=kt),wx.createApp=de,wx.createPage=ke,wx.createComponent=Ae;var Be=Se,Oe=Be;e.default=Oe}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23720191024001",_inBundle:!1,_integrity:"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",_shasum:"18272814446a9bc6053bc92666ec7064a1767588",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a725c04ef762e5df78a9a69d140c2666e0de05fc",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23720191024001"}},"840b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=[{icon:"/static/sharemenu/wx.png",text:"微信好友"},{icon:"/static/sharemenu/pyq.png",text:"朋友圈"},{icon:"/static/sharemenu/qq.png",text:"QQ"},{icon:"/static/sharemenu/copy.png",text:"复制"},{icon:"/static/sharemenu/more.png",text:"更多"}];function i(t,e){var n=plus.screen.resolutionWidth,i=25,o=25,a=55,s=55,c=10,u=12,f=Math.floor(n/(a+o)),l=(n-(a+o)*f-o)/(f+1),h=o+l,p=a+h,d=s+c+u+i,v=s+c,g=new plus.nativeObj.View("alphaBg",{top:"0px",left:"0px",height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.5)"});g.addEventListener("click",function(){g.hide(),y.hide()});var y=new plus.nativeObj.View("shareMenu",{bottom:"0px",left:"0px",height:Math.ceil(r.length/f)*d+i+44+1+"px",width:"100%",backgroundColor:"rgb(255,255,255)"});return y.draw([{tag:"rect",color:"#e7e7e7",position:{top:"0px",height:"1px"}},{tag:"rect",color:"#248ADF",position:{bottom:"0px",height:"45px"}},{tag:"font",id:"sharecancel",text:"取消",textStyles:{size:"14px",color:"#ffffff"},position:{bottom:"0px",height:"44px"}},{tag:"rect",color:"#e7e7e7",position:{bottom:"45px",height:"1px"}}]),r.map(function(t,e){var n=(new Date).getTime(),r=Math.floor(e/f),o=e%f,s=[{src:t.icon,id:1e3*Math.random()+n,tag:"img",position:{top:r*d+i,left:o*p+h,width:a,height:a}},{text:t.text,id:1e3*Math.random()+n,tag:"font",textStyles:{size:u},position:{top:r*d+v,left:o*p+h,width:a,height:a}}];y.draw(s)}),y.addEventListener("click",function(t){if(t.screenY>plus.screen.resolutionHeight-44)g.hide(),y.hide();else if(t.clientX<5||t.clientX>n-5||t.clientY<5);else{var r=t.clientX,i=t.clientY,o=Math.floor(r/p),a=Math.floor(i/d),s=o+a*f;e&&e(s)}}),{alphaBg:g,shareMenu:y}}var o=i;e.default=o},"85cd":function(t,e,n){"use strict";(function(e,n){t.exports=n()})(0,function(){var t=t||function(t,e){var n=Object.create||function(){function t(){}return function(e){var n;return t.prototype=e,n=new t,t.prototype=null,n}}(),r={},i=r.lib={},o=i.Base=function(){return{extend:function(t){var e=n(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),a=i.WordArray=o.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=n!=e?n:4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var e=this.words,n=t.words,r=this.sigBytes,i=t.sigBytes;if(this.clamp(),r%4)for(var o=0;o<i;o++){var a=n[o>>>2]>>>24-o%4*8&255;e[r+o>>>2]|=a<<24-(r+o)%4*8}else for(o=0;o<i;o+=4)e[r+o>>>2]=n[o>>>2];return this.sigBytes+=i,this},clamp:function(){var e=this.words,n=this.sigBytes;e[n>>>2]&=4294967295<<32-n%4*8,e.length=t.ceil(n/4)},clone:function(){var t=o.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var n,r=[],i=function(e){e=e;var n=987654321,r=4294967295;return function(){n=36969*(65535&n)+(n>>16)&r,e=18e3*(65535&e)+(e>>16)&r;var i=(n<<16)+e&r;return i/=4294967296,i+=.5,i*(t.random()>.5?1:-1)}},o=0;o<e;o+=4){var s=i(4294967296*(n||t.random()));n=987654071*s(),r.push(4294967296*s()|0)}return new a.init(r,e)}}),s=r.enc={},c=s.Hex={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],i=0;i<n;i++){var o=e[i>>>2]>>>24-i%4*8&255;r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r+=2)n[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new a.init(n,e/2)}},u=s.Latin1={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],i=0;i<n;i++){var o=e[i>>>2]>>>24-i%4*8&255;r.push(String.fromCharCode(o))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r++)n[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new a.init(n,e)}},f=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(u.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(t){return u.parse(unescape(encodeURIComponent(t)))}},l=i.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var n=this._data,r=n.words,i=n.sigBytes,o=this.blockSize,s=4*o,c=i/s;c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0);var u=c*o,f=t.min(4*u,i);if(u){for(var l=0;l<u;l+=o)this._doProcessBlock(r,l);var h=r.splice(0,u);n.sigBytes-=f}return new a.init(h,f)},clone:function(){var t=o.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),h=(i.Hasher=l.extend({cfg:o.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,n){return new t.init(n).finalize(e)}},_createHmacHelper:function(t){return function(e,n){return new h.HMAC.init(t,n).finalize(e)}}}),r.algo={});return r}(Math);return function(){var e=t,n=e.lib,r=n.WordArray,i=e.enc;i.Base64={stringify:function(t){var e=t.words,n=t.sigBytes,r=this._map;t.clamp();for(var i=[],o=0;o<n;o+=3)for(var a=e[o>>>2]>>>24-o%4*8&255,s=e[o+1>>>2]>>>24-(o+1)%4*8&255,c=e[o+2>>>2]>>>24-(o+2)%4*8&255,u=a<<16|s<<8|c,f=0;f<4&&o+.75*f<n;f++)i.push(r.charAt(u>>>6*(3-f)&63));var l=r.charAt(64);if(l)while(i.length%4)i.push(l);return i.join("")},parse:function(t){var e=t.length,n=this._map,r=this._reverseMap;if(!r){r=this._reverseMap=[];for(var i=0;i<n.length;i++)r[n.charCodeAt(i)]=i}var a=n.charAt(64);if(a){var s=t.indexOf(a);-1!==s&&(e=s)}return o(t,e,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function o(t,e,n){for(var i=[],o=0,a=0;a<e;a++)if(a%4){var s=n[t.charCodeAt(a-1)]<<a%4*2,c=n[t.charCodeAt(a)]>>>6-a%4*2;i[o>>>2]|=(s|c)<<24-o%4*8,o++}return r.create(i,o)}}(),function(e){var n=t,r=n.lib,i=r.WordArray,o=r.Hasher,a=n.algo,s=[];(function(){for(var t=0;t<64;t++)s[t]=4294967296*e.abs(e.sin(t+1))|0})();var c=a.MD5=o.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(var n=0;n<16;n++){var r=e+n,i=t[r];t[r]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var o=this._hash.words,a=t[e+0],c=t[e+1],p=t[e+2],d=t[e+3],v=t[e+4],g=t[e+5],y=t[e+6],_=t[e+7],m=t[e+8],w=t[e+9],b=t[e+10],x=t[e+11],k=t[e+12],A=t[e+13],S=t[e+14],B=t[e+15],O=o[0],E=o[1],C=o[2],$=o[3];O=u(O,E,C,$,a,7,s[0]),$=u($,O,E,C,c,12,s[1]),C=u(C,$,O,E,p,17,s[2]),E=u(E,C,$,O,d,22,s[3]),O=u(O,E,C,$,v,7,s[4]),$=u($,O,E,C,g,12,s[5]),C=u(C,$,O,E,y,17,s[6]),E=u(E,C,$,O,_,22,s[7]),O=u(O,E,C,$,m,7,s[8]),$=u($,O,E,C,w,12,s[9]),C=u(C,$,O,E,b,17,s[10]),E=u(E,C,$,O,x,22,s[11]),O=u(O,E,C,$,k,7,s[12]),$=u($,O,E,C,A,12,s[13]),C=u(C,$,O,E,S,17,s[14]),E=u(E,C,$,O,B,22,s[15]),O=f(O,E,C,$,c,5,s[16]),$=f($,O,E,C,y,9,s[17]),C=f(C,$,O,E,x,14,s[18]),E=f(E,C,$,O,a,20,s[19]),O=f(O,E,C,$,g,5,s[20]),$=f($,O,E,C,b,9,s[21]),C=f(C,$,O,E,B,14,s[22]),E=f(E,C,$,O,v,20,s[23]),O=f(O,E,C,$,w,5,s[24]),$=f($,O,E,C,S,9,s[25]),C=f(C,$,O,E,d,14,s[26]),E=f(E,C,$,O,m,20,s[27]),O=f(O,E,C,$,A,5,s[28]),$=f($,O,E,C,p,9,s[29]),C=f(C,$,O,E,_,14,s[30]),E=f(E,C,$,O,k,20,s[31]),O=l(O,E,C,$,g,4,s[32]),$=l($,O,E,C,m,11,s[33]),C=l(C,$,O,E,x,16,s[34]),E=l(E,C,$,O,S,23,s[35]),O=l(O,E,C,$,c,4,s[36]),$=l($,O,E,C,v,11,s[37]),C=l(C,$,O,E,_,16,s[38]),E=l(E,C,$,O,b,23,s[39]),O=l(O,E,C,$,A,4,s[40]),$=l($,O,E,C,a,11,s[41]),C=l(C,$,O,E,d,16,s[42]),E=l(E,C,$,O,y,23,s[43]),O=l(O,E,C,$,w,4,s[44]),$=l($,O,E,C,k,11,s[45]),C=l(C,$,O,E,B,16,s[46]),E=l(E,C,$,O,p,23,s[47]),O=h(O,E,C,$,a,6,s[48]),$=h($,O,E,C,_,10,s[49]),C=h(C,$,O,E,S,15,s[50]),E=h(E,C,$,O,g,21,s[51]),O=h(O,E,C,$,k,6,s[52]),$=h($,O,E,C,d,10,s[53]),C=h(C,$,O,E,b,15,s[54]),E=h(E,C,$,O,c,21,s[55]),O=h(O,E,C,$,m,6,s[56]),$=h($,O,E,C,B,10,s[57]),C=h(C,$,O,E,y,15,s[58]),E=h(E,C,$,O,A,21,s[59]),O=h(O,E,C,$,v,6,s[60]),$=h($,O,E,C,x,10,s[61]),C=h(C,$,O,E,p,15,s[62]),E=h(E,C,$,O,w,21,s[63]),o[0]=o[0]+O|0,o[1]=o[1]+E|0,o[2]=o[2]+C|0,o[3]=o[3]+$|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;n[i>>>5]|=128<<24-i%32;var o=e.floor(r/4294967296),a=r;n[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),n[14+(i+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),t.sigBytes=4*(n.length+1),this._process();for(var s=this._hash,c=s.words,u=0;u<4;u++){var f=c[u];c[u]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return s},clone:function(){var t=o.clone.call(this);return t._hash=this._hash.clone(),t}});function u(t,e,n,r,i,o,a){var s=t+(e&n|~e&r)+i+a;return(s<<o|s>>>32-o)+e}function f(t,e,n,r,i,o,a){var s=t+(e&r|n&~r)+i+a;return(s<<o|s>>>32-o)+e}function l(t,e,n,r,i,o,a){var s=t+(e^n^r)+i+a;return(s<<o|s>>>32-o)+e}function h(t,e,n,r,i,o,a){var s=t+(n^(e|~r))+i+a;return(s<<o|s>>>32-o)+e}n.MD5=o._createHelper(c),n.HmacMD5=o._createHmacHelper(c)}(Math),function(){var e=t,n=e.lib,r=n.WordArray,i=n.Hasher,o=e.algo,a=[],s=o.SHA1=i.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var n=this._hash.words,r=n[0],i=n[1],o=n[2],s=n[3],c=n[4],u=0;u<80;u++){if(u<16)a[u]=0|t[e+u];else{var f=a[u-3]^a[u-8]^a[u-14]^a[u-16];a[u]=f<<1|f>>>31}var l=(r<<5|r>>>27)+c+a[u];l+=u<20?1518500249+(i&o|~i&s):u<40?1859775393+(i^o^s):u<60?(i&o|i&s|o&s)-1894007588:(i^o^s)-899497514,c=s,s=o,o=i<<30|i>>>2,i=r,r=l}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+c|0},_doFinalize:function(){var t=this._data,e=t.words,n=8*this._nDataBytes,r=8*t.sigBytes;return e[r>>>5]|=128<<24-r%32,e[14+(r+64>>>9<<4)]=Math.floor(n/4294967296),e[15+(r+64>>>9<<4)]=n,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});e.SHA1=i._createHelper(s),e.HmacSHA1=i._createHmacHelper(s)}(),function(e){var n=t,r=n.lib,i=r.WordArray,o=r.Hasher,a=n.algo,s=[],c=[];(function(){function t(t){for(var n=e.sqrt(t),r=2;r<=n;r++)if(!(t%r))return!1;return!0}function n(t){return 4294967296*(t-(0|t))|0}var r=2,i=0;while(i<64)t(r)&&(i<8&&(s[i]=n(e.pow(r,.5))),c[i]=n(e.pow(r,1/3)),i++),r++})();var u=[],f=a.SHA256=o.extend({_doReset:function(){this._hash=new i.init(s.slice(0))},_doProcessBlock:function(t,e){for(var n=this._hash.words,r=n[0],i=n[1],o=n[2],a=n[3],s=n[4],f=n[5],l=n[6],h=n[7],p=0;p<64;p++){if(p<16)u[p]=0|t[e+p];else{var d=u[p-15],v=(d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3,g=u[p-2],y=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;u[p]=v+u[p-7]+y+u[p-16]}var _=s&f^~s&l,m=r&i^r&o^i&o,w=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),b=(s<<26|s>>>6)^(s<<21|s>>>11)^(s<<7|s>>>25),x=h+b+_+c[p]+u[p],k=w+m;h=l,l=f,f=s,s=a+x|0,a=o,o=i,i=r,r=x+k|0}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+o|0,n[3]=n[3]+a|0,n[4]=n[4]+s|0,n[5]=n[5]+f|0,n[6]=n[6]+l|0,n[7]=n[7]+h|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return n[i>>>5]|=128<<24-i%32,n[14+(i+64>>>9<<4)]=e.floor(r/4294967296),n[15+(i+64>>>9<<4)]=r,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var t=o.clone.call(this);return t._hash=this._hash.clone(),t}});n.SHA256=o._createHelper(f),n.HmacSHA256=o._createHmacHelper(f)}(Math),function(){var e=t,n=e.lib,r=n.WordArray,i=e.enc;i.Utf16=i.Utf16BE={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],i=0;i<n;i+=2){var o=e[i>>>2]>>>16-i%4*8&65535;r.push(String.fromCharCode(o))}return r.join("")},parse:function(t){for(var e=t.length,n=[],i=0;i<e;i++)n[i>>>1]|=t.charCodeAt(i)<<16-i%2*16;return r.create(n,2*e)}};function o(t){return t<<8&4278255360|t>>>8&16711935}i.Utf16LE={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],i=0;i<n;i+=2){var a=o(e[i>>>2]>>>16-i%4*8&65535);r.push(String.fromCharCode(a))}return r.join("")},parse:function(t){for(var e=t.length,n=[],i=0;i<e;i++)n[i>>>1]|=o(t.charCodeAt(i)<<16-i%2*16);return r.create(n,2*e)}}}(),function(){if("function"==typeof ArrayBuffer){var e=t,n=e.lib,r=n.WordArray,i=r.init,o=r.init=function(t){if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(t instanceof Int8Array||"undefined"!==typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var e=t.byteLength,n=[],r=0;r<e;r++)n[r>>>2]|=t[r]<<24-r%4*8;i.call(this,n,e)}else i.apply(this,arguments)};o.prototype=r}}(),
/** @preserve
  (c) 2012 by Cédric Mesnil. All rights reserved.
  	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */
function(e){var n=t,r=n.lib,i=r.WordArray,o=r.Hasher,a=n.algo,s=i.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),c=i.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),u=i.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),f=i.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),l=i.create([0,1518500249,1859775393,2400959708,2840853838]),h=i.create([1352829926,1548603684,1836072691,2053994217,0]),p=a.RIPEMD160=o.extend({_doReset:function(){this._hash=i.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var n=0;n<16;n++){var r=e+n,i=t[r];t[r]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var o,a,p,w,b,x,k,A,S,B,O,E=this._hash.words,C=l.words,$=h.words,T=s.words,P=c.words,D=u.words,R=f.words;x=o=E[0],k=a=E[1],A=p=E[2],S=w=E[3],B=b=E[4];for(n=0;n<80;n+=1)O=o+t[e+T[n]]|0,O+=n<16?d(a,p,w)+C[0]:n<32?v(a,p,w)+C[1]:n<48?g(a,p,w)+C[2]:n<64?y(a,p,w)+C[3]:_(a,p,w)+C[4],O|=0,O=m(O,D[n]),O=O+b|0,o=b,b=w,w=m(p,10),p=a,a=O,O=x+t[e+P[n]]|0,O+=n<16?_(k,A,S)+$[0]:n<32?y(k,A,S)+$[1]:n<48?g(k,A,S)+$[2]:n<64?v(k,A,S)+$[3]:d(k,A,S)+$[4],O|=0,O=m(O,R[n]),O=O+B|0,x=B,B=S,S=m(A,10),A=k,k=O;O=E[1]+p+S|0,E[1]=E[2]+w+B|0,E[2]=E[3]+b+x|0,E[3]=E[4]+o+k|0,E[4]=E[0]+a+A|0,E[0]=O},_doFinalize:function(){var t=this._data,e=t.words,n=8*this._nDataBytes,r=8*t.sigBytes;e[r>>>5]|=128<<24-r%32,e[14+(r+64>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),t.sigBytes=4*(e.length+1),this._process();for(var i=this._hash,o=i.words,a=0;a<5;a++){var s=o[a];o[a]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}return i},clone:function(){var t=o.clone.call(this);return t._hash=this._hash.clone(),t}});function d(t,e,n){return t^e^n}function v(t,e,n){return t&e|~t&n}function g(t,e,n){return(t|~e)^n}function y(t,e,n){return t&n|e&~n}function _(t,e,n){return t^(e|~n)}function m(t,e){return t<<e|t>>>32-e}n.RIPEMD160=o._createHelper(p),n.HmacRIPEMD160=o._createHmacHelper(p)}(Math),function(){var e=t,n=e.lib,r=n.Base,i=e.enc,o=i.Utf8,a=e.algo;a.HMAC=r.extend({init:function(t,e){t=this._hasher=new t.init,"string"==typeof e&&(e=o.parse(e));var n=t.blockSize,r=4*n;e.sigBytes>r&&(e=t.finalize(e)),e.clamp();for(var i=this._oKey=e.clone(),a=this._iKey=e.clone(),s=i.words,c=a.words,u=0;u<n;u++)s[u]^=1549556828,c[u]^=909522486;i.sigBytes=a.sigBytes=r,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var e=this._hasher,n=e.finalize(t);e.reset();var r=e.finalize(this._oKey.clone().concat(n));return r}})}(),function(){var e=t,n=e.lib,r=n.Base,i=n.WordArray,o=e.algo,a=o.SHA1,s=o.HMAC,c=o.PBKDF2=r.extend({cfg:r.extend({keySize:4,hasher:a,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){var n=this.cfg,r=s.create(n.hasher,t),o=i.create(),a=i.create([1]),c=o.words,u=a.words,f=n.keySize,l=n.iterations;while(c.length<f){var h=r.update(e).finalize(a);r.reset();for(var p=h.words,d=p.length,v=h,g=1;g<l;g++){v=r.finalize(v),r.reset();for(var y=v.words,_=0;_<d;_++)p[_]^=y[_]}o.concat(h),u[0]++}return o.sigBytes=4*f,o}});e.PBKDF2=function(t,e,n){return c.create(n).compute(t,e)}}(),function(){var e=t,n=e.lib,r=n.Base,i=n.WordArray,o=e.algo,a=o.MD5,s=o.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:a,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){var n=this.cfg,r=n.hasher.create(),o=i.create(),a=o.words,s=n.keySize,c=n.iterations;while(a.length<s){u&&r.update(u);var u=r.update(t).finalize(e);r.reset();for(var f=1;f<c;f++)u=r.finalize(u),r.reset();o.concat(u)}return o.sigBytes=4*s,o}});e.EvpKDF=function(t,e,n){return s.create(n).compute(t,e)}}(),function(){var e=t,n=e.lib,r=n.WordArray,i=e.algo,o=i.SHA256,a=i.SHA224=o.extend({_doReset:function(){this._hash=new r.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var t=o._doFinalize.call(this);return t.sigBytes-=4,t}});e.SHA224=o._createHelper(a),e.HmacSHA224=o._createHmacHelper(a)}(),function(e){var n=t,r=n.lib,i=r.Base,o=r.WordArray,a=n.x64={};a.Word=i.extend({init:function(t,e){this.high=t,this.low=e}}),a.WordArray=i.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=n!=e?n:8*t.length},toX32:function(){for(var t=this.words,e=t.length,n=[],r=0;r<e;r++){var i=t[r];n.push(i.high),n.push(i.low)}return o.create(n,this.sigBytes)},clone:function(){for(var t=i.clone.call(this),e=t.words=this.words.slice(0),n=e.length,r=0;r<n;r++)e[r]=e[r].clone();return t}})}(),function(e){var n=t,r=n.lib,i=r.WordArray,o=r.Hasher,a=n.x64,s=a.Word,c=n.algo,u=[],f=[],l=[];(function(){for(var t=1,e=0,n=0;n<24;n++){u[t+5*e]=(n+1)*(n+2)/2%64;var r=e%5,i=(2*t+3*e)%5;t=r,e=i}for(t=0;t<5;t++)for(e=0;e<5;e++)f[t+5*e]=e+(2*t+3*e)%5*5;for(var o=1,a=0;a<24;a++){for(var c=0,h=0,p=0;p<7;p++){if(1&o){var d=(1<<p)-1;d<32?h^=1<<d:c^=1<<d-32}128&o?o=o<<1^113:o<<=1}l[a]=s.create(c,h)}})();var h=[];(function(){for(var t=0;t<25;t++)h[t]=s.create()})();var p=c.SHA3=o.extend({cfg:o.cfg.extend({outputLength:512}),_doReset:function(){for(var t=this._state=[],e=0;e<25;e++)t[e]=new s.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(t,e){for(var n=this._state,r=this.blockSize/2,i=0;i<r;i++){var o=t[e+2*i],a=t[e+2*i+1];o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),a=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8);var s=n[i];s.high^=a,s.low^=o}for(var c=0;c<24;c++){for(var p=0;p<5;p++){for(var d=0,v=0,g=0;g<5;g++){s=n[p+5*g];d^=s.high,v^=s.low}var y=h[p];y.high=d,y.low=v}for(p=0;p<5;p++){var _=h[(p+4)%5],m=h[(p+1)%5],w=m.high,b=m.low;for(d=_.high^(w<<1|b>>>31),v=_.low^(b<<1|w>>>31),g=0;g<5;g++){s=n[p+5*g];s.high^=d,s.low^=v}}for(var x=1;x<25;x++){s=n[x];var k=s.high,A=s.low,S=u[x];if(S<32)d=k<<S|A>>>32-S,v=A<<S|k>>>32-S;else d=A<<S-32|k>>>64-S,v=k<<S-32|A>>>64-S;var B=h[f[x]];B.high=d,B.low=v}var O=h[0],E=n[0];O.high=E.high,O.low=E.low;for(p=0;p<5;p++)for(g=0;g<5;g++){x=p+5*g,s=n[x];var C=h[x],$=h[(p+1)%5+5*g],T=h[(p+2)%5+5*g];s.high=C.high^~$.high&T.high,s.low=C.low^~$.low&T.low}s=n[0];var P=l[c];s.high^=P.high,s.low^=P.low}},_doFinalize:function(){var t=this._data,n=t.words,r=(this._nDataBytes,8*t.sigBytes),o=32*this.blockSize;n[r>>>5]|=1<<24-r%32,n[(e.ceil((r+1)/o)*o>>>5)-1]|=128,t.sigBytes=4*n.length,this._process();for(var a=this._state,s=this.cfg.outputLength/8,c=s/8,u=[],f=0;f<c;f++){var l=a[f],h=l.high,p=l.low;h=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8),p=16711935&(p<<8|p>>>24)|4278255360&(p<<24|p>>>8),u.push(p),u.push(h)}return new i.init(u,s)},clone:function(){for(var t=o.clone.call(this),e=t._state=this._state.slice(0),n=0;n<25;n++)e[n]=e[n].clone();return t}});n.SHA3=o._createHelper(p),n.HmacSHA3=o._createHmacHelper(p)}(Math),function(){var e=t,n=e.lib,r=n.Hasher,i=e.x64,o=i.Word,a=i.WordArray,s=e.algo;function c(){return o.create.apply(o,arguments)}var u=[c(1116352408,3609767458),c(1899447441,602891725),c(3049323471,3964484399),c(3921009573,2173295548),c(961987163,4081628472),c(1508970993,3053834265),c(2453635748,2937671579),c(2870763221,3664609560),c(3624381080,2734883394),c(310598401,1164996542),c(607225278,1323610764),c(1426881987,3590304994),c(1925078388,4068182383),c(2162078206,991336113),c(2614888103,633803317),c(3248222580,3479774868),c(3835390401,2666613458),c(4022224774,944711139),c(264347078,2341262773),c(604807628,2007800933),c(770255983,1495990901),c(1249150122,1856431235),c(1555081692,3175218132),c(1996064986,2198950837),c(2554220882,3999719339),c(2821834349,766784016),c(2952996808,2566594879),c(3210313671,3203337956),c(3336571891,1034457026),c(3584528711,2466948901),c(113926993,3758326383),c(338241895,168717936),c(666307205,1188179964),c(773529912,1546045734),c(1294757372,1522805485),c(1396182291,2643833823),c(1695183700,2343527390),c(1986661051,1014477480),c(2177026350,1206759142),c(2456956037,344077627),c(2730485921,1290863460),c(2820302411,3158454273),c(3259730800,3505952657),c(3345764771,106217008),c(3516065817,3606008344),c(3600352804,1432725776),c(4094571909,1467031594),c(275423344,851169720),c(430227734,3100823752),c(506948616,1363258195),c(659060556,3750685593),c(883997877,3785050280),c(958139571,3318307427),c(1322822218,3812723403),c(1537002063,2003034995),c(1747873779,3602036899),c(1955562222,1575990012),c(2024104815,1125592928),c(2227730452,2716904306),c(2361852424,442776044),c(2428436474,593698344),c(2756734187,3733110249),c(3204031479,2999351573),c(3329325298,3815920427),c(3391569614,3928383900),c(3515267271,566280711),c(3940187606,3454069534),c(4118630271,4000239992),c(116418474,1914138554),c(174292421,2731055270),c(289380356,3203993006),c(460393269,320620315),c(685471733,587496836),c(852142971,1086792851),c(1017036298,365543100),c(1126000580,2618297676),c(1288033470,3409855158),c(1501505948,4234509866),c(1607167915,987167468),c(1816402316,1246189591)],f=[];(function(){for(var t=0;t<80;t++)f[t]=c()})();var l=s.SHA512=r.extend({_doReset:function(){this._hash=new a.init([new o.init(1779033703,4089235720),new o.init(3144134277,2227873595),new o.init(1013904242,4271175723),new o.init(2773480762,1595750129),new o.init(1359893119,2917565137),new o.init(2600822924,725511199),new o.init(528734635,4215389547),new o.init(1541459225,327033209)])},_doProcessBlock:function(t,e){for(var n=this._hash.words,r=n[0],i=n[1],o=n[2],a=n[3],s=n[4],c=n[5],l=n[6],h=n[7],p=r.high,d=r.low,v=i.high,g=i.low,y=o.high,_=o.low,m=a.high,w=a.low,b=s.high,x=s.low,k=c.high,A=c.low,S=l.high,B=l.low,O=h.high,E=h.low,C=p,$=d,T=v,P=g,D=y,R=_,I=m,j=w,N=b,M=x,L=k,U=A,H=S,F=B,z=O,V=E,q=0;q<80;q++){var Y=f[q];if(q<16)var W=Y.high=0|t[e+2*q],G=Y.low=0|t[e+2*q+1];else{var K=f[q-15],X=K.high,J=K.low,Z=(X>>>1|J<<31)^(X>>>8|J<<24)^X>>>7,Q=(J>>>1|X<<31)^(J>>>8|X<<24)^(J>>>7|X<<25),tt=f[q-2],et=tt.high,nt=tt.low,rt=(et>>>19|nt<<13)^(et<<3|nt>>>29)^et>>>6,it=(nt>>>19|et<<13)^(nt<<3|et>>>29)^(nt>>>6|et<<26),ot=f[q-7],at=ot.high,st=ot.low,ct=f[q-16],ut=ct.high,ft=ct.low;G=Q+st,W=Z+at+(G>>>0<Q>>>0?1:0),G=G+it,W=W+rt+(G>>>0<it>>>0?1:0),G=G+ft,W=W+ut+(G>>>0<ft>>>0?1:0);Y.high=W,Y.low=G}var lt=N&L^~N&H,ht=M&U^~M&F,pt=C&T^C&D^T&D,dt=$&P^$&R^P&R,vt=(C>>>28|$<<4)^(C<<30|$>>>2)^(C<<25|$>>>7),gt=($>>>28|C<<4)^($<<30|C>>>2)^($<<25|C>>>7),yt=(N>>>14|M<<18)^(N>>>18|M<<14)^(N<<23|M>>>9),_t=(M>>>14|N<<18)^(M>>>18|N<<14)^(M<<23|N>>>9),mt=u[q],wt=mt.high,bt=mt.low,xt=V+_t,kt=z+yt+(xt>>>0<V>>>0?1:0),At=(xt=xt+ht,kt=kt+lt+(xt>>>0<ht>>>0?1:0),xt=xt+bt,kt=kt+wt+(xt>>>0<bt>>>0?1:0),xt=xt+G,kt=kt+W+(xt>>>0<G>>>0?1:0),gt+dt),St=vt+pt+(At>>>0<gt>>>0?1:0);z=H,V=F,H=L,F=U,L=N,U=M,M=j+xt|0,N=I+kt+(M>>>0<j>>>0?1:0)|0,I=D,j=R,D=T,R=P,T=C,P=$,$=xt+At|0,C=kt+St+($>>>0<xt>>>0?1:0)|0}d=r.low=d+$,r.high=p+C+(d>>>0<$>>>0?1:0),g=i.low=g+P,i.high=v+T+(g>>>0<P>>>0?1:0),_=o.low=_+R,o.high=y+D+(_>>>0<R>>>0?1:0),w=a.low=w+j,a.high=m+I+(w>>>0<j>>>0?1:0),x=s.low=x+M,s.high=b+N+(x>>>0<M>>>0?1:0),A=c.low=A+U,c.high=k+L+(A>>>0<U>>>0?1:0),B=l.low=B+F,l.high=S+H+(B>>>0<F>>>0?1:0),E=h.low=E+V,h.high=O+z+(E>>>0<V>>>0?1:0)},_doFinalize:function(){var t=this._data,e=t.words,n=8*this._nDataBytes,r=8*t.sigBytes;e[r>>>5]|=128<<24-r%32,e[30+(r+128>>>10<<5)]=Math.floor(n/4294967296),e[31+(r+128>>>10<<5)]=n,t.sigBytes=4*e.length,this._process();var i=this._hash.toX32();return i},clone:function(){var t=r.clone.call(this);return t._hash=this._hash.clone(),t},blockSize:32});e.SHA512=r._createHelper(l),e.HmacSHA512=r._createHmacHelper(l)}(),function(){var e=t,n=e.x64,r=n.Word,i=n.WordArray,o=e.algo,a=o.SHA512,s=o.SHA384=a.extend({_doReset:function(){this._hash=new i.init([new r.init(3418070365,3238371032),new r.init(1654270250,914150663),new r.init(2438529370,812702999),new r.init(355462360,4144912697),new r.init(1731405415,4290775857),new r.init(2394180231,1750603025),new r.init(3675008525,1694076839),new r.init(1203062813,3204075428)])},_doFinalize:function(){var t=a._doFinalize.call(this);return t.sigBytes-=16,t}});e.SHA384=a._createHelper(s),e.HmacSHA384=a._createHmacHelper(s)}(),t.lib.Cipher||function(e){var n=t,r=n.lib,i=r.Base,o=r.WordArray,a=r.BufferedBlockAlgorithm,s=n.enc,c=(s.Utf8,s.Base64),u=n.algo,f=u.EvpKDF,l=r.Cipher=a.extend({cfg:i.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,n){this.cfg=this.cfg.extend(n),this._xformMode=t,this._key=e,this.reset()},reset:function(){a.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?k:w}return function(e){return{encrypt:function(n,r,i){return t(r).encrypt(e,n,r,i)},decrypt:function(n,r,i){return t(r).decrypt(e,n,r,i)}}}}()}),h=(r.StreamCipher=l.extend({_doFinalize:function(){var t=this._process(!0);return t},blockSize:1}),n.mode={}),p=r.BlockCipherMode=i.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),d=h.CBC=function(){var t=p.extend();function n(t,n,r){var i=this._iv;if(i){var o=i;this._iv=e}else o=this._prevBlock;for(var a=0;a<r;a++)t[n+a]^=o[a]}return t.Encryptor=t.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize;n.call(this,t,e,i),r.encryptBlock(t,e),this._prevBlock=t.slice(e,e+i)}}),t.Decryptor=t.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,o=t.slice(e,e+i);r.decryptBlock(t,e),n.call(this,t,e,i),this._prevBlock=o}}),t}(),v=n.pad={},g=v.Pkcs7={pad:function(t,e){for(var n=4*e,r=n-t.sigBytes%n,i=r<<24|r<<16|r<<8|r,a=[],s=0;s<r;s+=4)a.push(i);var c=o.create(a,r);t.concat(c)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},y=(r.BlockCipher=l.extend({cfg:l.cfg.extend({mode:d,padding:g}),reset:function(){l.reset.call(this);var t=this.cfg,e=t.iv,n=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var r=n.createEncryptor;else{r=n.createDecryptor;this._minBufferSize=1}this._mode&&this._mode.__creator==r?this._mode.init(this,e&&e.words):(this._mode=r.call(n,this,e&&e.words),this._mode.__creator=r)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else{e=this._process(!0);t.unpad(e)}return e},blockSize:4}),r.CipherParams=i.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),_=n.format={},m=_.OpenSSL={stringify:function(t){var e=t.ciphertext,n=t.salt;if(n)var r=o.create([1398893684,1701076831]).concat(n).concat(e);else r=e;return r.toString(c)},parse:function(t){var e=c.parse(t),n=e.words;if(1398893684==n[0]&&1701076831==n[1]){var r=o.create(n.slice(2,4));n.splice(0,4),e.sigBytes-=16}return y.create({ciphertext:e,salt:r})}},w=r.SerializableCipher=i.extend({cfg:i.extend({format:m}),encrypt:function(t,e,n,r){r=this.cfg.extend(r);var i=t.createEncryptor(n,r),o=i.finalize(e),a=i.cfg;return y.create({ciphertext:o,key:n,iv:a.iv,algorithm:t,mode:a.mode,padding:a.padding,blockSize:t.blockSize,formatter:r.format})},decrypt:function(t,e,n,r){r=this.cfg.extend(r),e=this._parse(e,r.format);var i=t.createDecryptor(n,r).finalize(e.ciphertext);return i},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),b=n.kdf={},x=b.OpenSSL={execute:function(t,e,n,r){r||(r=o.random(8));var i=f.create({keySize:e+n}).compute(t,r),a=o.create(i.words.slice(e),4*n);return i.sigBytes=4*e,y.create({key:i,iv:a,salt:r})}},k=r.PasswordBasedCipher=w.extend({cfg:w.cfg.extend({kdf:x}),encrypt:function(t,e,n,r){r=this.cfg.extend(r);var i=r.kdf.execute(n,t.keySize,t.ivSize);r.iv=i.iv;var o=w.encrypt.call(this,t,e,i.key,r);return o.mixIn(i),o},decrypt:function(t,e,n,r){r=this.cfg.extend(r),e=this._parse(e,r.format);var i=r.kdf.execute(n,t.keySize,t.ivSize,e.salt);r.iv=i.iv;var o=w.decrypt.call(this,t,e,i.key,r);return o}})}(),t.mode.CFB=function(){var e=t.lib.BlockCipherMode.extend();function n(t,e,n,r){var i=this._iv;if(i){var o=i.slice(0);this._iv=void 0}else o=this._prevBlock;r.encryptBlock(o,0);for(var a=0;a<n;a++)t[e+a]^=o[a]}return e.Encryptor=e.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize;n.call(this,t,e,i,r),this._prevBlock=t.slice(e,e+i)}}),e.Decryptor=e.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,o=t.slice(e,e+i);n.call(this,t,e,i,r),this._prevBlock=o}}),e}(),t.mode.ECB=function(){var e=t.lib.BlockCipherMode.extend();return e.Encryptor=e.extend({processBlock:function(t,e){this._cipher.encryptBlock(t,e)}}),e.Decryptor=e.extend({processBlock:function(t,e){this._cipher.decryptBlock(t,e)}}),e}(),t.pad.AnsiX923={pad:function(t,e){var n=t.sigBytes,r=4*e,i=r-n%r,o=n+i-1;t.clamp(),t.words[o>>>2]|=i<<24-o%4*8,t.sigBytes+=i},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},t.pad.Iso10126={pad:function(e,n){var r=4*n,i=r-e.sigBytes%r;e.concat(t.lib.WordArray.random(i-1)).concat(t.lib.WordArray.create([i<<24],1))},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},t.pad.Iso97971={pad:function(e,n){e.concat(t.lib.WordArray.create([2147483648],1)),t.pad.ZeroPadding.pad(e,n)},unpad:function(e){t.pad.ZeroPadding.unpad(e),e.sigBytes--}},t.mode.OFB=function(){var e=t.lib.BlockCipherMode.extend(),n=e.Encryptor=e.extend({processBlock:function(t,e){var n=this._cipher,r=n.blockSize,i=this._iv,o=this._keystream;i&&(o=this._keystream=i.slice(0),this._iv=void 0),n.encryptBlock(o,0);for(var a=0;a<r;a++)t[e+a]^=o[a]}});return e.Decryptor=n,e}(),t.pad.NoPadding={pad:function(){},unpad:function(){}},function(e){var n=t,r=n.lib,i=r.CipherParams,o=n.enc,a=o.Hex,s=n.format;s.Hex={stringify:function(t){return t.ciphertext.toString(a)},parse:function(t){var e=a.parse(t);return i.create({ciphertext:e})}}}(),function(){var e=t,n=e.lib,r=n.BlockCipher,i=e.algo,o=[],a=[],s=[],c=[],u=[],f=[],l=[],h=[],p=[],d=[];(function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;var n=0,r=0;for(e=0;e<256;e++){var i=r^r<<1^r<<2^r<<3^r<<4;i=i>>>8^255&i^99,o[n]=i,a[i]=n;var v=t[n],g=t[v],y=t[g],_=257*t[i]^16843008*i;s[n]=_<<24|_>>>8,c[n]=_<<16|_>>>16,u[n]=_<<8|_>>>24,f[n]=_;_=16843009*y^65537*g^257*v^16843008*n;l[i]=_<<24|_>>>8,h[i]=_<<16|_>>>16,p[i]=_<<8|_>>>24,d[i]=_,n?(n=v^t[t[t[y^v]]],r^=t[t[r]]):n=r=1}})();var v=[0,1,2,4,8,16,32,64,128,27,54],g=i.AES=r.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var t=this._keyPriorReset=this._key,e=t.words,n=t.sigBytes/4,r=this._nRounds=n+6,i=4*(r+1),a=this._keySchedule=[],s=0;s<i;s++)if(s<n)a[s]=e[s];else{var c=a[s-1];s%n?n>6&&s%n==4&&(c=o[c>>>24]<<24|o[c>>>16&255]<<16|o[c>>>8&255]<<8|o[255&c]):(c=c<<8|c>>>24,c=o[c>>>24]<<24|o[c>>>16&255]<<16|o[c>>>8&255]<<8|o[255&c],c^=v[s/n|0]<<24),a[s]=a[s-n]^c}for(var u=this._invKeySchedule=[],f=0;f<i;f++){s=i-f;if(f%4)c=a[s];else c=a[s-4];u[f]=f<4||s<=4?c:l[o[c>>>24]]^h[o[c>>>16&255]]^p[o[c>>>8&255]]^d[o[255&c]]}}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,s,c,u,f,o)},decryptBlock:function(t,e){var n=t[e+1];t[e+1]=t[e+3],t[e+3]=n,this._doCryptBlock(t,e,this._invKeySchedule,l,h,p,d,a);n=t[e+1];t[e+1]=t[e+3],t[e+3]=n},_doCryptBlock:function(t,e,n,r,i,o,a,s){for(var c=this._nRounds,u=t[e]^n[0],f=t[e+1]^n[1],l=t[e+2]^n[2],h=t[e+3]^n[3],p=4,d=1;d<c;d++){var v=r[u>>>24]^i[f>>>16&255]^o[l>>>8&255]^a[255&h]^n[p++],g=r[f>>>24]^i[l>>>16&255]^o[h>>>8&255]^a[255&u]^n[p++],y=r[l>>>24]^i[h>>>16&255]^o[u>>>8&255]^a[255&f]^n[p++],_=r[h>>>24]^i[u>>>16&255]^o[f>>>8&255]^a[255&l]^n[p++];u=v,f=g,l=y,h=_}v=(s[u>>>24]<<24|s[f>>>16&255]<<16|s[l>>>8&255]<<8|s[255&h])^n[p++],g=(s[f>>>24]<<24|s[l>>>16&255]<<16|s[h>>>8&255]<<8|s[255&u])^n[p++],y=(s[l>>>24]<<24|s[h>>>16&255]<<16|s[u>>>8&255]<<8|s[255&f])^n[p++],_=(s[h>>>24]<<24|s[u>>>16&255]<<16|s[f>>>8&255]<<8|s[255&l])^n[p++];t[e]=v,t[e+1]=g,t[e+2]=y,t[e+3]=_},keySize:8});e.AES=r._createHelper(g)}(),function(){var e=t,n=e.lib,r=n.WordArray,i=n.BlockCipher,o=e.algo,a=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],s=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],c=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],u=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],f=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],l=o.DES=i.extend({_doReset:function(){for(var t=this._key,e=t.words,n=[],r=0;r<56;r++){var i=a[r]-1;n[r]=e[i>>>5]>>>31-i%32&1}for(var o=this._subKeys=[],u=0;u<16;u++){var f=o[u]=[],l=c[u];for(r=0;r<24;r++)f[r/6|0]|=n[(s[r]-1+l)%28]<<31-r%6,f[4+(r/6|0)]|=n[28+(s[r+24]-1+l)%28]<<31-r%6;f[0]=f[0]<<1|f[0]>>>31;for(r=1;r<7;r++)f[r]=f[r]>>>4*(r-1)+3;f[7]=f[7]<<5|f[7]>>>27}var h=this._invSubKeys=[];for(r=0;r<16;r++)h[r]=o[15-r]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._subKeys)},decryptBlock:function(t,e){this._doCryptBlock(t,e,this._invSubKeys)},_doCryptBlock:function(t,e,n){this._lBlock=t[e],this._rBlock=t[e+1],h.call(this,4,252645135),h.call(this,16,65535),p.call(this,2,858993459),p.call(this,8,16711935),h.call(this,1,1431655765);for(var r=0;r<16;r++){for(var i=n[r],o=this._lBlock,a=this._rBlock,s=0,c=0;c<8;c++)s|=u[c][((a^i[c])&f[c])>>>0];this._lBlock=a,this._rBlock=o^s}var l=this._lBlock;this._lBlock=this._rBlock,this._rBlock=l,h.call(this,1,1431655765),p.call(this,8,16711935),p.call(this,2,858993459),h.call(this,16,65535),h.call(this,4,252645135),t[e]=this._lBlock,t[e+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});function h(t,e){var n=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=n,this._lBlock^=n<<t}function p(t,e){var n=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=n,this._rBlock^=n<<t}e.DES=i._createHelper(l);var d=o.TripleDES=i.extend({_doReset:function(){var t=this._key,e=t.words;this._des1=l.createEncryptor(r.create(e.slice(0,2))),this._des2=l.createEncryptor(r.create(e.slice(2,4))),this._des3=l.createEncryptor(r.create(e.slice(4,6)))},encryptBlock:function(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)},decryptBlock:function(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)},keySize:6,ivSize:2,blockSize:2});e.TripleDES=i._createHelper(d)}(),function(){var e=t,n=e.lib,r=n.StreamCipher,i=e.algo,o=i.RC4=r.extend({_doReset:function(){for(var t=this._key,e=t.words,n=t.sigBytes,r=this._S=[],i=0;i<256;i++)r[i]=i;i=0;for(var o=0;i<256;i++){var a=i%n,s=e[a>>>2]>>>24-a%4*8&255;o=(o+r[i]+s)%256;var c=r[i];r[i]=r[o],r[o]=c}this._i=this._j=0},_doProcessBlock:function(t,e){t[e]^=a.call(this)},keySize:8,ivSize:0});function a(){for(var t=this._S,e=this._i,n=this._j,r=0,i=0;i<4;i++){e=(e+1)%256,n=(n+t[e])%256;var o=t[e];t[e]=t[n],t[n]=o,r|=t[(t[e]+t[n])%256]<<24-8*i}return this._i=e,this._j=n,r}e.RC4=r._createHelper(o);var s=i.RC4Drop=o.extend({cfg:o.cfg.extend({drop:192}),_doReset:function(){o._doReset.call(this);for(var t=this.cfg.drop;t>0;t--)a.call(this)}});e.RC4Drop=r._createHelper(s)}(),
/** @preserve
   * Counter block mode compatible with  Dr Brian Gladman fileenc.c
   * derived from CryptoJS.mode.CTR
   * Jan Hruby jhruby.web@gmail.com
   */
t.mode.CTRGladman=function(){var e=t.lib.BlockCipherMode.extend();function n(t){if(255===(t>>24&255)){var e=t>>16&255,n=t>>8&255,r=255&t;255===e?(e=0,255===n?(n=0,255===r?r=0:++r):++n):++e,t=0,t+=e<<16,t+=n<<8,t+=r}else t+=1<<24;return t}function r(t){return 0===(t[0]=n(t[0]))&&(t[1]=n(t[1])),t}var i=e.Encryptor=e.extend({processBlock:function(t,e){var n=this._cipher,i=n.blockSize,o=this._iv,a=this._counter;o&&(a=this._counter=o.slice(0),this._iv=void 0),r(a);var s=a.slice(0);n.encryptBlock(s,0);for(var c=0;c<i;c++)t[e+c]^=s[c]}});return e.Decryptor=i,e}(),function(){var e=t,n=e.lib,r=n.StreamCipher,i=e.algo,o=[],a=[],s=[],c=i.Rabbit=r.extend({_doReset:function(){for(var t=this._key.words,e=this.cfg.iv,n=0;n<4;n++)t[n]=16711935&(t[n]<<8|t[n]>>>24)|4278255360&(t[n]<<24|t[n]>>>8);var r=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],i=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];this._b=0;for(n=0;n<4;n++)u.call(this);for(n=0;n<8;n++)i[n]^=r[n+4&7];if(e){var o=e.words,a=o[0],s=o[1],c=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),f=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),l=c>>>16|4294901760&f,h=f<<16|65535&c;i[0]^=c,i[1]^=l,i[2]^=f,i[3]^=h,i[4]^=c,i[5]^=l,i[6]^=f,i[7]^=h;for(n=0;n<4;n++)u.call(this)}},_doProcessBlock:function(t,e){var n=this._X;u.call(this),o[0]=n[0]^n[5]>>>16^n[3]<<16,o[1]=n[2]^n[7]>>>16^n[5]<<16,o[2]=n[4]^n[1]>>>16^n[7]<<16,o[3]=n[6]^n[3]>>>16^n[1]<<16;for(var r=0;r<4;r++)o[r]=16711935&(o[r]<<8|o[r]>>>24)|4278255360&(o[r]<<24|o[r]>>>8),t[e+r]^=o[r]},blockSize:4,ivSize:2});function u(){for(var t=this._X,e=this._C,n=0;n<8;n++)a[n]=e[n];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<a[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<a[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<a[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<a[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<a[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<a[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<a[6]>>>0?1:0)|0,this._b=e[7]>>>0<a[7]>>>0?1:0;for(n=0;n<8;n++){var r=t[n]+e[n],i=65535&r,o=r>>>16,c=((i*i>>>17)+i*o>>>15)+o*o,u=((4294901760&r)*r|0)+((65535&r)*r|0);s[n]=c^u}t[0]=s[0]+(s[7]<<16|s[7]>>>16)+(s[6]<<16|s[6]>>>16)|0,t[1]=s[1]+(s[0]<<8|s[0]>>>24)+s[7]|0,t[2]=s[2]+(s[1]<<16|s[1]>>>16)+(s[0]<<16|s[0]>>>16)|0,t[3]=s[3]+(s[2]<<8|s[2]>>>24)+s[1]|0,t[4]=s[4]+(s[3]<<16|s[3]>>>16)+(s[2]<<16|s[2]>>>16)|0,t[5]=s[5]+(s[4]<<8|s[4]>>>24)+s[3]|0,t[6]=s[6]+(s[5]<<16|s[5]>>>16)+(s[4]<<16|s[4]>>>16)|0,t[7]=s[7]+(s[6]<<8|s[6]>>>24)+s[5]|0}e.Rabbit=r._createHelper(c)}(),t.mode.CTR=function(){var e=t.lib.BlockCipherMode.extend(),n=e.Encryptor=e.extend({processBlock:function(t,e){var n=this._cipher,r=n.blockSize,i=this._iv,o=this._counter;i&&(o=this._counter=i.slice(0),this._iv=void 0);var a=o.slice(0);n.encryptBlock(a,0),o[r-1]=o[r-1]+1|0;for(var s=0;s<r;s++)t[e+s]^=a[s]}});return e.Decryptor=n,e}(),function(){var e=t,n=e.lib,r=n.StreamCipher,i=e.algo,o=[],a=[],s=[],c=i.RabbitLegacy=r.extend({_doReset:function(){var t=this._key.words,e=this.cfg.iv,n=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],r=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];this._b=0;for(var i=0;i<4;i++)u.call(this);for(i=0;i<8;i++)r[i]^=n[i+4&7];if(e){var o=e.words,a=o[0],s=o[1],c=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),f=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),l=c>>>16|4294901760&f,h=f<<16|65535&c;r[0]^=c,r[1]^=l,r[2]^=f,r[3]^=h,r[4]^=c,r[5]^=l,r[6]^=f,r[7]^=h;for(i=0;i<4;i++)u.call(this)}},_doProcessBlock:function(t,e){var n=this._X;u.call(this),o[0]=n[0]^n[5]>>>16^n[3]<<16,o[1]=n[2]^n[7]>>>16^n[5]<<16,o[2]=n[4]^n[1]>>>16^n[7]<<16,o[3]=n[6]^n[3]>>>16^n[1]<<16;for(var r=0;r<4;r++)o[r]=16711935&(o[r]<<8|o[r]>>>24)|4278255360&(o[r]<<24|o[r]>>>8),t[e+r]^=o[r]},blockSize:4,ivSize:2});function u(){for(var t=this._X,e=this._C,n=0;n<8;n++)a[n]=e[n];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<a[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<a[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<a[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<a[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<a[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<a[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<a[6]>>>0?1:0)|0,this._b=e[7]>>>0<a[7]>>>0?1:0;for(n=0;n<8;n++){var r=t[n]+e[n],i=65535&r,o=r>>>16,c=((i*i>>>17)+i*o>>>15)+o*o,u=((4294901760&r)*r|0)+((65535&r)*r|0);s[n]=c^u}t[0]=s[0]+(s[7]<<16|s[7]>>>16)+(s[6]<<16|s[6]>>>16)|0,t[1]=s[1]+(s[0]<<8|s[0]>>>24)+s[7]|0,t[2]=s[2]+(s[1]<<16|s[1]>>>16)+(s[0]<<16|s[0]>>>16)|0,t[3]=s[3]+(s[2]<<8|s[2]>>>24)+s[1]|0,t[4]=s[4]+(s[3]<<16|s[3]>>>16)+(s[2]<<16|s[2]>>>16)|0,t[5]=s[5]+(s[4]<<8|s[4]>>>24)+s[3]|0,t[6]=s[6]+(s[5]<<16|s[5]>>>16)+(s[4]<<16|s[4]>>>16)|0,t[7]=s[7]+(s[6]<<8|s[6]>>>24)+s[5]|0}e.RabbitLegacy=r._createHelper(c)}(),t.pad.ZeroPadding={pad:function(t,e){var n=4*e;t.clamp(),t.sigBytes+=n-(t.sigBytes%n||n)},unpad:function(t){var e=t.words,n=t.sigBytes-1;while(!(e[n>>>2]>>>24-n%4*8&255))n--;t.sigBytes=n+1}},t})},9152:function(t,e){e.read=function(t,e,n,r,i){var o,a,s=8*i-r-1,c=(1<<s)-1,u=c>>1,f=-7,l=n?i-1:0,h=n?-1:1,p=t[e+l];for(l+=h,o=p&(1<<-f)-1,p>>=-f,f+=s;f>0;o=256*o+t[e+l],l+=h,f-=8);for(a=o&(1<<-f)-1,o>>=-f,f+=r;f>0;a=256*a+t[e+l],l+=h,f-=8);if(0===o)o=1-u;else{if(o===c)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,r),o-=u}return(p?-1:1)*a*Math.pow(2,o-r)},e.write=function(t,e,n,r,i,o){var a,s,c,u=8*o-i-1,f=(1<<u)-1,l=f>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,d=r?1:-1,v=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=f):(a=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),e+=a+l>=1?h/c:h*Math.pow(2,1-l),e*c>=2&&(a++,c/=2),a+l>=f?(s=0,a=f):a+l>=1?(s=(e*c-1)*Math.pow(2,i),a+=l):(s=e*Math.pow(2,l-1)*Math.pow(2,i),a=0));i>=8;t[n+p]=255&s,p+=d,s/=256,i-=8);for(a=a<<i|s,u+=i;u>0;t[n+p]=255&a,p+=d,a/=256,u-=8);t[n+p-d]|=128*v}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var l=e.version,h="https://tongji.dcloud.io/uni/stat",p="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,g=10,y="__DC_STAT_UUID",_="__DC_UUID_VALUE";function m(){var e="";if("n"===k()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=_}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,_)}}return e}var w=function(t){var e=Object.keys(t),n=e.sort(),r={},i="";for(var o in n)r[n[o]]=t[n[o]],i+=n[o]+"="+t[n[o]]+"&";return{sign:"",options:i.substr(0,i.length-1)}},b=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},x=function(){return parseInt((new Date).getTime()/1e3)},k=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},A=function(){var e="";return"wx"!==k()&&"qq"!==k()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},S=function(){return"n"===k()?plus.runtime.version:""},B=function(){var t=k(),e="";return"n"===t&&(e=plus.runtime.channel),e},O=function(e){var n=k(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},E="First__Visit__Time",C="Last__Visit__Time",$=function(){var e=t.getStorageSync(E),n=0;return e?n=e:(n=x(),t.setStorageSync(E,n),t.removeStorageSync(C)),n},T=function(){var e=t.getStorageSync(C),n=0;return n=e||"",t.setStorageSync(C,x()),n},P="__page__residence__time",D=0,R=0,I=function(){return D=x(),"n"===k()&&t.setStorageSync(P,x()),D},j=function(){return R=x(),"n"===k()&&(D=t.getStorageSync(P)),R-D},N="Total__Visit__Count",M=function(){var e=t.getStorageSync(N),n=1;return e&&(n=e,n++),t.setStorageSync(N,n),n},L=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},U=0,H=0,F=function(){var t=(new Date).getTime();return U=t,H=0,t},z=function(){var t=(new Date).getTime();return H=t,t},V=function(t){var e=0;if(0!==U&&(e=H-U),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},q=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===k()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},Y=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,i=t._query,o=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===k()?r.$mp&&r.$mp.page.is+o:r.$scope&&r.$scope.route+o||r.$mp&&r.$mp.page.route+o},W=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},G=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=n("3522").default,X=n("f5ba").default||n("f5ba"),J=t.getSystemInfoSync(),Z=function(){function e(){c(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:k(),mpn:A(),ak:X.appid,usv:l,v:S(),ch:B(),cn:"",pn:"",ct:"",t:x(),tt:"",p:"android"===J.platform?"a":"i",brand:J.brand||"",md:J.model,sv:J.system.replace(/(Android|iOS)\s/,""),mpsdk:J.SDKVersion||"",mpv:J.version||"",lang:J.language,pr:J.pixelRatio,ww:J.windowWidth,wh:J.windowHeight,sw:J.screenWidth,sh:J.screenHeight}}return f(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){z();var t=V("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,z();var n=V();F();var r=Y(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=Y(this),e=q();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return F(),this.__licationShow=!1,void(this._lastPageRoute=t);z(),this._lastPageRoute=t;var n=V("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}F()}},{key:"_pageHide",value:function(){if(!this.__licationHide){z();var t=V("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=x(),this.statData.sc=O(t.scene),this.statData.fvts=$(),this.statData.lvts=T(),this.statData.tvc=M(),"n"===k()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:x(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:x(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,i=void 0===r?"":r,o=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"===typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:x(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;X.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,i=x(),o=this._navigationBarTitle;e.ttn=o.page,e.ttpj=o.config,e.ttc=o.report;var a=this._reportingRequestData;if("n"===k()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===k()&&t.setStorageSync("__UNI__STAT__DATA",a),!(j()<g)||n){var s=this._reportingRequestData;"n"===k()&&(s=t.getStorageSync("__UNI__STAT__DATA")),I();var c=[],u=[],f=[],h=function(t){var e=s[t];e.forEach(function(e){var n=b(e);0===t?c.push(n):3===t?f.push(n):u.push(n)})};for(var p in s)h(p);c.push.apply(c,u.concat(f));var d={usv:l,t:i,requests:JSON.stringify(c)};this._reportingRequestData={},"n"===k()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==k()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:h,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=w(L(t)).options;e.src=p+"?"+n}},{key:"sendEvent",value:function(t,e){G(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return c(this,n),e=r(this,o(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),f(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),f(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,I(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,W(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,W(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:x(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=w;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,_=y&&y(y(P([])));_&&_!==r&&i.call(_,a)&&(g=_);var m=A.prototype=x.prototype=Object.create(g);k.prototype=m.constructor=A,A.constructor=k,A[c]=k.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,A):(t.__proto__=A,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},S(B.prototype),B.prototype[s]=function(){return this},f.AsyncIterator=B,f.async=function(t,e,n,r){var i=new B(w(t,e,n,r));return f.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},S(m),m[c]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;$(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),a=new T(r||[]);return o._invoke=O(t,n,a),o}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function x(){}function k(){}function A(){}function S(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function B(t){function e(n,r,o,a){var s=b(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function O(t,e,n){var r=l;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return D()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=b(t,e,n);if("normal"===c.type){if(r=n.done?d:h,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function E(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=b(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:D}}function D(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},a4b0:function(t,e,n){"use strict";(function(e,n){function r(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var n=parseInt(t/60);t%=60;var r=t;return[e,n,r].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function i(t){var n=new Date;console.log(e(n,t," at common\\util.js:83")),/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));var r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds()};for(var i in console.log(e(r," at common\\util.js:94")),r){var o=r[i]+"";new RegExp("(".concat(i,")")).test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?o:a(o)))}function a(t){return("00"+t).substr(t.length)}return t}function o(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}var a={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var n in this.UNITS)if(t>=this.UNITS[n]){e=Math.floor(t/this.UNITS[n])+n+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),n=Date.now()-e.getTime();if(n<this.UNITS["天"])return this.humanize(n);var r=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+r(e.getMonth()+1)+"/"+r(e.getDay())+"-"+r(e.getHours())+":"+r(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};function s(t,e){var n=e,r=plus.android.runtimeMainActivity(),i=plus.android.importClass("android.content.Context"),o=plus.android.importClass("android.app.Notification"),a=(plus.android.importClass("android.app.NotificationManager"),r.getSystemService(i.NOTIFICATION_SERVICE)),s=plus.android.importClass("android.app.Notification"),c=new s.Builder(r),u=plus.android.importClass("android.content.Intent"),f=plus.android.importClass("android.app.PendingIntent"),l=new u(r,r.getClass()),h=f.getActivity(r,0,l,f.FLAG_CANCEL_CURRENT),p=plus.android.importClass("android.R");c.setContentTitle("98影院"),c.setContentText(t),c.setSmallIcon(p.drawable.ic_notification_overlay),c.setTicker("98影院的最新资讯来了"),c.setContentIntent(h),c.setAutoCancel(!0),c.setDefaults(o.DEFAULT_ALL),c.setPriority(o.PRIORITY_DEFAULT),c.flags=s.FLAG_ONLY_ALERT_ONCE;var d=c.build();a.notify(n,d)}t.exports={formatTime:r,formatLocation:o,dateUtils:a,getNowTime:i,CreateNotification:s}}).call(this,n("0de9")["default"],n("6e42")["default"])},b639:function(t,e,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var r=n("1fb5"),i=n("9152"),o=n("e3db");function a(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"===typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(e){return!1}}function s(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function c(t,e){if(s()<e)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=u.prototype):(null===t&&(t=new u(e)),t.length=e),t}function u(t,e,n){if(!u.TYPED_ARRAY_SUPPORT&&!(this instanceof u))return new u(t,e,n);if("number"===typeof t){if("string"===typeof e)throw new Error("If encoding is specified then the first argument must be a string");return p(this,t)}return f(this,t,e,n)}function f(t,e,n,r){if("number"===typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&e instanceof ArrayBuffer?g(t,e,n,r):"string"===typeof e?d(t,e,n):y(t,e)}function l(t){if("number"!==typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function h(t,e,n,r){return l(e),e<=0?c(t,e):void 0!==n?"string"===typeof r?c(t,e).fill(n,r):c(t,e).fill(n):c(t,e)}function p(t,e){if(l(e),t=c(t,e<0?0:0|_(e)),!u.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function d(t,e,n){if("string"===typeof n&&""!==n||(n="utf8"),!u.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|w(e,n);t=c(t,r);var i=t.write(e,n);return i!==r&&(t=t.slice(0,i)),t}function v(t,e){var n=e.length<0?0:0|_(e.length);t=c(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function g(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");return e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r),u.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=u.prototype):t=v(t,e),t}function y(t,e){if(u.isBuffer(e)){var n=0|_(e.length);return t=c(t,n),0===t.length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!==typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!==typeof e.length||et(e.length)?c(t,0):v(t,e);if("Buffer"===e.type&&o(e.data))return v(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function _(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function m(t){return+t!=t&&(t=0),u.alloc(+t)}function w(t,e){if(u.isBuffer(t))return t.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!==typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return X(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Q(t).length;default:if(r)return X(t).length;e=(""+e).toLowerCase(),r=!0}}function b(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(n>>>=0,e>>>=0,n<=e)return"";t||(t="utf8");while(1)switch(t){case"hex":return N(this,e,n);case"utf8":case"utf-8":return P(this,e,n);case"ascii":return I(this,e,n);case"latin1":case"binary":return j(this,e,n);case"base64":return T(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return M(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function x(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function k(t,e,n,r,i){if(0===t.length)return-1;if("string"===typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"===typeof e&&(e=u.from(e,r)),u.isBuffer(e))return 0===e.length?-1:A(t,e,n,r,i);if("number"===typeof e)return e&=255,u.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):A(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function A(t,e,n,r,i){var o,a=1,s=t.length,c=e.length;if(void 0!==r&&(r=String(r).toLowerCase(),"ucs2"===r||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;a=2,s/=2,c/=2,n/=2}function u(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(i){var f=-1;for(o=n;o<s;o++)if(u(t,o)===u(e,-1===f?0:o-f)){if(-1===f&&(f=o),o-f+1===c)return f*a}else-1!==f&&(o-=o-f),f=-1}else for(n+c>s&&(n=s-c),o=n;o>=0;o--){for(var l=!0,h=0;h<c;h++)if(u(t,o+h)!==u(e,h)){l=!1;break}if(l)return o}return-1}function S(t,e,n,r){n=Number(n)||0;var i=t.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var o=e.length;if(o%2!==0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var a=0;a<r;++a){var s=parseInt(e.substr(2*a,2),16);if(isNaN(s))return a;t[n+a]=s}return a}function B(t,e,n,r){return tt(X(e,t.length-n),t,n,r)}function O(t,e,n,r){return tt(J(e),t,n,r)}function E(t,e,n,r){return O(t,e,n,r)}function C(t,e,n,r){return tt(Q(e),t,n,r)}function $(t,e,n,r){return tt(Z(e,t.length-n),t,n,r)}function T(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function P(t,e,n){n=Math.min(t.length,n);var r=[],i=e;while(i<n){var o,a,s,c,u=t[i],f=null,l=u>239?4:u>223?3:u>191?2:1;if(i+l<=n)switch(l){case 1:u<128&&(f=u);break;case 2:o=t[i+1],128===(192&o)&&(c=(31&u)<<6|63&o,c>127&&(f=c));break;case 3:o=t[i+1],a=t[i+2],128===(192&o)&&128===(192&a)&&(c=(15&u)<<12|(63&o)<<6|63&a,c>2047&&(c<55296||c>57343)&&(f=c));break;case 4:o=t[i+1],a=t[i+2],s=t[i+3],128===(192&o)&&128===(192&a)&&128===(192&s)&&(c=(15&u)<<18|(63&o)<<12|(63&a)<<6|63&s,c>65535&&c<1114112&&(f=c))}null===f?(f=65533,l=1):f>65535&&(f-=65536,r.push(f>>>10&1023|55296),f=56320|1023&f),r.push(f),i+=l}return R(r)}e.Buffer=u,e.SlowBuffer=m,e.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:a(),e.kMaxLength=s(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,e,n){return f(null,t,e,n)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,e,n){return h(null,t,e,n)},u.allocUnsafe=function(t){return p(null,t)},u.allocUnsafeSlow=function(t){return p(null,t)},u.isBuffer=function(t){return!(null==t||!t._isBuffer)},u.compare=function(t,e){if(!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=u.allocUnsafe(e),i=0;for(n=0;n<t.length;++n){var a=t[n];if(!u.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(r,i),i+=a.length}return r},u.byteLength=w,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)x(this,e,e+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)x(this,e,e+3),x(this,e+1,e+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)x(this,e,e+7),x(this,e+1,e+6),x(this,e+2,e+5),x(this,e+3,e+4);return this},u.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?P(this,0,t):b.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,e,n,r,i){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,i>>>=0,this===t)return 0;for(var o=i-r,a=n-e,s=Math.min(o,a),c=this.slice(r,i),f=t.slice(e,n),l=0;l<s;++l)if(c[l]!==f[l]){o=c[l],a=f[l];break}return o<a?-1:a<o?1:0},u.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},u.prototype.indexOf=function(t,e,n){return k(this,t,e,n,!0)},u.prototype.lastIndexOf=function(t,e,n){return k(this,t,e,n,!1)},u.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"===typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return S(this,t,e,n);case"utf8":case"utf-8":return B(this,t,e,n);case"ascii":return O(this,t,e,n);case"latin1":case"binary":return E(this,t,e,n);case"base64":return C(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $(this,t,e,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var D=4096;function R(t){var e=t.length;if(e<=D)return String.fromCharCode.apply(String,t);var n="",r=0;while(r<e)n+=String.fromCharCode.apply(String,t.slice(r,r+=D));return n}function I(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function j(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function N(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=e;o<n;++o)i+=K(t[o]);return i}function M(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function L(t,e,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function U(t,e,n,r,i,o){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function H(t,e,n,r){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-n,2);i<o;++i)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function F(t,e,n,r){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-n,4);i<o;++i)t[n+i]=e>>>8*(r?i:3-i)&255}function z(t,e,n,r,i,o){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function V(t,e,n,r,o){return o||z(t,e,n,4,3.4028234663852886e38,-3.4028234663852886e38),i.write(t,e,n,r,23,4),n+4}function q(t,e,n,r,o){return o||z(t,e,n,8,1.7976931348623157e308,-1.7976931348623157e308),i.write(t,e,n,r,52,8),n+8}u.prototype.slice=function(t,e){var n,r=this.length;if(t=~~t,e=void 0===e?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t),u.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=u.prototype;else{var i=e-t;n=new u(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+t]}return n},u.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||L(t,e,this.length);var r=this[t],i=1,o=0;while(++o<e&&(i*=256))r+=this[t+o]*i;return r},u.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||L(t,e,this.length);var r=this[t+--e],i=1;while(e>0&&(i*=256))r+=this[t+--e]*i;return r},u.prototype.readUInt8=function(t,e){return e||L(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,e){return e||L(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,e){return e||L(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,e){return e||L(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,e){return e||L(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||L(t,e,this.length);var r=this[t],i=1,o=0;while(++o<e&&(i*=256))r+=this[t+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},u.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||L(t,e,this.length);var r=e,i=1,o=this[t+--r];while(r>0&&(i*=256))o+=this[t+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},u.prototype.readInt8=function(t,e){return e||L(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){e||L(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(t,e){e||L(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(t,e){return e||L(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return e||L(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return e||L(t,4,this.length),i.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return e||L(t,4,this.length),i.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return e||L(t,8,this.length),i.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return e||L(t,8,this.length),i.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var i=Math.pow(2,8*n)-1;U(this,t,e,n,i,0)}var o=1,a=0;this[e]=255&t;while(++a<n&&(o*=256))this[e+a]=t/o&255;return e+n},u.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var i=Math.pow(2,8*n)-1;U(this,t,e,n,i,0)}var o=n-1,a=1;this[e+o]=255&t;while(--o>=0&&(a*=256))this[e+o]=t/a&255;return e+n},u.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},u.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):H(this,t,e,!0),e+2},u.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):H(this,t,e,!1),e+2},u.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):F(this,t,e,!0),e+4},u.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):F(this,t,e,!1),e+4},u.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1);U(this,t,e,n,i-1,-i)}var o=0,a=1,s=0;this[e]=255&t;while(++o<n&&(a*=256))t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/a>>0)-s&255;return e+n},u.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1);U(this,t,e,n,i-1,-i)}var o=n-1,a=1,s=0;this[e+o]=255&t;while(--o>=0&&(a*=256))t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/a>>0)-s&255;return e+n},u.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):H(this,t,e,!0),e+2},u.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):H(this,t,e,!1),e+2},u.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):F(this,t,e,!0),e+4},u.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||U(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):F(this,t,e,!1),e+4},u.prototype.writeFloatLE=function(t,e,n){return V(this,t,e,!0,n)},u.prototype.writeFloatBE=function(t,e,n){return V(this,t,e,!1,n)},u.prototype.writeDoubleLE=function(t,e,n){return q(this,t,e,!0,n)},u.prototype.writeDoubleBE=function(t,e,n){return q(this,t,e,!1,n)},u.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var i,o=r-n;if(this===t&&n<e&&e<r)for(i=o-1;i>=0;--i)t[i+e]=this[i+n];else if(o<1e3||!u.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+o),e);return o},u.prototype.fill=function(t,e,n,r){if("string"===typeof t){if("string"===typeof e?(r=e,e=0,n=this.length):"string"===typeof n&&(r=n,n=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==r&&"string"!==typeof r)throw new TypeError("encoding must be a string");if("string"===typeof r&&!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"===typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var o;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"===typeof t)for(o=e;o<n;++o)this[o]=t;else{var a=u.isBuffer(t)?t:X(new u(t,r).toString()),s=a.length;for(o=0;o<n-e;++o)this[o+e]=a[o%s]}return this};var Y=/[^+\/0-9A-Za-z-_]/g;function W(t){if(t=G(t).replace(Y,""),t.length<2)return"";while(t.length%4!==0)t+="=";return t}function G(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function K(t){return t<16?"0"+t.toString(16):t.toString(16)}function X(t,e){var n;e=e||1/0;for(var r=t.length,i=null,o=[],a=0;a<r;++a){if(n=t.charCodeAt(a),n>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(a+1===r){(e-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;o.push(n)}else if(n<2048){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function J(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}function Z(t,e){for(var n,r,i,o=[],a=0;a<t.length;++a){if((e-=2)<0)break;n=t.charCodeAt(a),r=n>>8,i=n%256,o.push(i),o.push(r)}return o}function Q(t){return r.toByteArray(W(t))}function tt(t,e,n,r){for(var i=0;i<r;++i){if(i+n>=e.length||i>=t.length)break;e[i+n]=t[i]}return i}function et(t){return t!==t}}).call(this,n("c8ba"))},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},e3db:function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},eee4:function(t,e,n){},f5ba:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__0B2570F"};e.default=r}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/uni-icon/uni-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icon/uni-icon.js';

define('components/uni-icon/uni-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icon/uni-icon"], {
  "02c4": function c4(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("d018"),
        i = e("4977");

    for (var c in i) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(c);
    }

    e("f554");
    var o = e("2877"),
        r = Object(o["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = r.exports;
  },
  4977: function _(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("8c96"),
        i = e.n(u);

    for (var c in u) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    t["default"] = i.a;
  },
  "8c96": function c96(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "uni-icon",
      props: {
        type: String,
        color: String,
        size: [Number, String]
      },
      computed: {
        fontSize: function fontSize() {
          return "".concat(this.size, "px");
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  },
  d018: function d018(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        i = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return i;
    });
  },
  f554: function f554(n, t, e) {
    "use strict";

    var u = e("ff18"),
        i = e.n(u);
    i.a;
  },
  ff18: function ff18(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icon/uni-icon-create-component', {
  'components/uni-icon/uni-icon-create-component': function componentsUniIconUniIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("02c4"));
  }
}, [['components/uni-icon/uni-icon-create-component']]]);
});
require('components/uni-icon/uni-icon.js');
__wxRoute = 'components/uni-nav-bar-diy/uni-nav-bar-diy';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-nav-bar-diy/uni-nav-bar-diy.js';

define('components/uni-nav-bar-diy/uni-nav-bar-diy.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-nav-bar-diy/uni-nav-bar-diy"], {
  "70a4": function a4(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("7d6e"),
        a = e.n(i);

    for (var o in i) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(o);
    }

    n["default"] = a.a;
  },
  "7d6e": function d6e(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var i = function i() {
        return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null, "a3db"));
      },
          a = function a() {
        return e.e("components/uni-icon/uni-icon").then(e.bind(null, "02c4"));
      },
          o = {
        components: {
          uniStatusBar: i,
          uniIcon: a
        },
        props: {
          title: {
            type: String,
            default: ""
          },
          leftText: {
            type: String,
            default: ""
          },
          rightText: {
            type: String,
            default: ""
          },
          leftIcon: {
            type: String,
            default: ""
          },
          rightIcon: {
            type: String,
            default: ""
          },
          fixed: {
            type: [Boolean, String],
            default: !1
          },
          color: {
            type: String,
            default: "#000000"
          },
          backgroundColor: {
            type: String,
            default: "#FFFFFF"
          },
          statusBar: {
            type: [Boolean, String],
            default: ""
          },
          shadow: {
            type: String,
            default: ""
          },
          barFalg: {
            type: Boolean,
            default: !1
          },
          barIndex: {
            type: Number,
            default: 1
          }
        },
        computed: {
          isFixed: function isFixed() {
            return "true" === String(this.fixed);
          },
          insertStatusBar: function insertStatusBar() {
            switch (String(this.statusBar)) {
              case "true":
                return !0;

              case "false":
                return !1;

              default:
                return this.isFixed;
            }
          },
          hasShadow: function hasShadow() {
            var t = this.backgroundColor;

            switch (String(this.shadow)) {
              case "true":
                return !0;

              case "false":
                return !1;

              default:
                return "transparent" !== t && t.indexOf("rgba") < 0;
            }
          }
        },
        methods: {
          onClickLeft: function onClickLeft() {
            this.$emit("clickLeft"), this.$emit("click-left");
          },
          onClickRight: function onClickRight() {
            this.$emit("clickRight"), this.$emit("click-right");
          },
          downLoad: function downLoad() {
            var n = plus.os.name.toUpperCase();
            if ("ANDROID" === n) t.navigateTo({
              url: "/pages/download/download",
              animationType: "slide-in-right"
            });else if ("IOS" === n) {
              var e = plus.ios.newObject("downloadViewController"),
                  i = plus.ios.importClass("UIApplication"),
                  a = i.sharedApplication(),
                  o = plus.ios.invoke(a, "delegate"),
                  r = plus.ios.invoke(o, "window"),
                  u = plus.ios.invoke(r, "rootViewController");
              plus.ios.invoke(u, "pushViewController:animated:", e, "YES");
            }
          },
          toSearch: function toSearch() {
            t.navigateTo({
              url: "/pages/search/search",
              animationType: "slide-out-bottom"
            });
          },
          playHistory: function playHistory() {
            t.navigateTo({
              url: "/pages/playHistory/playHistory",
              animationType: "slide-in-right"
            });
          },
          toAll: function toAll() {
            t.navigateTo({
              url: "/pages/allClass/allClass?id=" + this.barIndex,
              animationType: "slide-in-right"
            });
          }
        }
      };

      n.default = o;
    }).call(this, e("6e42")["default"]);
  },
  cb59: function cb59(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("f9a5"),
        a = e("70a4");

    for (var o in a) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(o);
    }

    e("cf04");
    var r = e("2877"),
        u = Object(r["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = u.exports;
  },
  cf04: function cf04(t, n, e) {
    "use strict";

    var i = e("ee26"),
        a = e.n(i);
    a.a;
  },
  ee26: function ee26(t, n, e) {},
  f9a5: function f9a5(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return a;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-nav-bar-diy/uni-nav-bar-diy-create-component', {
  'components/uni-nav-bar-diy/uni-nav-bar-diy-create-component': function componentsUniNavBarDiyUniNavBarDiyCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("cb59"));
  }
}, [['components/uni-nav-bar-diy/uni-nav-bar-diy-create-component']]]);
});
require('components/uni-nav-bar-diy/uni-nav-bar-diy.js');
__wxRoute = 'components/uni-status-bar/uni-status-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-status-bar/uni-status-bar.js';

define('components/uni-status-bar/uni-status-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-status-bar/uni-status-bar"], {
  4294: function _(t, n, u) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var e = {
      computed: {
        style: function style() {
          return "";
        }
      }
    };
    n.default = e;
  },
  6534: function _(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("4294"),
        a = u.n(e);

    for (var r in e) {
      "default" !== r && function (t) {
        u.d(n, t, function () {
          return e[t];
        });
      }(r);
    }

    n["default"] = a.a;
  },
  a2f5: function a2f5(t, n, u) {
    "use strict";

    var e = u("f914"),
        a = u.n(e);
    a.a;
  },
  a3db: function a3db(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("f4d3"),
        a = u("6534");

    for (var r in a) {
      "default" !== r && function (t) {
        u.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    u("a2f5");
    var f = u("2877"),
        c = Object(f["a"])(a["default"], e["a"], e["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  f4d3: function f4d3(t, n, u) {
    "use strict";

    var e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    u.d(n, "a", function () {
      return e;
    }), u.d(n, "b", function () {
      return a;
    });
  },
  f914: function f914(t, n, u) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-status-bar/uni-status-bar-create-component', {
  'components/uni-status-bar/uni-status-bar-create-component': function componentsUniStatusBarUniStatusBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a3db"));
  }
}, [['components/uni-status-bar/uni-status-bar-create-component']]]);
});
require('components/uni-status-bar/uni-status-bar.js');
__wxRoute = 'components/uni-swiper-dot/uni-swiper-dot';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-swiper-dot/uni-swiper-dot.js';

define('components/uni-swiper-dot/uni-swiper-dot.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-swiper-dot/uni-swiper-dot"], {
  "1be1": function be1(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("b565"),
        o = n("7eb8");

    for (var s in o) {
      "default" !== s && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(s);
    }

    n("48db");
    var u = n("2877"),
        d = Object(u["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = d.exports;
  },
  "48db": function db(t, e, n) {
    "use strict";

    var i = n("78d3"),
        o = n.n(i);
    o.a;
  },
  "78d3": function d3(t, e, n) {},
  "7eb8": function eb8(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("cf99"),
        o = n.n(i);

    for (var s in i) {
      "default" !== s && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(s);
    }

    e["default"] = o.a;
  },
  b565: function b565(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return o;
    });
  },
  cf99: function cf99(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var i = {
      name: "uni-swiper-dot",
      props: {
        info: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        current: {
          type: Number,
          default: function _default() {
            return 0;
          }
        },
        dotsStyles: {
          type: Object,
          default: function _default() {
            return {};
          }
        },
        mode: {
          type: String,
          default: "default"
        },
        field: {
          type: String,
          default: ""
        }
      },
      data: function data() {
        return {
          dots: {
            width: 4,
            height: 4,
            bottom: 6,
            color: "#fff",
            backgroundColor: "rgba(255, 255, 255, .3)",
            selectedBackgroundColor: "#FFF"
          }
        };
      },
      created: function created() {
        "indexes" === this.mode && (this.dots.width = 20, this.dots.height = 20), this.dots = Object.assign(this.dots, this.dotsStyles);
      },
      watch: {
        dotsStyles: function dotsStyles(t) {
          this.dots = Object.assign(this.dots, this.dotsStyles);
        },
        mode: function mode(t) {
          "indexes" === t ? (this.dots.width = 20, this.dots.height = 20) : (this.dots.width = 8, this.dots.height = 8);
        }
      }
    };
    e.default = i;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-swiper-dot/uni-swiper-dot-create-component', {
  'components/uni-swiper-dot/uni-swiper-dot-create-component': function componentsUniSwiperDotUniSwiperDotCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1be1"));
  }
}, [['components/uni-swiper-dot/uni-swiper-dot-create-component']]]);
});
require('components/uni-swiper-dot/uni-swiper-dot.js');
__wxRoute = 'components/wuc-tab/wuc-tab';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/wuc-tab/wuc-tab.js';

define('components/wuc-tab/wuc-tab.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/wuc-tab/wuc-tab"], {
  "234b": function b(t, e, n) {},
  3033: function _(t, e, n) {
    "use strict";

    var u = n("234b"),
        r = n.n(u);
    r.a;
  },
  5539: function _(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("e587"),
        r = n("7e78");

    for (var a in r) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(a);
    }

    n("3033");
    var c = n("2877"),
        i = Object(c["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = i.exports;
  },
  "7e78": function e78(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("9c0d"),
        r = n.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(a);
    }

    e["default"] = r.a;
  },
  "9c0d": function c0d(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      name: "wuc-tab",
      data: function data() {
        return {};
      },
      props: {
        tabList: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        tabCur: {
          type: Number,
          default: function _default() {
            return 0;
          }
        },
        tabClass: {
          type: String,
          default: function _default() {
            return "";
          }
        },
        tabStyle: {
          type: String,
          default: function _default() {
            return "";
          }
        },
        textFlex: {
          type: Boolean,
          default: function _default() {
            return !1;
          }
        },
        selectClass: {
          type: String,
          default: function _default() {
            return "text-blue";
          }
        }
      },
      methods: {
        tabSelect: function tabSelect(t, e) {
          if (this.currentTab === t) return !1;
          this.$emit("update:tabCur", t), this.$emit("change", t);
        }
      },
      computed: {
        scrollLeft: function scrollLeft() {
          return 60 * (this.tabCur - 1);
        }
      }
    };
    e.default = u;
  },
  e587: function e587(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/wuc-tab/wuc-tab-create-component', {
  'components/wuc-tab/wuc-tab-create-component': function componentsWucTabWucTabCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5539"));
  }
}, [['components/wuc-tab/wuc-tab-create-component']]]);
});
require('components/wuc-tab/wuc-tab.js');
__wxRoute = 'pages/discover/filmRanking/filmList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/discover/filmRanking/filmList.js';

define('pages/discover/filmRanking/filmList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/discover/filmRanking/filmList"], {
  1949: function _(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  "891f": function f(t, n, e) {
    "use strict";

    var u = e("e576"),
        a = e.n(u);
    a.a;
  },
  b66a: function b66a(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("1949"),
        a = e("dc1f");

    for (var f in a) {
      "default" !== f && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(f);
    }

    e("891f");
    var r = e("2877"),
        i = Object(r["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = i.exports;
  },
  dc1f: function dc1f(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("e35b"),
        a = e.n(u);

    for (var f in u) {
      "default" !== f && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(f);
    }

    n["default"] = a.a;
  },
  e35b: function e35b(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        props: {
          options: {
            type: Object,
            default: function _default(t) {
              return {};
            }
          }
        },
        methods: {
          watchTV: function watchTV(n) {
            t.navigateTo({
              url: "../../../pages/playPage/playPage?vodId=" + n
            });
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  e576: function e576(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/discover/filmRanking/filmList-create-component', {
  'pages/discover/filmRanking/filmList-create-component': function pagesDiscoverFilmRankingFilmListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b66a"));
  }
}, [['pages/discover/filmRanking/filmList-create-component']]]);
});
require('pages/discover/filmRanking/filmList.js');
__wxRoute = 'pages/discover/filmRanking/filmRanking';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/discover/filmRanking/filmRanking.js';

define('pages/discover/filmRanking/filmRanking.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/discover/filmRanking/filmRanking"], {
  "0058": function _(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("6141"),
        a = n.n(r);

    for (var i in r) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(i);
    }

    e["default"] = a.a;
  },
  6141: function _(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var r = a(n("a34a"));

      function a(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function i(t, e, n, r, a, i, u) {
        try {
          var s = t[i](u),
              c = s.value;
        } catch (f) {
          return void n(f);
        }

        s.done ? e(c) : Promise.resolve(c).then(r, a);
      }

      function u(t) {
        return function () {
          var e = this,
              n = arguments;
          return new Promise(function (r, a) {
            var u = t.apply(e, n);

            function s(t) {
              i(u, r, a, s, c, "next", t);
            }

            function c(t) {
              i(u, r, a, s, c, "throw", t);
            }

            s(void 0);
          });
        };
      }

      var s = function s() {
        return n.e("pages/discover/filmRanking/filmList").then(n.bind(null, "b66a"));
      },
          c = {
        components: {
          filmList: s
        },
        data: function data() {
          return {
            scrollLeft: 0,
            tabIndex: 0,
            pageNumberArry: [],
            newsitems: []
          };
        },
        props: {
          newsitemData: {
            type: Array,
            default: function _default(t) {
              return {};
            }
          },
          tabBars: {
            type: Array,
            default: function _default(t) {
              return {};
            }
          },
          baseline: {
            type: Boolean
          }
        },
        created: function created() {
          this.tempList = this.tabBars;
        },
        methods: {
          tapTab: function () {
            var t = u(r.default.mark(function t(e) {
              var n;
              return r.default.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (n = e.target.dataset.current, this.tabIndex !== n) {
                        t.next = 5;
                        break;
                      }

                      return t.abrupt("return", !1);

                    case 5:
                      this.tabIndex = n;

                    case 6:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            }));

            function e(e) {
              return t.apply(this, arguments);
            }

            return e;
          }(),
          changeTab: function () {
            var e = u(r.default.mark(function e(n) {
              var a, i, u, s, c, f, o, l, d;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (a = n.target.current, !this.isClickChange) {
                        e.next = 5;
                        break;
                      }

                      return this.tabIndex = a, this.isClickChange = !1, e.abrupt("return");

                    case 5:
                      return e.next = 7, this.getElSize("tab-bar");

                    case 7:
                      i = e.sent, u = i.scrollLeft, s = 0, c = 0;

                    case 11:
                      if (!(c < a)) {
                        e.next = 19;
                        break;
                      }

                      return e.next = 14, this.getElSize(this.tabBars[c].id);

                    case 14:
                      f = e.sent, s += f.width;

                    case 16:
                      c++, e.next = 11;
                      break;

                    case 19:
                      return o = t.getSystemInfoSync().windowWidth, e.next = 22, this.getElSize(this.tabBars[a].id);

                    case 22:
                      l = e.sent, d = l.width, s + d - u > o && (this.scrollLeft = s + d - o), s < u && (this.scrollLeft = s), this.isClickChange = !1, this.tabIndex = a;

                    case 28:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n(t) {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          getElSize: function getElSize(e) {
            return new Promise(function (n, r) {
              t.createSelectorQuery().select("#" + e).fields({
                size: !0,
                scrollOffset: !0
              }, function (t) {
                n(t);
              }).exec();
            });
          }
        }
      };

      e.default = c;
    }).call(this, n("6e42")["default"]);
  },
  8523: function _(t, e, n) {},
  "9a89": function a89(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("acfc"),
        a = n("0058");

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    n("b14f");
    var u = n("2877"),
        s = Object(u["a"])(a["default"], r["a"], r["b"], !1, null, null, null);
    e["default"] = s.exports;
  },
  acfc: function acfc(t, e, n) {
    "use strict";

    var r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return r;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  b14f: function b14f(t, e, n) {
    "use strict";

    var r = n("8523"),
        a = n.n(r);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/discover/filmRanking/filmRanking-create-component', {
  'pages/discover/filmRanking/filmRanking-create-component': function pagesDiscoverFilmRankingFilmRankingCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9a89"));
  }
}, [['pages/discover/filmRanking/filmRanking-create-component']]]);
});
require('pages/discover/filmRanking/filmRanking.js');
__wxRoute = 'pages/discover/topics/input_detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/discover/topics/input_detail.js';

define('pages/discover/topics/input_detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/discover/topics/input_detail"], {
  "04ea": function ea(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  "389d": function d(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("817d"),
        i = n.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(a);
    }

    e["default"] = i.a;
  },
  6057: function _(t, e, n) {},
  "817d": function d(t, e, n) {
    "use strict";

    (function (t, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var u = {
        data: function data() {
          return {
            inputValue: ""
          };
        },
        methods: {
          startRecognize: function startRecognize() {
            var e = {},
                n = this;
            e.engine = "iFly", n.inputValue = "", plus.speech.startRecognize(e, function (t) {
              n.inputValue += t;
            }, function (e) {
              console.log(t("语音识别失败：" + e.message, " at pages\\discover\\topics\\input_detail.vue:31"));
            });
          },
          sendMessge: function sendMessge() {
            var t = this;
            this.$store.state.isLogin ? "" == t.inputValue.trim() ? t.inputValue = "" : (this.$emit("sendMessage", {
              inputValue: t.inputValue
            }), t.inputValue = "") : n.navigateTo({
              url: "../../../pages/login/login"
            });
          }
        }
      };
      e.default = u;
    }).call(this, n("0de9")["default"], n("6e42")["default"]);
  },
  "8e75": function e75(t, e, n) {
    "use strict";

    var u = n("6057"),
        i = n.n(u);
    i.a;
  },
  ad2e: function ad2e(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("04ea"),
        i = n("389d");

    for (var a in i) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(a);
    }

    n("8e75");
    var s = n("2877"),
        o = Object(s["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = o.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/discover/topics/input_detail-create-component', {
  'pages/discover/topics/input_detail-create-component': function pagesDiscoverTopicsInput_detailCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ad2e"));
  }
}, [['pages/discover/topics/input_detail-create-component']]]);
});
require('pages/discover/topics/input_detail.js');
__wxRoute = 'pages/discover/topics/mediaList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/discover/topics/mediaList.js';

define('pages/discover/topics/mediaList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/discover/topics/mediaList"], {
  "2fb4": function fb4(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return o;
    });
  },
  6797: function _(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        props: {
          options: {
            type: Object,
            default: function _default(t) {
              return {};
            }
          }
        },
        methods: {
          close: function close(t) {
            this.$emit("close");
          },
          bindClick: function bindClick() {
            t.navigateTo({
              url: "../../../pages/discover/topics/topics_details?topicId=" + this.options.topicId
            });
          },
          loadMore: function loadMore(t) {}
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  "8c10": function c10(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("6797"),
        o = e.n(i);

    for (var u in i) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(u);
    }

    n["default"] = o.a;
  },
  9137: function _(t, n, e) {
    "use strict";

    var i = e("f85d"),
        o = e.n(i);
    o.a;
  },
  d365: function d365(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("2fb4"),
        o = e("8c10");

    for (var u in o) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(u);
    }

    e("9137");
    var c = e("2877"),
        a = Object(c["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = a.exports;
  },
  f85d: function f85d(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/discover/topics/mediaList-create-component', {
  'pages/discover/topics/mediaList-create-component': function pagesDiscoverTopicsMediaListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d365"));
  }
}, [['pages/discover/topics/mediaList-create-component']]]);
});
require('pages/discover/topics/mediaList.js');
__wxRoute = 'pages/discover/topics/topics';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/discover/topics/topics.js';

define('pages/discover/topics/topics.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/discover/topics/topics"], {
  "3e9d": function e9d(t, e, n) {
    "use strict";

    var u = n("8f5e"),
        r = n.n(u);
    r.a;
  },
  "8f5e": function f5e(t, e, n) {},
  "98d1": function d1(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;

    var u = function u() {
      return n.e("pages/discover/topics/mediaList").then(n.bind(null, "d365"));
    },
        r = {
      components: {
        mediaList: u
      },
      data: function data() {
        return {
          pageNumber: 1
        };
      },
      props: {
        newsitemData: {
          type: Array,
          default: function _default(t) {
            return {};
          }
        },
        baseline: {
          type: Boolean
        }
      },
      methods: {}
    };

    e.default = r;
  },
  b953: function b953(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("cd2c"),
        r = n("d373");

    for (var a in r) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(a);
    }

    n("3e9d");
    var i = n("2877"),
        c = Object(i["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = c.exports;
  },
  cd2c: function cd2c(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return r;
    });
  },
  d373: function d373(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("98d1"),
        r = n.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(a);
    }

    e["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/discover/topics/topics-create-component', {
  'pages/discover/topics/topics-create-component': function pagesDiscoverTopicsTopicsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b953"));
  }
}, [['pages/discover/topics/topics-create-component']]]);
});
require('pages/discover/topics/topics.js');
__wxRoute = 'pages/home/home/home-module';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/home/home-module.js';

define('pages/home/home/home-module.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/home/home/home-module"], {
  "6eca": function eca(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("bd5a"),
        r = e.n(i);

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    n["default"] = r.a;
  },
  "806c": function c(t, n, e) {},
  bd5a: function bd5a(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var i = function i() {
        return e.e("components/uni-swiper-dot/uni-swiper-dot").then(e.bind(null, "1be1"));
      },
          r = {
        data: function data() {
          return {
            currentDot: 0,
            currentSwiper: 0,
            tabIndex: 0,
            changeIndex: 1,
            mode: "long&nav",
            itemId: null,
            changeList: [],
            dotsStyles: {
              backgroundColor: "rgba(0, 0, 0,.3)",
              color: "#fff",
              selectedBackgroundColor: "rgba(255, 255, 255, .9)"
            }
          };
        },
        props: {
          autoplay: {
            type: Boolean,
            default: function _default() {
              return !0;
            }
          },
          hot: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          info: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          module: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          more: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          flag: {
            type: Boolean,
            default: function _default() {
              return !1;
            }
          },
          star: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          actor: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          indexTab: {
            type: Number,
            default: function _default() {
              return 0;
            }
          },
          isOne: {
            type: Boolean,
            default: function _default() {
              return !0;
            }
          }
        },
        watch: {
          info: function info(t, n) {
            t.length < n.length && this.currentDot > t.length - 1 && (this.currentDot = t.length - 1, this.currentSwiper = t.length - 1);
          },
          isOne: function isOne(t, n) {
            t || (this.tabIndex = 0);
          }
        },
        components: {
          uniSwiperDot: i
        },
        methods: {
          swiperChange: function swiperChange(t) {
            this.currentSwiper = t.detail.current;
          },
          dotChange: function dotChange(t) {
            this.currentDot = t.detail.current;
          },
          changeStar: function changeStar(t, n) {
            this.tabIndex = t, this.$emit("star", {
              index: t,
              id: n
            });
          },
          changeItems: function changeItems(n) {
            var e = this;
            if (this.changeIndex++, !(this.changeIndex <= 3)) return this.itemId = null, this.changeIndex = 1, void (this.changeList = []);
            this.itemId = n, t.request({
              url: this.websiteUrl + "/api/home/exchange",
              method: "GET",
              data: {
                typeId: this.indexTab,
                modleId: n,
                currPage: this.changeIndex
              },
              success: function success(t) {
                e.changeList = t.data;
              },
              fail: function fail() {},
              complete: function complete() {}
            });
          },
          navigateTo: function navigateTo(n, e) {
            t.navigateTo({
              url: "/pages/more/more?title=" + n + "&index=" + this.indexTab + "&id=" + e,
              animationType: "slide-in-right",
              animationDuration: 300
            });
          },
          movieTo: function movieTo(n) {
            var e = n.currentTarget.dataset.id;
            t.navigateTo({
              url: "/pages/playPage/playPage?vodId=" + e,
              animationType: "slide-in-right",
              animationDuration: 300
            });
          }
        }
      };

      n.default = r;
    }).call(this, e("6e42")["default"]);
  },
  d7ff: function d7ff(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return r;
    });
  },
  dcb3: function dcb3(t, n, e) {
    "use strict";

    var i = e("806c"),
        r = e.n(i);
    r.a;
  },
  e002: function e002(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("d7ff"),
        r = e("6eca");

    for (var a in r) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(a);
    }

    e("dcb3");
    var u = e("2877"),
        o = Object(u["a"])(r["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = o.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/home/home/home-module-create-component', {
  'pages/home/home/home-module-create-component': function pagesHomeHomeHomeModuleCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e002"));
  }
}, [['pages/home/home/home-module-create-component']]]);
});
require('pages/home/home/home-module.js');
__wxRoute = 'pages/playPage/chatinput';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/playPage/chatinput.js';

define('pages/playPage/chatinput.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/playPage/chatinput"], {
  "4f78": function f78(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("60ca"),
        u = e.n(i);

    for (var o in i) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(o);
    }

    n["default"] = u.a;
  },
  "60ca": function ca(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        data: function data() {
          return {
            inputValue: "",
            inputFocusStatus: !1,
            collectImage: !1
          };
        },
        props: {
          imageStatus: {
            type: Boolean
          }
        },
        methods: {
          inputFocus: function inputFocus() {
            this.inputFocusStatus = !0, this.$emit("inputFocusEvent");
          },
          inputBlur: function inputBlur() {
            var t = this;
            setTimeout(function () {
              t.inputFocusStatus = !1, t.inputValue = "", t.$emit("inputBlurEvent");
            }, 300);
          },
          sendMessge: function sendMessge() {
            var n = this;
            this.$store.state.isLogin ? "" == n.inputValue.trim() ? n.inputValue = "" : (this.$emit("sendComent", {
              inputValue: n.inputValue
            }), n.inputValue = "") : (this.$emit("toLoginEvent"), t.navigateTo({
              url: "../../pages/login/login"
            }));
          },
          toAddLike: function toAddLike() {
            this.$store.state.isLogin ? this.$emit("addMyLikeEvent") : (this.$emit("toLoginEvent"), t.navigateTo({
              url: "../../pages/login/login"
            }));
          },
          toDownLoad: function toDownLoad() {
            this.$emit("toDownLoadEvent");
          },
          toShare: function toShare() {
            this.$emit("toShareEvent");
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  8773: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("fe51"),
        u = e("4f78");

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    e("c7cb");
    var a = e("2877"),
        s = Object(a["a"])(u["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = s.exports;
  },
  c7cb: function c7cb(t, n, e) {
    "use strict";

    var i = e("e280"),
        u = e.n(i);
    u.a;
  },
  e280: function e280(t, n, e) {},
  fe51: function fe51(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/playPage/chatinput-create-component', {
  'pages/playPage/chatinput-create-component': function pagesPlayPageChatinputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8773"));
  }
}, [['pages/playPage/chatinput-create-component']]]);
});
require('pages/playPage/chatinput.js');
__wxRoute = 'pages/playPage/commentItem';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/playPage/commentItem.js';

define('pages/playPage/commentItem.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/playPage/commentItem"], {
  "2ea5": function ea5(t, e, n) {
    "use strict";

    var u;

    function o(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;

    var r = function r() {
      return n.e("pages/playPage/uni-popup").then(n.bind(null, "df83"));
    },
        a = (u = {
      created: function created() {
        this.options.commentObject && this.options.commentObject.length > 0 ? this.other_coment_status = !0 : this.other_coment_status = !1;
      },
      components: {
        uniPopup: r
      },
      methods: {
        checkOtherContent: function checkOtherContent() {
          this.$emit("checkOtherContent");
        }
      },
      data: function data() {
        return {
          other_coment_status: !1,
          type: "",
          imageHead: "../../../static/140.png"
        };
      }
    }, o(u, "created", function () {
      this.imageHead = this.options.userPortrait;
    }), o(u, "props", {
      options: {
        type: Object,
        default: function _default(t) {
          return {};
        }
      }
    }), u);

    e.default = a;
  },
  3057: function _(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("9100"),
        o = n("f6bd");

    for (var r in o) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(r);
    }

    n("34c0");
    var a = n("2877"),
        i = Object(a["a"])(o["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = i.exports;
  },
  "34c0": function c0(t, e, n) {
    "use strict";

    var u = n("b31d"),
        o = n.n(u);
    o.a;
  },
  9100: function _(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return o;
    });
  },
  b31d: function b31d(t, e, n) {},
  f6bd: function f6bd(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("2ea5"),
        o = n.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(r);
    }

    e["default"] = o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/playPage/commentItem-create-component', {
  'pages/playPage/commentItem-create-component': function pagesPlayPageCommentItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3057"));
  }
}, [['pages/playPage/commentItem-create-component']]]);
});
require('pages/playPage/commentItem.js');
__wxRoute = 'pages/playPage/share';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/playPage/share.js';

define('pages/playPage/share.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/playPage/share"], {
  "1f43": function f43(e, t, a) {
    "use strict";

    a.r(t);
    var s = a("8e0e"),
        n = a("f64a");

    for (var i in n) {
      "default" !== i && function (e) {
        a.d(t, e, function () {
          return n[e];
        });
      }(i);
    }

    a("8173");
    var o = a("2877"),
        c = Object(o["a"])(n["default"], s["a"], s["b"], !1, null, null, null);
    t["default"] = c.exports;
  },
  "6de0": function de0(e, t, a) {},
  "6e94": function e94(e, t, a) {
    "use strict";

    (function (e, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var s = {
        data: function data() {
          return {
            bottomData: [{
              text: "QQ好友",
              icon: "../../static/sharemenu/qq.png",
              name: "qq"
            }, {
              text: "微信好友",
              icon: "../../static/sharemenu/wx.png",
              name: "wx"
            }, {
              text: "微信朋友圈",
              icon: "../../static/sharemenu/pyq.png",
              name: "wx"
            }, {
              text: "复制链接",
              icon: "../../static/sharemenu/copy.png",
              name: "more"
            }, {}]
          };
        },
        methods: {
          togglePopup: function togglePopup() {
            this.$emit("togglePopupEvent");
          },
          toShare: function toShare(t) {
            var s = this,
                n = this.$store.state.isLogin;
            if (n) switch (Number(t.currentTarget.id)) {
              case 0:
                e.share({
                  provider: "qq",
                  type: 1,
                  href: "http://47.98.171.179:8080/download_page/download.html",
                  title: '98影院，随时随地抢"鲜"看！',
                  summary: "精彩大片抢先看",
                  success: function success(e) {
                    s.$emit("successShareEvent"), console.log(a("success:" + JSON.stringify(e), " at pages\\playPage\\share.vue:71"));
                  },
                  fail: function fail(e) {
                    s.$emit("successShareEvent"), console.log(a("success:" + JSON.stringify(e), " at pages\\playPage\\share.vue:75"));
                  }
                });
                break;

              case 1:
                e.share({
                  provider: "weixin",
                  scene: "WXSceneSession",
                  type: 0,
                  href: "http://47.98.171.179:8080/download_page/download.html",
                  title: '98影院，随时随地抢"鲜"看！',
                  summary: "精彩大片抢先看",
                  imageUrl: "../../static/98Code.png",
                  success: function success(e) {
                    s.$emit("successShareEvent"), console.log(a("success:" + JSON.stringify(e), " at pages\\playPage\\share.vue:90"));
                  },
                  fail: function fail(e) {
                    s.$emit("successShareEvent"), console.log(a("success:" + JSON.stringify(e), " at pages\\playPage\\share.vue:94"));
                  }
                });
                break;

              case 2:
                e.share({
                  provider: "weixin",
                  scene: "WXSenceTimeline",
                  type: 0,
                  href: "http://47.98.171.179:8080/download_page/download.html",
                  title: '98影院，随时随地抢"鲜"看！',
                  summary: "精彩大片抢先看",
                  imageUrl: "../../static/98Code.png",
                  success: function success(e) {
                    s.$emit("successShareEvent"), console.log(a("success:" + JSON.stringify(e), " at pages\\playPage\\share.vue:111"));
                  },
                  fail: function fail(e) {
                    s.$emit("successShareEvent"), console.log(a("success:" + JSON.stringify(e), " at pages\\playPage\\share.vue:115"));
                  }
                });
                break;

              case 3:
                e.setClipboardData({
                  data: "http://47.98.171.179:8080/download_page/download.html",
                  complete: function complete() {
                    e.showToast({
                      title: "已复制到剪贴板"
                    });
                  }
                });
                break;
            } else e.navigateTo({
              url: "/pages/login/login",
              animationType: "slide-in-top"
            });
          }
        }
      };
      t.default = s;
    }).call(this, a("6e42")["default"], a("0de9")["default"]);
  },
  8173: function _(e, t, a) {
    "use strict";

    var s = a("6de0"),
        n = a.n(s);
    n.a;
  },
  "8e0e": function e0e(e, t, a) {
    "use strict";

    var s = function s() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        n = [];

    a.d(t, "a", function () {
      return s;
    }), a.d(t, "b", function () {
      return n;
    });
  },
  f64a: function f64a(e, t, a) {
    "use strict";

    a.r(t);
    var s = a("6e94"),
        n = a.n(s);

    for (var i in s) {
      "default" !== i && function (e) {
        a.d(t, e, function () {
          return s[e];
        });
      }(i);
    }

    t["default"] = n.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/playPage/share-create-component', {
  'pages/playPage/share-create-component': function pagesPlayPageShareCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1f43"));
  }
}, [['pages/playPage/share-create-component']]]);
});
require('pages/playPage/share.js');
__wxRoute = 'pages/playPage/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/playPage/uni-popup.js';

define('pages/playPage/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/playPage/uni-popup"], {
  "265a": function a(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var o = {
      name: "UniPopup",
      props: {
        shareStatus: {
          type: Boolean,
          default: !1
        },
        show: {
          type: Boolean,
          default: !1
        },
        position: {
          type: String,
          default: "middle"
        },
        mode: {
          type: String,
          default: "insert"
        },
        msg: {
          type: String,
          default: ""
        },
        h5Top: {
          type: Boolean,
          default: !1
        },
        buttonMode: {
          type: String,
          default: "bottom"
        }
      },
      data: function data() {
        return {
          offsetTop: 0
        };
      },
      watch: {
        h5Top: function h5Top(t) {
          this.offsetTop = t ? 44 : 0;
        }
      },
      created: function created() {
        var t = 0;
        this.offsetTop = t;
      },
      methods: {
        hide: function hide() {
          "insert" === this.mode && "middle" === this.position || this.$emit("hidePopup");
        },
        closeMask: function closeMask() {
          "insert" === this.mode && this.$emit("hidePopup");
        },
        moveHandle: function moveHandle() {}
      }
    };
    e.default = o;
  },
  2681: function _(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  "2f6b": function f6b(t, e, n) {},
  "7cba": function cba(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("265a"),
        i = n.n(o);

    for (var u in o) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(u);
    }

    e["default"] = i.a;
  },
  b7cb: function b7cb(t, e, n) {
    "use strict";

    var o = n("2f6b"),
        i = n.n(o);
    i.a;
  },
  df83: function df83(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("2681"),
        i = n("7cba");

    for (var u in i) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(u);
    }

    n("b7cb");
    var a = n("2877"),
        f = Object(a["a"])(i["default"], o["a"], o["b"], !1, null, null, null);
    e["default"] = f.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/playPage/uni-popup-create-component', {
  'pages/playPage/uni-popup-create-component': function pagesPlayPageUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("df83"));
  }
}, [['pages/playPage/uni-popup-create-component']]]);
});
require('pages/playPage/uni-popup.js');
__wxRoute = 'pages/task/taskItem';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/task/taskItem.js';

define('pages/task/taskItem.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/task/taskItem"], {
  "0ad8": function ad8(t, s, e) {
    "use strict";

    var i = function i() {
      var t = this,
          s = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(s, "a", function () {
      return i;
    }), e.d(s, "b", function () {
      return a;
    });
  },
  "4b2c": function b2c(t, s, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(s, "__esModule", {
        value: !0
      }), s.default = void 0;
      var e = {
        props: {
          options: {
            type: Object,
            default: function _default(t) {
              return {};
            }
          },
          fromPage: {
            type: Number
          }
        },
        methods: {
          tapTab: function tapTab(s) {
            var e = this;

            if (1 === s) {
              if (1 == this.options.complete) return;
              var i = "";
              this.$store.state.userInfo.userId && (i = this.$store.state.userInfo.userId), this.$store.state.isLogin ? t.request({
                url: this.websiteUrl + "/api/task/everydayTask/" + this.options.taskId,
                method: "POST",
                header: {
                  Authorization: this.$store.state.userInfo.loginToken
                },
                data: {
                  userId: i
                },
                success: function success(s) {
                  0 == s.data.status ? (1 == s.data.sign ? e.isActive = !0 : e.isActive = !1, e.options.complete = s.data.sign, e.taskOperDesc = s.data.taskOperDesc, e.$emit("changeData", {
                    userPoints: s.data.userPoints,
                    coutinueMark: s.data.coutinueMark
                  })) : 1001 == s.data.status && t.navigateTo({
                    url: "../../../pages/login/login"
                  });
                }
              }) : t.navigateTo({
                url: "../../../pages/login/login"
              });
            } else if (2 === s) t.switchTab({
              url: "../../../pages/tarbar/share/share"
            });else if (3 === s) {
              if (1 == this.options.complete) return;
              t.switchTab({
                url: "../../../pages/tarbar/discover/discover"
              });
            } else if (0 === s) {
              if (1 == this.options.complete) return;
              if (!this.$store.state.isLogin) return void t.navigateTo({
                url: "/pages/login/login",
                animationType: "slide-in-bottom"
              });
              var a = this.options.taskId,
                  n = this.options.luck.toString(),
                  o = this.$store.state.userInfo.userId,
                  r = this.$store.state.userInfo.loginToken;
              3 == this.options.type ? this.$emit("exchange", {
                status: this.options.type
              }) : t.request({
                url: this.websiteUrl + "/api/exchange/download",
                header: {
                  Authorization: r
                },
                method: "POST",
                data: {
                  userId: o,
                  exchangeId: a,
                  luck: n
                },
                success: function success(t) {
                  var s = t.data.status;
                  e.$emit("exchange", {
                    status: s
                  });
                },
                fail: function fail() {},
                complete: function complete() {}
              });
            }
          },
          copyLucknum: function copyLucknum(s) {
            var e = s.target.dataset.num;
            t.setClipboardData({
              data: e,
              success: function success() {
                t.showToast({
                  title: "复制成功",
                  mask: !0
                }), setTimeout(function () {
                  t.hideToast();
                }, 2e3);
              }
            });
          }
        },
        watch: {
          options: function options(t, s) {
            t.taskOperDesc != s.taskOperDesc && (this.taskOperDesc = t.taskOperDesc), 1 == t.complete ? this.isActive = !0 : this.isActive = !1, 1 == this.fromPage ? this.image_src = "../../../static/taskItem" + t.taskId + ".png" : t.luck ? this.image_src = "../../static/taskItem1" + t.taskId + ".png" : this.image_src = "../../static/taskItem2" + t.type + ".png";
          }
        },
        data: function data() {
          return {
            image_src: "",
            isActive: !0,
            taskOperDesc: ""
          };
        },
        created: function created() {
          1 == this.fromPage ? this.image_src = "../../../static/taskItem" + this.options.taskId + ".png" : this.options.luck ? this.image_src = "../../static/taskItem1" + this.options.taskId + ".png" : this.image_src = "../../static/taskItem2" + this.options.type + ".png", 1 == this.options.complete ? this.isActive = !0 : this.isActive = !1, this.taskOperDesc = this.options.taskOperDesc;
        }
      };
      s.default = e;
    }).call(this, e("6e42")["default"]);
  },
  "5bd0": function bd0(t, s, e) {
    "use strict";

    e.r(s);
    var i = e("0ad8"),
        a = e("621d");

    for (var n in a) {
      "default" !== n && function (t) {
        e.d(s, t, function () {
          return a[t];
        });
      }(n);
    }

    e("6137");
    var o = e("2877"),
        r = Object(o["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
    s["default"] = r.exports;
  },
  6137: function _(t, s, e) {
    "use strict";

    var i = e("9a45"),
        a = e.n(i);
    a.a;
  },
  "621d": function d(t, s, e) {
    "use strict";

    e.r(s);
    var i = e("4b2c"),
        a = e.n(i);

    for (var n in i) {
      "default" !== n && function (t) {
        e.d(s, t, function () {
          return i[t];
        });
      }(n);
    }

    s["default"] = a.a;
  },
  "9a45": function a45(t, s, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/task/taskItem-create-component', {
  'pages/task/taskItem-create-component': function pagesTaskTaskItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5bd0"));
  }
}, [['pages/task/taskItem-create-component']]]);
});
require('pages/task/taskItem.js');

__wxRoute = 'pages/tarbar/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tarbar/home/home.js';

define('pages/tarbar/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tarbar/home/home"],{"3ceb":function(t,e,a){"use strict";(function(t){a("eee4"),a("921b");o(a("66fd"));var e=o(a("42ef"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"42ef":function(t,e,a){"use strict";a.r(e);var o=a("909a"),r=a("e035");for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);a("4ad1");var i=a("2877"),s=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},"4ad1":function(t,e,a){"use strict";var o=a("74d0"),r=a.n(o);r.a},"74d0":function(t,e,a){},"909a":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return r})},"9a31":function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){return a.e("components/wuc-tab/wuc-tab").then(a.bind(null,"5539"))},n=function(){return a.e("components/uni-nav-bar-diy/uni-nav-bar-diy").then(a.bind(null,"cb59"))},i=function(){return a.e("pages/home/home/home-module").then(a.bind(null,"e002"))},s={data:function(){return{autoplay:!1,tabList:[],info:[],nums:0,module:[],moreArray:[],star:[],actor:[],hotMovie:[],moreFlag:!1,placeholder:"",loadMoreText:"加载中...",showLoadMore:!1,showFalg:!0,title:"",barFalg:!1}},methods:{tabChange:function(e){var a=this;this.barFalg=0!==e,this.$store.commit("changeTar",e),t.pageScrollTo({scrollTop:0,duration:0}),t.request({url:this.websiteUrl+"/api/home/title",method:"GET",data:{typeId:e},success:function(t){a.selectArray=t.data,a.info=a.selectArray.image,a.module=a.selectArray.modle,a.title=a.selectArray.searchTitle,a.selectArray.starMovie?a.star=a.selectArray.starMovie:a.star=[],a.selectArray.star?a.actor=a.selectArray.star:a.actor=[],a.selectArray.hotMovie?a.hotMovie=a.selectArray.hotMovie:a.hotMovie=[],a.nums=0,a.moreArray=[],a.moreFlag=!1,a.showFalg=!0},fail:function(){},complete:function(){}})},setDate:function(){var e=this,a=this.$store.state.deviceId;t.request({url:this.websiteUrl+"/api/home",method:"GET",data:{typeId:0,equipmentId:a},success:function(t){e.tabList=t.data.tablist,e.info=e.tabList[e.TabCur].image,e.module=e.tabList[e.TabCur].module,e.title=e.tabList[e.TabCur].searchTitle,e.tabList[e.TabCur].star?e.actor=e.tabList[e.TabCur].star:e.actor=[],e.tabList[e.TabCur].starMovie?e.star=e.tabList[e.TabCur].starMovie:e.star=[],e.tabList[e.TabCur].hotMovie?e.hotMovie=e.tabList[e.TabCur].hotMovie:e.hotMovie=[]},fail:function(){},complete:function(){}})},moreData:function(){var e=this;t.request({url:this.websiteUrl+"/api/home/reflesh",method:"GET",data:{typeId:this.$store.state.TarCur,currPage:this.nums},success:function(t){if(t.data.length>0){for(var a=[],o=0;o<t.data.length;o++)a.push(t.data[o]);e.moreArray=e.moreArray.concat(a),e.moreFlag=!0,e.nums++}else e.showFalg=!1},fail:function(){},complete:function(){}})},starChange:function(e){var a=this;t.request({url:this.websiteUrl+"/api/home/star",method:"GET",data:{actorId:e.id,currPage:e.index},success:function(t){a.star=t.data},fail:function(){},complete:function(){}})}},components:{WucTab:r,uniNavBar:n,homeModule:i},watch:{TabCur:function(t,e){this.tabChange(t)}},computed:{TabCur:{get:function(){return this.$store.state.TarCur},set:function(t){this.$store.commit("changeTar",t)}}},onLoad:function(){this.setDate()},onUnload:function(){this.data=[],this.showLoadMore=!1,this.showFalg=!0,this.moreFlag=!1,this.nums=0,this.autoplay=!1},onShow:function(){this.autoplay=!0},onHide:function(){this.autoplay=!1},onReachBottom:function(){var t=this;console.log(o("onReachBottom"," at pages\\tarbar\\home\\home.vue:237")),this.showFalg?(this.showLoadMore=!0,this.loadMoreText="加载中...",setTimeout(function(){t.moreData()},300)):this.loadMoreText="我是有底线的!"},onPullDownRefresh:function(){console.log(o("onPullDownRefresh"," at pages\\tarbar\\home\\home.vue:249")),this.initData()}};e.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},e035:function(t,e,a){"use strict";a.r(e);var o=a("9a31"),r=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);e["default"]=r.a}},[["3ceb","common/runtime","common/vendor"]]]);
});
require('pages/tarbar/home/home.js');
__wxRoute = 'pages/tarbar/discover/discover';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tarbar/discover/discover.js';

define('pages/tarbar/discover/discover.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tarbar/discover/discover"],{"0acb":function(t,c,n){"use strict";var s=n("fd5e"),e=n.n(s);e.a},"11f4":function(t,c,n){"use strict";n.r(c);var s=n("e13e"),e=n("a0d8");for(var m in e)"default"!==m&&function(t){n.d(c,t,function(){return e[t]})}(m);n("0acb");var o=n("2877"),h=Object(o["a"])(e["default"],s["a"],s["b"],!1,null,null,null);c["default"]=h.exports},"3b79":function(t,c,n){"use strict";(function(t){n("eee4"),n("921b");s(n("66fd"));var c=s(n("11f4"));function s(t){return t&&t.__esModule?t:{default:t}}t(c.default)}).call(this,n("6e42")["createPage"])},"448a":function(t,c,n){"use strict";(function(t,s){Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=m(n("a34a"));function m(t){return t&&t.__esModule?t:{default:t}}function o(t,c,n,s,e,m,o){try{var h=t[m](o),p=h.value}catch(a){return void n(a)}h.done?c(p):Promise.resolve(p).then(s,e)}function h(t){return function(){var c=this,n=arguments;return new Promise(function(s,e){var m=t.apply(c,n);function h(t){o(m,s,e,h,p,"next",t)}function p(t){o(m,s,e,h,p,"throw",t)}h(void 0)})}}var p=function(){return n.e("pages/discover/topics/topics").then(n.bind(null,"b953"))},a=function(){return n.e("pages/discover/filmRanking/filmRanking").then(n.bind(null,"9a89"))},r={components:{topics:p,filmRanking:a},data:function(){return{scrollLeft:0,isClickChange:!1,tabIndex:0,newsitems:[],topicBaseLine:!1,rankingBaseLine:!1,tabBars:[{name:"热门专题",id:"guanzhu"},{name:"观影排行",id:"tuijian"}],tabBars2:[{typeName:"电影",typeId:"1"},{typeName:"连续剧",typeId:"2"}],tp1:[],tp2:[{data:[{vodArea:"美国",vodId:"2088",vodDirector:"本·斯蒂勒",vodPlayUrl:"HD高清$https://cn1.343480.com/20190701/5pXIOV5r/index.m3u8$$$HD高清$https://cn1.343480.com/share/5GZm4YpRm1G7I4z4",typeName:"电影",vodName:"白日梦想家",vodPic:"https://img.398zy.com/upload/vod/2019-07-02/15620677324.jpg",vodYear:"2013",vodActor:"本·斯蒂勒,克里斯汀·韦格,亚当·斯科特,西恩·潘"},{vodArea:"英国",vodId:"3507",vodDirector:"Mark,McQueen",vodPlayUrl:"HD高清$https://cn2.343480.com/20190708/gBkzdPvD/index.m3u8$$$HD高清$https://cn2.343480.com/share/FsJtfAdezkzLgnnQ",typeName:"电影",vodName:"魔鬼游乐场",vodPic:"https://img.398zy.com/upload/vod/2019-07-08/156256492014.jpg",vodYear:"2010",vodActor:"Danny,Dyer,Shane,Taylor,Craig,Fairbrass,Daniela,Denby-Ashe"},{vodArea:"中国大陆",vodId:"4239",vodDirector:"李遥波",vodPlayUrl:"HD高清$https://cn1.343480.com/20190711/LNEP53kM/index.m3u8$$$HD高清$https://cn1.343480.com/share/iA4Uxg6BvZAPpNB7",typeName:"电影",vodName:"总裁在上7：遥远的她",vodPic:"https://img.398zy.com/upload/vod/2019-07-11/201907111562780907.png",vodYear:"2017",vodActor:"朱圣祎,翁虹,潘子剑,叶小开"},{vodArea:"中国大陆",vodId:"4691",vodDirector:"丁亚",vodPlayUrl:"HD高清$https://cn2.343480.com/20190712/aaWFwqrl/index.m3u8$$$HD高清$https://cn2.343480.com/share/w7yiawrFmzjybf4K",typeName:"电影",vodName:"外星人来了",vodPic:"https://img.398zy.com/upload/vod/2019-07-12/201907121562878892.png",vodYear:"2017",vodActor:"谢昀杉,林晨,李健仁,蓝烯"},{vodArea:"韩国",vodId:"1128",vodDirector:"金民锡",vodPlayUrl:"HD高清$https://cn1.343480.com/20190627/xCxCaLZA/index.m3u8$$$HD高清$https://cn1.343480.com/share/Tr87fOw2HssXAoFI",typeName:"电影",vodName:"超能力者",vodPic:"https://img.398zy.com/upload/vod/2019-06-27/15616273753.jpg",vodYear:"2010",vodActor:"姜栋元,高修,郑恩彩"}]},{data:[{vodArea:"泰国",vodId:"2765",vodDirector:"Daeng,Burapa",vodPlayUrl:"第01集$https://cn2.343480.com/20190705/0zBzoOTV/index.m3u8#第02集$https://cn2.343480.com/20190705/8dcwi5Bn/index.m3u8#第03集$https://cn2.343480.com/20190705/WpeRKdmG/index.m3u8#第04集$https://cn2.343480.com/20190705/oZKJwXc3/index.m3u8#第05集$https://cn2.343480.com/20190705/Ozrvjsz1/index.m3u8#第06集$https://cn2.343480.com/20190705/O8PA6puD/index.m3u8#第07集$https://cn2.343480.com/20190705/hE938TMG/index.m3u8#第08集$https://cn2.343480.com/20190705/ooK9x52H/index.m3u8#第09集$https://cn2.343480.com/20190705/psskUB5x/index.m3u8#第10集$https://cn2.343480.com/20190705/DKS4rARf/index.m3u8#第11集$https://cn2.343480.com/20190705/XJcdGo7k/index.m3u8#第12集$https://cn2.343480.com/20190705/qjZSQJAN/index.m3u8#第13集$https://cn2.343480.com/20190705/obacaqfD/index.m3u8#第14集$https://cn2.343480.com/20190705/SRE54ybL/index.m3u8#第15集$https://cn2.343480.com/20190705/4qpWK5HA/index.m3u8#第16集$https://cn2.343480.com/20190705/ZeEf3Ka5/index.m3u8#第17集$https://cn2.343480.com/20190705/ENCHHaF7/index.m3u8#第18集$https://cn2.343480.com/20190705/mafOM8Mr/index.m3u8#第19集$https://cn2.343480.com/20190705/o9OsYP0I/index.m3u8#第20集$https://cn2.343480.com/20190705/DII7WKN1/index.m3u8#第21集$https://cn2.343480.com/20190705/BBz2yPnZ/index.m3u8#第22集$https://cn2.343480.com/20190705/6mbj3YZy/index.m3u8#第23集$https://cn2.343480.com/20190705/SHzlN4e8/index.m3u8#第24集$https://cn2.343480.com/20190705/VBdokq8i/index.m3u8#第25集$https://cn2.343480.com/20190705/s8PKIJVJ/index.m3u8#第26集$https://cn2.343480.com/20190705/FdeI92e7/index.m3u8#第27集$https://cn2.343480.com/20190705/593Tg2hO/index.m3u8#第28集$https://cn2.343480.com/20190705/PrRIf2zc/index.m3u8#第29集$https://cn2.343480.com/20190705/mEs3veQ2/index.m3u8#第30集$https://cn2.343480.com/20190705/pa5y3nl4/index.m3u8#第31集$https://cn2.343480.com/20190705/yYY4ReRr/index.m3u8#第32集$https://cn2.343480.com/20190705/m3Rpoe2s/index.m3u8#第33集$https://cn2.343480.com/20190705/UnZg3gjd/index.m3u8#第34集$https://cn2.343480.com/20190705/XTvwIIjy/index.m3u8#第35集$https://cn2.343480.com/20190705/0OGppe6E/index.m3u8#第36集$https://cn2.343480.com/20190705/wIPu1xQN/index.m3u8$$$第01集$https://cn2.343480.com/share/QSm6C4KM5kQnbs80#第02集$https://cn2.343480.com/share/IspbwA8EOa2hoYSg#第03集$https://cn2.343480.com/share/y6qoU7C8Eyx5CfAh#第04集$https://cn2.343480.com/share/PGDBQpmftKeY0Gr2#第05集$https://cn2.343480.com/share/TbF1TioeFMxz6zcB#第06集$https://cn2.343480.com/share/US6zhdZbyMHtUcrW#第07集$https://cn2.343480.com/share/M4CfH0e1xg3vk22N#第08集$https://cn2.343480.com/share/Jc6nRDR7RbBfL2YG#第09集$https://cn2.343480.com/share/wvvY5qau9mfKZ3tE#第10集$https://cn2.343480.com/share/qy0R0EwOmwhxluEO#第11集$https://cn2.343480.com/share/RCQNdB0aszjMzE8F#第12集$https://cn2.343480.com/share/lUI9B0ZVeXEQYdjn#第13集$https://cn2.343480.com/share/6qNtm9MBhhZLVITO#第14集$https://cn2.343480.com/share/XxXJaFejVtyPN9uJ#第15集$https://cn2.343480.com/share/muVpAqscCN3p4qV4#第16集$https://cn2.343480.com/share/wPO4q6YUBjqTkZwb#第17集$https://cn2.343480.com/share/XwSHAvW2ocsLuJyn#第18集$https://cn2.343480.com/share/JCOj0ZZgMySYASHK#第19集$https://cn2.343480.com/share/1AV9r6fUUZqSGwPn#第20集$https://cn2.343480.com/share/inDCLES92VcKXeLQ#第21集$https://cn2.343480.com/share/cyYKs8LrbyX37CJT#第22集$https://cn2.343480.com/share/cUwtUJiG1123HsZc#第23集$https://cn2.343480.com/share/Ch7JY30TZOGlMEpU#第24集$https://cn2.343480.com/share/eeB80GxloJL7SpxK#第25集$https://cn2.343480.com/share/MwePvEsqiXhoizM9#第26集$https://cn2.343480.com/share/s3p43dDRCED5cLCC#第27集$https://cn2.343480.com/share/UeLp8VmRWwEw1ga1#第28集$https://cn2.343480.com/share/jqS9OuCdBFdrHvY8#第29集$https://cn2.343480.com/share/qTl4zkt6onpOJZU8#第30集$https://cn2.343480.com/share/PyEObZrz6zbScEF8#第31集$https://cn2.343480.com/share/tEcf7ZLjvUOY69R9#第32集$https://cn2.343480.com/share/yKCwQdqs3mfvLZJG#第33集$https://cn2.343480.com/share/14FxGk6lgCZ7T7Ar#第34集$https://cn2.343480.com/share/4QJ2aRoCnUBg6UO1#第35集$https://cn2.343480.com/share/z3Z9pnYOFCEySnd6#第36集$https://cn2.343480.com/share/fFnajdWivdCTOjtD",typeName:"连续剧",vodName:"你的爱，我无力拒绝",vodPic:"https://img.398zy.com/upload/vod/2019-07-05/201907051562334523.gif",vodYear:"2012",vodActor:"阿卡潘·纳玛查,帕德容琶·砂楚,Pooklook,Fonthip,Watcharatrakul"},{vodArea:"中国大陆",vodId:"420",vodDirector:"刘猛",vodPlayUrl:"第01集$https://cn1.343480.com/20190621/fF0olLFL/index.m3u8#第02集$https://cn1.343480.com/20190621/4tvPs2YG/index.m3u8#第03集$https://cn1.343480.com/20190621/ONd5e3WJ/index.m3u8#第04集$https://cn1.343480.com/20190621/hUZWrRiP/index.m3u8#第05集$https://cn1.343480.com/20190621/3o57iF9R/index.m3u8#第06集$https://cn1.343480.com/20190621/FWtG6YQd/index.m3u8#第07集$https://cn1.343480.com/20190621/PpMQMaKJ/index.m3u8#第08集$https://cn1.343480.com/20190621/ZPzoab5G/index.m3u8#第09集$https://cn1.343480.com/20190621/vbdwWMvv/index.m3u8#第10集$https://cn1.343480.com/20190621/CxTe3ezJ/index.m3u8#第11集$https://cn1.343480.com/20190621/haCf912T/index.m3u8#第12集$https://cn1.343480.com/20190621/h03L63mH/index.m3u8#第13集$https://cn1.343480.com/20190621/hT9XJY27/index.m3u8#第14集$https://cn1.343480.com/20190621/onlUnffi/index.m3u8#第15集$https://cn1.343480.com/20190621/AGX3IBEA/index.m3u8#第16集$https://cn1.343480.com/20190621/PQN92fk1/index.m3u8#第17集$https://cn1.343480.com/20190621/4IP7Gs1N/index.m3u8#第18集$https://cn1.343480.com/20190621/pehZODZb/index.m3u8#第19集$https://cn1.343480.com/20190621/8VrKC76p/index.m3u8#第20集$https://cn1.343480.com/20190621/OWCaUG4K/index.m3u8#第21集$https://cn1.343480.com/20190621/mnQTZeTP/index.m3u8#第22集$https://cn1.343480.com/20190621/ZgtKkg7m/index.m3u8#第23集$https://cn1.343480.com/20190621/yBPqcV5U/index.m3u8#第24集$https://cn1.343480.com/20190621/x5uOmzDY/index.m3u8#第25集$https://cn1.343480.com/20190621/SQsWjLLd/index.m3u8#第26集$https://cn1.343480.com/20190621/lLgnw5Yx/index.m3u8#第27集$https://cn1.343480.com/20190621/69P4mHmI/index.m3u8#第28集$https://cn1.343480.com/20190621/713F3Rri/index.m3u8#第29集$https://cn1.343480.com/20190621/7lujVPOZ/index.m3u8#第30集$https://cn1.343480.com/20190621/jA5ckXwH/index.m3u8#第31集$https://cn1.343480.com/20190621/J3nicIOF/index.m3u8#第32集$https://cn1.343480.com/20190621/mfcKplOA/index.m3u8#第33集$https://cn1.343480.com/20190621/yD2HHq3F/index.m3u8#第34集$https://cn1.343480.com/20190621/ftJsrAAC/index.m3u8#第35集$https://cn1.343480.com/20190621/mHkeq5kU/index.m3u8#第36集$https://cn1.343480.com/20190621/X6qOj3s1/index.m3u8#第37集$https://cn1.343480.com/20190621/UnWSpnYc/index.m3u8#第38集$https://cn1.343480.com/20190621/GaTg4xmM/index.m3u8#第39集$https://cn1.343480.com/20190621/ZDe6KNlO/index.m3u8#第40集$https://cn1.343480.com/20190621/8Bx1ESFO/index.m3u8#第41集$https://cn1.343480.com/20190621/lxTfzgNb/index.m3u8#第42集$https://cn1.343480.com/20190621/g7y4Ghoi/index.m3u8#第43集$https://cn1.343480.com/20190621/mSVnBOIs/index.m3u8#第44集$https://cn1.343480.com/20190621/RNeei9e3/index.m3u8#第45集$https://cn1.343480.com/20190621/dwlf9lkx/index.m3u8#第46集$https://cn1.343480.com/20190621/eE6K4L42/index.m3u8#第47集$https://cn1.343480.com/20190621/p8zI1wDv/index.m3u8#第48集$https://cn1.343480.com/20190621/3CstdSlU/index.m3u8#第49集$https://cn1.343480.com/20190621/7Rv6GsTj/index.m3u8#第50集$https://cn1.343480.com/20190621/bcYdUBXm/index.m3u8#第51集$https://cn1.343480.com/20190621/iiQHXz4m/index.m3u8#第52集$https://cn1.343480.com/20190621/JnRmNBCF/index.m3u8$$$第01集$https://cn1.343480.com/share/NJlJSwDRsJu40GHJ#第02集$https://cn1.343480.com/share/LBcDfiMfuX2WMVL5#第03集$https://cn1.343480.com/share/UfrSVwD45i7Ua7s2#第04集$https://cn1.343480.com/share/PIWc9yTE64UERkEL#第05集$https://cn1.343480.com/share/uRbAZCjtvGQcQQvH#第06集$https://cn1.343480.com/share/AjJaFaDMUrrip36V#第07集$https://cn1.343480.com/share/nvQC2ZVg9yo1uaRv#第08集$https://cn1.343480.com/share/HnGrm29tpq52p1V8#第09集$https://cn1.343480.com/share/7d3okl51zi0zsJbc#第10集$https://cn1.343480.com/share/HDPl6JXuPdi0cVLJ#第11集$https://cn1.343480.com/share/v15cF384MMxwdWv0#第12集$https://cn1.343480.com/share/VNJ7AaleskXshplA#第13集$https://cn1.343480.com/share/0cKhSmDz0o68Snrb#第14集$https://cn1.343480.com/share/YVpUTKb96UnKyMIz#第15集$https://cn1.343480.com/share/S6RRo32D3smuJePS#第16集$https://cn1.343480.com/share/oSZslYRLFZ0m2cZp#第17集$https://cn1.343480.com/share/4ZLRzzs1hhTGPEmu#第18集$https://cn1.343480.com/share/87kUvAzS1DG41ErI#第19集$https://cn1.343480.com/share/Gl0YuwmcIrtvKizU#第20集$https://cn1.343480.com/share/RTQgmXn7fUAtT9Ya#第21集$https://cn1.343480.com/share/m0bBzBHeEg3FCeEv#第22集$https://cn1.343480.com/share/7rReKJ0S2bUsRZxg#第23集$https://cn1.343480.com/share/1FCsgVlEjyIEKu09#第24集$https://cn1.343480.com/share/J9bPBHZEZdyb1ilW#第25集$https://cn1.343480.com/share/Go8EOx3L71ld8BgW#第26集$https://cn1.343480.com/share/lg02n02Ybxe7aNv5#第27集$https://cn1.343480.com/share/EVd03ZfXDP6UUyXi#第28集$https://cn1.343480.com/share/ySB795dpPr4ALiXu#第29集$https://cn1.343480.com/share/H7niBZoExOLA1Ulg#第30集$https://cn1.343480.com/share/iXOTvjQn41Y0EoT7#第31集$https://cn1.343480.com/share/XgxnLNrjzd3pEHDZ#第32集$https://cn1.343480.com/share/S5MhO5z9bbDoSBtr#第33集$https://cn1.343480.com/share/Qq33flmFDRIfLEcK#第34集$https://cn1.343480.com/share/hJI6E0BxIpGg2KWI#第35集$https://cn1.343480.com/share/3PlQSygqFigA1yNm#第36集$https://cn1.343480.com/share/HlK3lUboCOB3bGGj#第37集$https://cn1.343480.com/share/eU6FWpp0hHDIa1zm#第38集$https://cn1.343480.com/share/S4V4u7LU8r4IAOGD#第39集$https://cn1.343480.com/share/IvMTORJOUp2Yy4UJ#第40集$https://cn1.343480.com/share/TtVumb0AKhGHoP4q#第41集$https://cn1.343480.com/share/FdU6udBJgWzEdzzT#第42集$https://cn1.343480.com/share/1TEkXPH2LNgWIgY5#第43集$https://cn1.343480.com/share/39BO17s7iCh5VV7f#第44集$https://cn1.343480.com/share/L7l0PzEe9BiU0CrH#第45集$https://cn1.343480.com/share/QE0tJDKZuaZaY5L7#第46集$https://cn1.343480.com/share/1lx27Pnn8xAB7R66#第47集$https://cn1.343480.com/share/557Zzzu23eXnNfcV#第48集$https://cn1.343480.com/share/Sg1qurVGDVR4ebwJ#第49集$https://cn1.343480.com/share/PyAADgnhPuKokOq2#第50集$https://cn1.343480.com/share/eUdoR3HsbswQLAES#第51集$https://cn1.343480.com/share/NNdvLNJElezhakpK#第52集$https://cn1.343480.com/share/4wJI1BYYByBswJp9",typeName:"连续剧",vodName:"特警力量",vodPic:"https://img.398zy.com/upload/vod/2019-06-21/156110745710.jpg",vodYear:"2015",vodActor:"安雅萍,徐洪浩,任天野,王妍之"},{vodArea:"中国大陆",vodId:"1541",vodDirector:"成志超,戴小哲,田少波",vodPlayUrl:"第01集$https://cn2.343480.com/20190629/2Dd81YY3/index.m3u8#第02集$https://cn2.343480.com/20190629/kYIrI69k/index.m3u8#第03集$https://cn2.343480.com/20190629/KbNnbS2W/index.m3u8#第04集$https://cn2.343480.com/20190629/Ae8wAGKd/index.m3u8#第05集$https://cn2.343480.com/20190629/rDh1IIdD/index.m3u8#第06集$https://cn2.343480.com/20190629/BCE5lKi3/index.m3u8#第07集$https://cn2.343480.com/20190629/5gUWBOmN/index.m3u8#第08集$https://cn2.343480.com/20190629/hzjtEkM1/index.m3u8#第09集$https://cn2.343480.com/20190629/U9DiBgZn/index.m3u8#第10集$https://cn2.343480.com/20190629/9OElbI47/index.m3u8#第11集$https://cn2.343480.com/20190629/Mikc5dLJ/index.m3u8#第12集$https://cn2.343480.com/20190629/gddscLnZ/index.m3u8#第13集$https://cn2.343480.com/20190629/7rjInDnt/index.m3u8#第14集$https://cn2.343480.com/20190629/W3VaN7k2/index.m3u8#第15集$https://cn2.343480.com/20190629/x54Lkfbh/index.m3u8#第16集$https://cn2.343480.com/20190629/O8GW0w0d/index.m3u8#第17集$https://cn2.343480.com/20190629/FjAjyxdx/index.m3u8#第18集$https://cn2.343480.com/20190629/lhV7n9BT/index.m3u8#第19集$https://cn2.343480.com/20190629/4fybYGXN/index.m3u8#第20集$https://cn2.343480.com/20190629/NsVmwKdK/index.m3u8#第21集$https://cn2.343480.com/20190629/fr7Aibcz/index.m3u8#第22集$https://cn2.343480.com/20190629/sKVaNT5c/index.m3u8#第23集$https://cn2.343480.com/20190629/d6cdUlm9/index.m3u8#第24集$https://cn2.343480.com/20190629/BbAs2jis/index.m3u8#第25集$https://cn2.343480.com/20190629/LgaZWiCd/index.m3u8#第26集$https://cn2.343480.com/20190629/Or4d13Kr/index.m3u8#第27集$https://cn2.343480.com/20190629/QHmLplpx/index.m3u8#第28集$https://cn2.343480.com/20190629/AV1mWSXP/index.m3u8#第29集$https://cn2.343480.com/20190629/HN181e5n/index.m3u8#第30集$https://cn2.343480.com/20190629/DujaUcvJ/index.m3u8#第31集$https://cn2.343480.com/20190629/ICbPbFNb/index.m3u8#第32集$https://cn2.343480.com/20190629/F4psOTuI/index.m3u8#第33集$https://cn2.343480.com/20190629/0h99mgiD/index.m3u8#第34集$https://cn2.343480.com/20190629/GOYj63OT/index.m3u8#第35集$https://cn2.343480.com/20190629/UROQHw38/index.m3u8#第36集$https://cn2.343480.com/20190629/TiaqgKpw/index.m3u8#第37集$https://cn2.343480.com/20190629/ctFTAJWL/index.m3u8#第38集$https://cn2.343480.com/20190629/XEb1t9qS/index.m3u8#第39集$https://cn2.343480.com/20190629/1CORdnEp/index.m3u8#第40集$https://cn2.343480.com/20190629/IeOEdskW/index.m3u8$$$第01集$https://cn2.343480.com/share/yUP410NFHyw7Z3m1#第02集$https://cn2.343480.com/share/LhvSIenan1ZDl7ji#第03集$https://cn2.343480.com/share/E2JVGDqNbsNYx4u2#第04集$https://cn2.343480.com/share/36817ejZQ6ZHC3fN#第05集$https://cn2.343480.com/share/r0Yfh7YMkSUw3aUn#第06集$https://cn2.343480.com/share/7eJsMSuupFk396HD#第07集$https://cn2.343480.com/share/UgsMtUABy3pGv01Q#第08集$https://cn2.343480.com/share/zuPjCQWTi5WQ5zVG#第09集$https://cn2.343480.com/share/QBlUnNynohjzqAlG#第10集$https://cn2.343480.com/share/1bUM2Npygl5zjY1W#第11集$https://cn2.343480.com/share/z0yryDVE65fgR4Ak#第12集$https://cn2.343480.com/share/VVIjknUE3Z9d9fbg#第13集$https://cn2.343480.com/share/k9CkMlgYuKEWxFe1#第14集$https://cn2.343480.com/share/eroHLBRtemiKoCCm#第15集$https://cn2.343480.com/share/pbpKfxYNdb8z7i2j#第16集$https://cn2.343480.com/share/F7lKhhsYtxWNBBfZ#第17集$https://cn2.343480.com/share/paK0PIyeMO1jimHG#第18集$https://cn2.343480.com/share/FwzguqmwReP5EwKN#第19集$https://cn2.343480.com/share/Fz36STzCIFFPhLMO#第20集$https://cn2.343480.com/share/pxpdKBziyGC0Z5oc#第21集$https://cn2.343480.com/share/jdFKpYubAzuMIOxo#第22集$https://cn2.343480.com/share/lVyjebi7EeZiEgaQ#第23集$https://cn2.343480.com/share/F057sLK2Yw5Ts73X#第24集$https://cn2.343480.com/share/LUtyLe6yJZIg43xP#第25集$https://cn2.343480.com/share/Dp7EWwkhSjbSsGvh#第26集$https://cn2.343480.com/share/iGxIe8BiQOHntrH8#第27集$https://cn2.343480.com/share/Nki9T0XuC7ugG2JZ#第28集$https://cn2.343480.com/share/OLIbJkAxfe8toziH#第29集$https://cn2.343480.com/share/ESwydBLLoq1L0MPL#第30集$https://cn2.343480.com/share/SfXQHp5Mck4bI4P5#第31集$https://cn2.343480.com/share/WB5vJLz7NJ8oM2og#第32集$https://cn2.343480.com/share/zUgchdGElieOeB3I#第33集$https://cn2.343480.com/share/OWRnV3Mbv8sPP3w0#第34集$https://cn2.343480.com/share/Jpm6m9xvDoUo3Msc#第35集$https://cn2.343480.com/share/OuHSV69QFo20vCpA#第36集$https://cn2.343480.com/share/uD3BI0aI8pryjTQN#第37集$https://cn2.343480.com/share/dO7Ce7kJnSRCPtST#第38集$https://cn2.343480.com/share/NJ5zhdshpMLv9C92#第39集$https://cn2.343480.com/share/JSeaIn2bGn0pur6R#第40集$https://cn2.343480.com/share/MgrPgMVgC5U73DiQ",typeName:"连续剧",vodName:"天坑鹰猎",vodPic:"https://img.398zy.com/upload/vod/2019-06-30/201906301561870718.png",vodYear:"2018",vodActor:"王俊凯,文淇,蒋依依,叶筱玮"},{vodArea:"中国大陆",vodId:"3636",vodDirector:"鞠觉亮,周晓文,于敏,赵箭",vodPlayUrl:"第01集$https://cn2.343480.com/20190709/ohO043gm/index.m3u8#第02集$https://cn2.343480.com/20190709/LY9ac0kk/index.m3u8#第03集$https://cn2.343480.com/20190709/4Dmp9LJ0/index.m3u8#第04集$https://cn2.343480.com/20190709/w4OZnC3K/index.m3u8#第05集$https://cn2.343480.com/20190709/bmVFWWrS/index.m3u8#第06集$https://cn2.343480.com/20190709/hvBOyrZR/index.m3u8#第07集$https://cn2.343480.com/20190709/3YiK2TFb/index.m3u8#第08集$https://cn2.343480.com/20190709/urnKRKBz/index.m3u8#第09集$https://cn2.343480.com/20190709/d86NwUUO/index.m3u8#第10集$https://cn2.343480.com/20190709/PvmQiPwV/index.m3u8#第11集$https://cn2.343480.com/20190709/ZXYyPlld/index.m3u8#第12集$https://cn2.343480.com/20190709/DetO8ca6/index.m3u8#第13集$https://cn2.343480.com/20190709/MOzIXvao/index.m3u8#第14集$https://cn2.343480.com/20190709/l3GEVFUR/index.m3u8#第15集$https://cn2.343480.com/20190709/YhY1nEoY/index.m3u8#第16集$https://cn2.343480.com/20190709/7ApR4NqO/index.m3u8#第17集$https://cn2.343480.com/20190709/4Dw2XIoL/index.m3u8#第18集$https://cn2.343480.com/20190709/vrIce3CR/index.m3u8#第19集$https://cn2.343480.com/20190709/C1CCZIex/index.m3u8#第20集$https://cn2.343480.com/20190709/3sH9t588/index.m3u8#第21集$https://cn2.343480.com/20190709/a8bKSDxq/index.m3u8#第22集$https://cn2.343480.com/20190709/EYnePtEw/index.m3u8#第23集$https://cn2.343480.com/20190709/lA6TbsHs/index.m3u8#第24集$https://cn2.343480.com/20190709/OarFBX8t/index.m3u8#第25集$https://cn2.343480.com/20190709/KyXQsTHs/index.m3u8#第26集$https://cn2.343480.com/20190709/m5eZoGQV/index.m3u8#第27集$https://cn2.343480.com/20190709/1Ji07ifE/index.m3u8#第28集$https://cn2.343480.com/20190709/1mL7Zpg9/index.m3u8#第29集$https://cn2.343480.com/20190709/UvFbDV9i/index.m3u8#第30集$https://cn2.343480.com/20190709/lFehtwT2/index.m3u8#第31集$https://cn2.343480.com/20190709/EXVa0763/index.m3u8#第32集$https://cn2.343480.com/20190709/Q1d8KrJw/index.m3u8#第33集$https://cn2.343480.com/20190709/R570KgxW/index.m3u8#第34集$https://cn2.343480.com/20190709/ee3nNfS0/index.m3u8#第35集$https://cn2.343480.com/20190709/pNZMVlkU/index.m3u8#第36集$https://cn2.343480.com/20190709/QHCSdFMd/index.m3u8#第37集$https://cn2.343480.com/20190709/XjB9J5sF/index.m3u8#第38集$https://cn2.343480.com/20190709/csdOZOFU/index.m3u8#第39集$https://cn2.343480.com/20190709/E4S9EkLR/index.m3u8#第40集$https://cn2.343480.com/20190709/2ahLMEjn/index.m3u8$$$第01集$https://cn2.343480.com/share/SobKXb5xLTKUE9GB#第02集$https://cn2.343480.com/share/Md7pzPa9ivHCnFFt#第03集$https://cn2.343480.com/share/PrA1jBpTWJ6691g7#第04集$https://cn2.343480.com/share/Ze2zJmLEYio1A5S7#第05集$https://cn2.343480.com/share/uhwy7WEpbhkyqo3T#第06集$https://cn2.343480.com/share/MlWvPvEehjRePIgf#第07集$https://cn2.343480.com/share/0DH1Z6CfMj51ogC3#第08集$https://cn2.343480.com/share/BgwCV3NwIlIA9Z8H#第09集$https://cn2.343480.com/share/5UxGmJR8LE2ky2o5#第10集$https://cn2.343480.com/share/wuXW7Lad0vN0kwNi#第11集$https://cn2.343480.com/share/5QjyIPJQliUEPJb2#第12集$https://cn2.343480.com/share/V1MmifTxe0ut6BfT#第13集$https://cn2.343480.com/share/0t0DBh8AxV7iPU4c#第14集$https://cn2.343480.com/share/Y75iN3bOmn53RieV#第15集$https://cn2.343480.com/share/x0NC25lXG9w47Z88#第16集$https://cn2.343480.com/share/G4zs1rnW4arzwk4m#第17集$https://cn2.343480.com/share/UOtX7axbSgMBxlAP#第18集$https://cn2.343480.com/share/HPG5620aoFpyZQ1e#第19集$https://cn2.343480.com/share/x2r86FXSgj4YH6cD#第20集$https://cn2.343480.com/share/NGBBmgyPPQguWQrg#第21集$https://cn2.343480.com/share/vhDbAiTeU5quVCWr#第22集$https://cn2.343480.com/share/dC8UPyxTRiWT4Qh2#第23集$https://cn2.343480.com/share/Roay6VcXMEd89ifV#第24集$https://cn2.343480.com/share/QiGieG2nB3gmzGmI#第25集$https://cn2.343480.com/share/wa1loag1bRsins6P#第26集$https://cn2.343480.com/share/fjdws4ANKmRE4jAl#第27集$https://cn2.343480.com/share/v6TsbxqbiCfF9wA6#第28集$https://cn2.343480.com/share/u21gQaEAo4VmyYhH#第29集$https://cn2.343480.com/share/qYlyYy7Y7w8Fc8IB#第30集$https://cn2.343480.com/share/A4IHVNJ0QUHDeFtQ#第31集$https://cn2.343480.com/share/DHAMGegLA7qvnLzA#第32集$https://cn2.343480.com/share/9EKdaPW4B6LjFjwJ#第33集$https://cn2.343480.com/share/CHRgPIDy1LWeV9l4#第34集$https://cn2.343480.com/share/0eWC8bLbUAxwysXo#第35集$https://cn2.343480.com/share/skh0sQSY7cJC46Gk#第36集$https://cn2.343480.com/share/6MoTHkV9JpYXRoZa#第37集$https://cn2.343480.com/share/2lIN1Eq0J4xOVfa6#第38集$https://cn2.343480.com/share/Ms0ddY8v12dUhbhU#第39集$https://cn2.343480.com/share/9ubySeGDtv2RS0Tf#第40集$https://cn2.343480.com/share/GsZ8B5T38fFu7A71",typeName:"连续剧",vodName:"天龙八部",vodPic:"https://img.398zy.com/upload/vod/2019-07-09/201907091562618496.png",vodYear:"2003",vodActor:"胡军,林志颖,高虎,修庆"},{vodArea:"美国",vodId:"2318",vodDirector:"格温妮丝·豪特尔-佩顿,麦克·勒曼,彼得·威勒",vodPlayUrl:"第01集$https://cn2.343480.com/20190703/U759A5qe/index.m3u8#第02集$https://cn2.343480.com/20190703/POBrVQcL/index.m3u8#第03集$https://cn2.343480.com/20190703/3dTuoSor/index.m3u8#第04集$https://cn2.343480.com/20190703/YlvxDVDx/index.m3u8#第05集$https://cn2.343480.com/20190703/0ghyEBr0/index.m3u8#第06集$https://cn2.343480.com/20190703/WHC1BCwn/index.m3u8#第07集$https://cn2.343480.com/20190703/qjwtN1Y6/index.m3u8#第08集$https://cn2.343480.com/20190703/KGwwxqvA/index.m3u8#第09集$https://cn2.343480.com/20190703/YnYsioLS/index.m3u8#第10集$https://cn2.343480.com/20190703/VuDcNr6t/index.m3u8$$$第01集$https://cn2.343480.com/share/nl6mtRgBcLAovFe4#第02集$https://cn2.343480.com/share/HRwYqda6lipOb2iX#第03集$https://cn2.343480.com/share/YF83CATVlMIgWkeb#第04集$https://cn2.343480.com/share/ubHInGVgUFPIyIJ0#第05集$https://cn2.343480.com/share/BQOh6tS8NDSw8kBM#第06集$https://cn2.343480.com/share/ka1PcPMABLKSJ0M7#第07集$https://cn2.343480.com/share/H9O6HyWGmhE5HuMi#第08集$https://cn2.343480.com/share/8C0PWmAbZ7YAiYFo#第09集$https://cn2.343480.com/share/KYcu4d0iBL5zA4lX#第10集$https://cn2.343480.com/share/FC1825WEqlsiE9Ad",typeName:"连续剧",vodName:"暴君 第三季",vodPic:"https://img.398zy.com/upload/vod/2019-07-03/201907031562152574.gif",vodYear:"2016",vodActor:"亚当·雷纳,詹妮佛·芬尼甘,阿什拉夫·巴姆,莫兰·阿提艾斯"}]}]}},onLoad:function(){var c=this;t.request({url:this.websiteUrl+"/api/discover/list",success:function(t){0==t.data.status?(c.tabBars2=t.data.tabs,c.tp1=t.data.tp1,c.tp2=t.data.tp2):console.log(s("res.data.message"," at pages\\tarbar\\discover\\discover.vue:181"))}})},onReachBottom:function(){var c=this;if(0==this.tabIndex)this.$refs.topics.pageNumber++,t.request({url:this.websiteUrl+"/api/discover/getRotTopic?startPage="+this.$refs.topics.pageNumber,success:function(t){if("success"==t.data.message)if(t.data.rot.length>0)for(var n=0;n<t.data.rot.length;n++)c.tp1.push(t.data.rot[n]);else c.topicBaseLine=!0;else console.log(s("请求数据失败"," at pages\\tarbar\\discover\\discover.vue:202"))}});else{var n=this.$refs.filmRanking.tabBars[this.$refs.filmRanking.tabIndex].typeId;this.$refs.filmRanking.pageNumberArry[n]?this.$refs.filmRanking.pageNumberArry[n]++:this.$refs.filmRanking.pageNumberArry[n]=2,t.request({url:this.websiteUrl+"/api/discover/getMovieRank/"+n+"?startPage="+this.$refs.filmRanking.pageNumberArry[n],success:function(t){if("success"==t.data.message)if(t.data.movieRank&&t.data.movieRank.length>0)for(var n=0;n<t.data.movieRank.length;n++)c.tp2[c.$refs.filmRanking.tabIndex].data.push(t.data.movieRank[n]);else c.rankingBaseLine=!0;else console.log(s("请求数据失败"," at pages\\tarbar\\discover\\discover.vue:226"))}})}},methods:{tapTab:function(){var t=h(e.default.mark(function t(c){var n;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=c.target.dataset.current,this.tabIndex!==n){t.next=5;break}return t.abrupt("return",!1);case 5:this.tabIndex=n;case 6:case"end":return t.stop()}},t,this)}));function c(c){return t.apply(this,arguments)}return c}()}};c.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},a0d8:function(t,c,n){"use strict";n.r(c);var s=n("448a"),e=n.n(s);for(var m in s)"default"!==m&&function(t){n.d(c,t,function(){return s[t]})}(m);c["default"]=e.a},e13e:function(t,c,n){"use strict";var s=function(){var t=this,c=t.$createElement;t._self._c},e=[];n.d(c,"a",function(){return s}),n.d(c,"b",function(){return e})},fd5e:function(t,c,n){}},[["3b79","common/runtime","common/vendor"]]]);
});
require('pages/tarbar/discover/discover.js');
__wxRoute = 'pages/discover/topics/topics_details';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/discover/topics/topics_details.js';

define('pages/discover/topics/topics_details.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discover/topics/topics_details"],{"164d":function(t,e,i){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("840b"));function s(t){return t&&t.__esModule?t:{default:t}}var o=function(){return i.e("pages/discover/topics/input_detail").then(i.bind(null,"ad2e"))},c=function(){return i.e("pages/playPage/commentItem").then(i.bind(null,"3057"))},r=i("a4b0"),u={data:function(){return{scrollTop:0,commentListShow:!0,style:{pageHeight:0,contentViewHeight:0},vodId:"",topic:{},film_details:{},commentData:[],movieArr:[],current:0,unknow:"未知"}},components:{input_detail:o,commItem:c},onNavigationBarButtonTap:function(e){var i=this,s=this.$store.state.isLogin;if(s){var o={href:"http://47.98.171.179:8080/download_page/download.html",title:'98影院，随时随地抢"鲜"看！',desc:"精彩大片抢先看",imgUrl:"/static/98Code.png"},c=this,r=this.$store.state.userInfo.loginToken;this.shareObj=(0,n.default)(o,function(e){console.log(a("点击按钮的序号: "+e," at pages\\discover\\topics\\topics_details.vue:103"));var i={href:o.href||"",title:o.title||"",summary:o.desc||"",success:function(e){console.log(a("success:"+JSON.stringify(e)," at pages\\discover\\topics\\topics_details.vue:109")),c.$nextTick(function(){c.shareObj.alphaBg.hide(),c.shareObj.shareMenu.hide()}),t.request({url:c.websiteUrl+"/api/share/point",method:"GET",header:{Authorization:r},data:{},success:function(e){0==e.data.status?console.log(a(e," at pages\\discover\\topics\\topics_details.vue:123")):1001==e.data.status&&(t.showToast({title:e.data.message,icon:"none",mask:!0}),setTimeout(function(){t.hideToast(),t.navigateTo({url:"/pages/login/login",animationType:"slide-in-top"})},300))},fail:function(){},complete:function(){}})},fail:function(e){console.log(a("fail:"+JSON.stringify(e)," at pages\\discover\\topics\\topics_details.vue:144")),c.$nextTick(function(){c.shareObj.alphaBg.hide(),c.shareObj.shareMenu.hide()}),t.request({url:c.websiteUrl+"/api/share/point",method:"GET",header:{Authorization:r},data:{},success:function(e){0==e.data.status?console.log(a(e," at pages\\discover\\topics\\topics_details.vue:158")):1001==e.data.status&&(t.showToast({title:e.data.message,icon:"none",mask:!0}),setTimeout(function(){t.hideToast(),t.navigateTo({url:"/pages/login/login",animationType:"slide-in-top"})},300))},fail:function(){},complete:function(){}})}};switch(e){case 0:i.provider="weixin",i.scene="WXSceneSession",i.type=0,i.imageUrl=o.imgUrl||"",t.share(i);break;case 1:i.provider="weixin",i.scene="WXSenceTimeline",i.type=0,i.imageUrl=o.imgUrl||"",t.share(i);break;case 2:i.provider="qq",i.type=1,i.imageUrl=o.imgUrl||"",t.share(i);break;case 3:t.setClipboardData({data:o.href,complete:function(){t.showToast({title:"已复制到剪贴板"})}});break;case 4:plus.share.sendWithSystem({type:"web",title:o.title||"",thumbs:[o.imgUrl||""],href:o.href||"",content:o.desc||""});break}}),this.$nextTick(function(){i.shareObj.alphaBg.show(),i.shareObj.shareMenu.show()})}else t.navigateTo({url:"/pages/login/login",animationType:"slide-in-top"})},onLoad:function(e){var i=this;this.vodId=e.topicId,t.request({url:this.websiteUrl+"/api/discover/getRotTopicDesc?topicId="+this.vodId,success:function(t){0==t.data.status&&(i.task_basic_data=t.data,i.topic=t.data.topic,i.movieArr=t.data.movie,i.film_details=i.movieArr[i.current])}}),t.request({url:this.websiteUrl+"/api/discover/comment/list?topicId="+this.vodId,success:function(t){0==t.data.status&&(t.data.list.length>0?(i.commentData=t.data.list,i.commentListShow=!1):(i.commentData=[],i.commentListShow=!0))}});var a=t.getSystemInfoSync();this.style.pageHeight=a.windowHeight,this.style.contentViewHeight=a.windowHeight-t.getSystemInfoSync().screenWidth/750*110},methods:{getCurrent:function(t){this.current=t.detail.current,this.film_details=this.movieArr[this.current]},toplay:function(e){var i=e.target.dataset.id;t.navigateTo({url:"/pages/playPage/playPage?vodId="+i,animationType:"slide-in-right",animationDuration:300})},checkOtherComment:function(e){var i={data:[],commentId:e.commentId,vodId:this.vodId};e.commentObject&&(i.data=e.commentObject);JSON.stringify(i);t.navigateTo({url:"../../../pages/discover/topics/topics_details_comment?commentList="+JSON.stringify(i)})},toSendMessage:function(e){var i=this,a=this;1==this.currentCommentType&&(this.currentCommentId=0);var n={commentId:"",userId:this.$store.state.userInfo.userId,commentName:this.$store.state.userInfo.userName,commentRid:Number(this.vodId),commentContent:e.inputValue};t.request({url:this.websiteUrl+"/api/discover/inscomment",method:"POST",data:n,success:function(t){var n={commentContent:e.inputValue,commentId:t.data.commentId,commentMid:200,commentName:i.$store.state.userInfo.userName,commentObject:[],commentPid:i.currentCommentId,commentTime:r.getNowTime("yyyy-MM-dd hh:mm:ss"),userId:i.$store.state.userInfo.userId,userPortrait:i.$store.state.userImage.localImage};a.commentData.push(n),a.commentListShow=!1}})}}};e.default=u}).call(this,i("6e42")["default"],i("0de9")["default"])},"28b0":function(t,e,i){},"476c":function(t,e,i){"use strict";i.r(e);var a=i("164d"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"64dd":function(t,e,i){"use strict";i.r(e);var a=i("abe8"),n=i("476c");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("c98b");var o=i("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},abe8:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},c98b:function(t,e,i){"use strict";var a=i("28b0"),n=i.n(a);n.a},d42b:function(t,e,i){"use strict";(function(t){i("eee4"),i("921b");a(i("66fd"));var e=a(i("64dd"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])}},[["d42b","common/runtime","common/vendor"]]]);
});
require('pages/discover/topics/topics_details.js');
__wxRoute = 'pages/tarbar/share/share';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tarbar/share/share.js';

define('pages/tarbar/share/share.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tarbar/share/share"],{"0ce5":function(e,t,a){"use strict";(function(e){a("eee4"),a("921b");n(a("66fd"));var t=n(a("f799"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},5173:function(e,t,a){"use strict";a.r(t);var n=a("a5da"),s=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=s.a},"52cb":function(e,t,a){"use strict";var n=a("bf6b"),s=a.n(n);s.a},"57ef":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s})},a5da:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a("840b"));function i(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{codeSrc:"http://47.98.171.179:8080/download-page.png"}},onBackPress:function(){if(this.shareObj.shareMenu.isVisible())return this.shareObj.shareMenu.hide(),this.shareObj.alphaBg.hide(),!0},computed:{loginStatus:function(){return this.$store.state.isLogin},codetext:function(){return this.loginStatus?this.$store.state.userInfo.userCode:"请登录后查看"}},methods:{savePic:function(){e.downloadFile({url:this.codeSrc,success:function(t){e.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){e.showToast({title:"保存成功",duration:2e3,mask:!0}),setTimeout(function(){e.hideToast()},2e3)},fail:function(t){e.showToast({title:"保存失败",icon:"none",duration:2e3,mask:!0}),setTimeout(function(){e.hideToast()},2e3)}})},fail:function(){e.showToast({title:"下载失败",icon:"none",duration:2e3,mask:!0}),setTimeout(function(){e.hideToast()},2e3)}})},copy:function(){this.loginStatus?e.setClipboardData({data:this.codetext,success:function(){e.showToast({title:"复制成功",mask:!0}),setTimeout(function(){e.hideToast()},2e3)}}):(e.showToast({title:"请登录后复制",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3))},share:function(){var t=this,a={href:"http://1188xy.cn/download_page/download.html",title:'98影院，随时随地抢"鲜"看！',desc:"精彩大片抢先看",imgUrl:"/static/98Code.png"},i=this;this.shareObj=(0,s.default)(a,function(t){console.log(n("点击按钮的序号: "+t," at pages\\tarbar\\share\\share.vue:130"));var s={href:a.href||"",title:a.title||"",summary:a.desc||"",success:function(e){console.log(n("success:"+JSON.stringify(e)," at pages\\tarbar\\share\\share.vue:136")),i.$nextTick(function(){i.shareObj.alphaBg.hide(),i.shareObj.shareMenu.hide()})},fail:function(e){console.log(n("fail:"+JSON.stringify(e)," at pages\\tarbar\\share\\share.vue:143")),i.$nextTick(function(){i.shareObj.alphaBg.hide(),i.shareObj.shareMenu.hide()})}};switch(t){case 0:s.provider="weixin",s.scene="WXSceneSession",s.type=0,s.imageUrl=a.imgUrl||"",e.share(s);break;case 1:s.provider="weixin",s.scene="WXSenceTimeline",s.type=0,s.imageUrl=a.imgUrl||"",e.share(s);break;case 2:s.provider="qq",s.type=1,s.imageUrl=a.imgUrl||"",e.share(s);break;case 3:e.setClipboardData({data:a.href,complete:function(){e.showToast({title:"已复制到剪贴板"})}});break;case 4:plus.share.sendWithSystem({type:"web",title:a.title||"",thumbs:[a.imgUrl||""],href:a.href||"",content:a.desc||""});break}}),this.$nextTick(function(){t.shareObj.alphaBg.show(),t.shareObj.shareMenu.show()})}}};t.default=o}).call(this,a("6e42")["default"],a("0de9")["default"])},bf6b:function(e,t,a){},f799:function(e,t,a){"use strict";a.r(t);var n=a("57ef"),s=a("5173");for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);a("52cb");var o=a("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports}},[["0ce5","common/runtime","common/vendor"]]]);
});
require('pages/tarbar/share/share.js');
__wxRoute = 'pages/tarbar/task/task';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tarbar/task/task.js';

define('pages/tarbar/task/task.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tarbar/task/task"],{"1ccc":function(t,n,a){"use strict";a.r(n);var e=a("ed73"),i=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(n,t,function(){return e[t]})}(s);n["default"]=i.a},"22df":function(t,n,a){"use strict";var e=a("845c"),i=a.n(e);i.a},"27d6":function(t,n,a){"use strict";a.r(n);var e=a("f4e2"),i=a("1ccc");for(var s in i)"default"!==s&&function(t){a.d(n,t,function(){return i[t]})}(s);a("22df");var o=a("2877"),u=Object(o["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=u.exports},"845c":function(t,n,a){},"875d":function(t,n,a){"use strict";(function(t){a("eee4"),a("921b");e(a("66fd"));var n=e(a("27d6"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])},ed73:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=function(){return a.e("pages/task/taskItem").then(a.bind(null,"5bd0"))},i={components:{taskItem:e},data:function(){return{taskShow:!0,task_basic_data:{msg:"success",shareCount:0,userPoints:"10",code:0,sign:"0  ",coutinueMark:"0"},task_list:[{list_title:"今日签到",list_award:"+10金币/个",content:"每次点击签到奖励10个",btn:"去签到",id:0},{list_title:"邀请用户注册",list_award:"+100金币/个",content:"邀请一位好友注册奖励100个",btn:"去完成",id:1},{list_title:"分享专题",list_award:"+5金币/个",content:"每次首次分享专题奖励5个",btn:"去分享",id:5}]}},onShow:function(n){var a=this,e="";this.$store.state.userInfo.userId&&(e=this.$store.state.userInfo.userId),t.request({url:this.websiteUrl+"/api/task/list?userId="+e,success:function(t){0==t.data.status&&(a.task_basic_data=t.data,a.taskShow=!1,a.$nextTick(function(){a.taskShow=!0}))}})},methods:{gotoMyInvitation:function(){t.navigateTo({url:"../../../pages/task/my_invitation"})},gotoMyExchange:function(){t.navigateTo({url:"../../../pages/task/my_exchange"})},gotoMyCoinList:function(){t.navigateTo({url:"../../../pages/task/my_coin"})},toChangData:function(t){this.task_basic_data.continueMark=t.coutinueMark,this.task_basic_data.point=t.userPoints},toPrize:function(){t.navigateTo({url:"/pages/luckDraw/luckDraw",animationType:"slide-in-right",animationDuration:300})}}};n.default=i}).call(this,a("6e42")["default"])},f4e2:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})}},[["875d","common/runtime","common/vendor"]]]);
});
require('pages/tarbar/task/task.js');
__wxRoute = 'pages/task/my_invitation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/task/my_invitation.js';

define('pages/task/my_invitation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/task/my_invitation"],{"1ef9":function(t,e,n){},"6d9f":function(t,e,n){"use strict";(function(t){n("eee4"),n("921b");a(n("66fd"));var e=a(n("bb97"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9cb9":function(t,e,n){"use strict";n.r(e);var a=n("c962"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a},b83e:function(t,e,n){"use strict";var a=n("1ef9"),i=n.n(a);i.a},b8ae:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},bb97:function(t,e,n){"use strict";n.r(e);var a=n("b8ae"),i=n("9cb9");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("b83e");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},c962:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={created:function(e){var n=this,a="";this.$store.state.userInfo.userId&&(a=this.$store.state.userInfo.userId),t.request({url:this.websiteUrl+"/api/share/code?userId="+a,success:function(t){0==t.data.status&&t.data.list.length>0&&(n.invitationData=t.data.list,n.invitationListStatus=!1)}})},data:function(){return{invitationData:{count:0},invitationListStatus:!0}},methods:{inviteGoodFriends:function(){t.switchTab({url:"../../pages/tarbar/share/share"})}}};e.default=n}).call(this,n("6e42")["default"])}},[["6d9f","common/runtime","common/vendor"]]]);
});
require('pages/task/my_invitation.js');
__wxRoute = 'pages/task/my_exchange';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/task/my_exchange.js';

define('pages/task/my_exchange.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/task/my_exchange"],{"01e3":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){return a.e("pages/task/taskItem").then(a.bind(null,"5bd0"))},s={created:function(e){var a=this,n="";this.$store.state.userInfo.userId&&(n=this.$store.state.userInfo.userId),t.request({url:this.websiteUrl+"/api/exchange/list?userId="+n,success:function(t){0==t.data.status&&(a.exchangeData=t.data,t.data.excList.length>0&&(a.exchangeListStatus=!1))}})},components:{taskItem:n},data:function(){return{exchangeData:{points:0},exchangeListStatus:!0}},methods:{toExchange:function(e){var a=this;if(0==e.status)t.showToast({title:"兑换成功",mask:!0,duration:1e3}),setTimeout(function(){t.hideToast()},1e3),t.request({url:this.websiteUrl+"/api/exchange/list",method:"GET",data:{userId:this.$store.state.userInfo.userId},success:function(t){0==t.data.status&&(a.exchangeData=t.data,t.data.excList.length>0&&(a.exchangeListStatus=!1))}});else if(3==e.status){var n=t.getSubNVueById("exchangeRule");n.show("slide-in-top",200)}}}};e.default=s}).call(this,a("6e42")["default"])},"2e47":function(t,e,a){"use strict";(function(t){a("eee4"),a("921b");n(a("66fd"));var e=n(a("685d"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"64ad":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},"685d":function(t,e,a){"use strict";a.r(e);var n=a("64ad"),s=a("87a1");for(var u in s)"default"!==u&&function(t){a.d(e,t,function(){return s[t]})}(u);a("ac9c");var c=a("2877"),i=Object(c["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"87a1":function(t,e,a){"use strict";a.r(e);var n=a("01e3"),s=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=s.a},ac9c:function(t,e,a){"use strict";var n=a("ecb7"),s=a.n(n);s.a},ecb7:function(t,e,a){}},[["2e47","common/runtime","common/vendor"]]]);
});
require('pages/task/my_exchange.js');
__wxRoute = 'pages/tarbar/mine/mine';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tarbar/mine/mine.js';

define('pages/tarbar/mine/mine.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tarbar/mine/mine"],{"17e9":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];s.d(t,"a",function(){return a}),s.d(t,"b",function(){return i})},"58b8":function(e,t,s){"use strict";s.r(t);var a=s("8ab1"),i=s.n(a);for(var n in a)"default"!==n&&function(e){s.d(t,e,function(){return a[e]})}(n);t["default"]=i.a},"8ab1":function(e,t,s){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{userinfo:{loginStatus:!1,userName:"",userPhone:"",userLocalImage:"/static/touxiang.png"},recordsData:[],mineArr:[],hasMsg:!1,msgImg:"/static/xiaoxi.png",hasMessage:null}},methods:{isOpen:function(){var e;return e=plus.sqlite.isOpenDatabase({name:"98TV",path:"_doc/test.db"}),!!e},recordsSql:function(){var t=this;this.isOpen()||plus.sqlite.openDatabase({name:"98TV",path:"_doc/test.db",success:function(t){console.log(e("openDatabase success!"," at pages\\tarbar\\mine\\mine.vue:131"))},fail:function(t){console.log(e("openDatabase failed: "+JSON.stringify(t)," at pages\\tarbar\\mine\\mine.vue:134"))}}),plus.sqlite.selectSql({name:"98TV",sql:"select * from history",success:function(s){console.log(e("selectSql success: history"," at pages\\tarbar\\mine\\mine.vue:142")),t.recordsData=[],s.length>0&&(t.recordsData=s,t.recordsData.length>10&&(t.recordsData=t.recordsData.slice(0,10))),t.isOpen()&&plus.sqlite.closeDatabase({name:"98TV",success:function(t){console.log(e("closeDatabase success!"," at pages\\tarbar\\mine\\mine.vue:154"))},fail:function(t){console.log(e("closeDatabase failed: "+JSON.stringify(t)," at pages\\tarbar\\mine\\mine.vue:157"))}})},fail:function(s){console.log(e("selectSql failed: "+JSON.stringify(s)," at pages\\tarbar\\mine\\mine.vue:163")),t.isOpen()&&plus.sqlite.closeDatabase({name:"98TV",success:function(t){console.log(e("closeDatabase success!"," at pages\\tarbar\\mine\\mine.vue:168"))},fail:function(t){console.log(e("closeDatabase failed: "+JSON.stringify(t)," at pages\\tarbar\\mine\\mine.vue:171"))}})}})},recordsLogin:function(){var e=this,t=this.$store.state.userInfo.userId,a=this.$store.state.userInfo.loginToken;s.request({url:this.websiteUrl+"/user/get/visit",method:"GET",header:{Authorization:a},data:{userId:t},success:function(t){if(1001==t.data.status)return s.showToast({title:t.data.message,icon:"none",mask:!0}),void setTimeout(function(){s.hideToast(),s.navigateTo({url:"/pages/login/login",animationType:"slide-in-bottom"})},800);if(t.data.length>0){e.mineArr=t.data;for(var a=0;a<e.mineArr.length;a++)for(var i=0;i<e.recordsData.length;i++)e.recordsData[i].vodId==e.mineArr[a].vodId&&e.recordsData.splice(i,1);e.recordsData=e.recordsData.concat(e.mineArr),e.recordsData.length>10&&(e.recordsData=e.recordsData.slice(0,10))}},fail:function(){},complete:function(){}})},downImg:function(){var e=this.$store.state.userImage,t=e.networkImage;s.downloadFile({url:t,success:function(t){var a=t.tempFilePath;s.saveFile({tempFilePath:a,success:function(t){var a=t.savedFilePath;e.localImage=a,that.$store.commit("storeImage",e),that.user.userUrl=a,s.showToast({title:"上传成功",mask:!0}),setTimeout(function(){s.hideToast()},2e3)}})}})},toLogin:function(){this.userinfo.loginStatus?s.navigateTo({url:"/pages/editProfile/editProfile",animationType:"slide-in-right"}):s.navigateTo({url:"/pages/login/login",animationType:"slide-in-bottom"})},gotoMyInvitation:function(){s.navigateTo({url:"../../../pages/task/my_invitation"})},gotoMyExchange:function(){s.navigateTo({url:"../../../pages/task/my_exchange"})},gotoMyCoinList:function(){s.navigateTo({url:"../../../pages/task/my_coin"})},gotoMyTask:function(){s.switchTab({url:"../../../pages/tarbar/task/task"})},toDown:function(){console.log(e(0x7877874945eeb80000," at pages\\tarbar\\mine\\mine.vue:286"));var t=plus.os.name.toUpperCase();if(console.log(e(t," at pages\\tarbar\\mine\\mine.vue:289")),"ANDROID"===t)s.navigateTo({url:"/pages/download/download",animationType:"slide-in-right"});else if("IOS"===t){var a=plus.ios.newObject("downloadViewController"),i=plus.ios.importClass("UIApplication"),n=i.sharedApplication(),o=plus.ios.invoke(n,"delegate"),r=plus.ios.invoke(o,"window"),u=plus.ios.invoke(r,"rootViewController");plus.ios.invoke(u,"pushViewController:animated:",a,"YES")}},toCollection:function(){this.userinfo.loginStatus?s.navigateTo({url:"/pages/collection/collection",animationDuration:"slide-in-right"}):s.navigateTo({url:"/pages/login/login",animationType:"slide-in-bottom"})},toHelp:function(){s.navigateTo({url:"/pages/helpCenter/helpCenter",animationDuration:"slide-in-right"})},toSetting:function(){s.navigateTo({url:"/pages/setting/setting",animationDuration:"slide-in-right"})},toHistory:function(){s.navigateTo({url:"/pages/playHistory/playHistory",animationDuration:"slide-in-right"})},toMessage:function(){clearInterval(this.hasMessage),s.navigateTo({url:"/pages/systemMsg/systemMsg",animationDuration:"slide-in-right"})},logout:function(){var e=this;this.userinfo.loginStatus&&s.showModal({title:"确认退出？",content:"温馨提示：退出后会影响某些功能使用，确认退出？",showCancel:!0,cancelText:"取消",confirmText:"确定",success:function(t){t.confirm&&s.request({url:e.websiteUrl+"/api/logout",method:"POST",data:{userId:e.$store.state.userInfo.userId},success:function(t){0===t.data.status&&(s.showToast({title:"退出成功",mask:!0}),setTimeout(function(){s.hideToast()},2e3),e.$store.commit("logout"),e.$set(e.userinfo,"loginStatus",e.$store.state.isLogin),e.$set(e.userinfo,"userName",e.$store.state.userInfo.userName),e.$set(e.userinfo,"userPhone",e.$store.state.userInfo.userPhone),e.$set(e.userinfo,"userLocalImage","/static/touxiang.png"),e.recordsSql())},fail:function(){},complete:function(){}})}})},toMovie:function(e){var t=e.currentTarget.id;s.navigateTo({url:"/pages/playPage/playPage?vodId="+t,animationType:"slide-in-right"})}},onShow:function(){var e=this;this.$set(this.userinfo,"loginStatus",this.$store.state.isLogin),this.$set(this.userinfo,"userName",this.$store.state.userInfo.userName),this.$set(this.userinfo,"userPhone",this.$store.state.userInfo.userPhone),this.userinfo.loginStatus?this.$set(this.userinfo,"userLocalImage",this.$store.state.userImage.localImage):this.$set(this.userinfo,"userLocalImage","/static/touxiang.png"),this.recordsSql(),this.userinfo.loginStatus&&this.recordsLogin(),s.request({url:this.websiteUrl+"/api/sysmsg/list",method:"GET",data:{deviceId:this.$store.state.deviceId},success:function(t){t.data.count>0?(clearInterval(e.hasMessage),e.hasMessage=setInterval(function(){e.hasMsg?(e.hasMsg=!1,e.msgImg=""):(e.hasMsg=!0,e.msgImg="/static/xiaoxi.png")},500)):e.msgImg="/static/xiaoxi.png"},fail:function(){},complete:function(){}})}};t.default=a}).call(this,s("0de9")["default"],s("6e42")["default"])},"987d":function(e,t,s){},a861:function(e,t,s){"use strict";s.r(t);var a=s("17e9"),i=s("58b8");for(var n in i)"default"!==n&&function(e){s.d(t,e,function(){return i[e]})}(n);s("b169");var o=s("2877"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},b169:function(e,t,s){"use strict";var a=s("987d"),i=s.n(a);i.a},e840:function(e,t,s){"use strict";(function(e){s("eee4"),s("921b");a(s("66fd"));var t=a(s("a861"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,s("6e42")["createPage"])}},[["e840","common/runtime","common/vendor"]]]);
});
require('pages/tarbar/mine/mine.js');
__wxRoute = 'pages/more/more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/more/more.js';

define('pages/more/more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/more/more"],{"2ddd":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},n=[];o.d(t,"a",function(){return a}),o.d(t,"b",function(){return n})},"39b0":function(e,t,o){},7871:function(e,t,o){"use strict";o.r(t);var a=o("2ddd"),n=o("78e4");for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);o("a719");var r=o("2877"),u=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports},"78e4":function(e,t,o){"use strict";o.r(t);var a=o("ffff"),n=o.n(a);for(var i in a)"default"!==i&&function(e){o.d(t,e,function(){return a[e]})}(i);t["default"]=n.a},7911:function(e,t,o){"use strict";(function(e){o("eee4"),o("921b");a(o("66fd"));var t=a(o("7871"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},a719:function(e,t,o){"use strict";var a=o("39b0"),n=o.n(a);n.a},ffff:function(e,t,o){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{moreMovies:[],indexTab:0,num:2,modleNum:0,moreFlag:!1,loadMoreText:"加载中...",showLoadMore:!1,showFalg:!0}},methods:{moreData:function(){var t=this;e.request({url:this.websiteUrl+"/api/home/more",method:"GET",data:{typeId:this.indexTab,modleId:this.modleNum,currPage:this.num},success:function(e){if(e.data.length>0){for(var o=[],a=0;a<e.data.length;a++)o.push(e.data[a]);t.moreMovies=t.moreMovies.concat(o),t.moreFlag=!0,t.num++}else t.moreFlag=!1,t.showFalg=!1},fail:function(){},complete:function(){}})},movieTo:function(t){var o=t.currentTarget.dataset.id;e.navigateTo({url:"/pages/playPage/playPage?vodId="+o,animationType:"slide-in-right",animationDuration:300})}},onLoad:function(t){var o=this;this.indexTab=t.index,this.modleNum=t.id,e.setNavigationBarTitle({title:t.title}),e.request({url:this.websiteUrl+"/api/home/more",method:"GET",data:{typeId:t.index,modleId:t.id,currPage:1},success:function(e){o.moreMovies=e.data},fail:function(){},complete:function(){}})},onUnload:function(){this.data=[],this.showLoadMore=!1,this.showFalg=!0,this.moreFlag=!1},onReachBottom:function(){var e=this;console.log(o("onReachBottom"," at pages\\more\\more.vue:101")),this.showFalg?(this.showLoadMore=!0,setTimeout(function(){e.moreData()},300)):this.loadMoreText="我是有底线的!"}};t.default=a}).call(this,o("6e42")["default"],o("0de9")["default"])}},[["7911","common/runtime","common/vendor"]]]);
});
require('pages/more/more.js');
__wxRoute = 'pages/playPage/playPage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/playPage/playPage.js';

define('pages/playPage/playPage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/playPage/playPage"],{"0488":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return n})},2476:function(e,t,a){"use strict";a.r(t);var s=a("31b4"),n=a.n(s);for(var o in s)"default"!==o&&function(e){a.d(t,e,function(){return s[e]})}(o);t["default"]=n.a},"31b4":function(e,t,a){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("a34a")),o=i(a("840b"));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t,a,s,n,o,i){try{var l=e[o](i),c=l.value}catch(r){return void a(r)}l.done?t(c):Promise.resolve(c).then(s,n)}function c(e){return function(){var t=this,a=arguments;return new Promise(function(s,n){var o=e.apply(t,a);function i(e){l(o,s,n,i,c,"next",e)}function c(e){l(o,s,n,i,c,"throw",e)}i(void 0)})}}var r=function(){return a.e("pages/playPage/commentItem").then(a.bind(null,"3057"))},u=function(){return a.e("pages/playPage/chatinput").then(a.bind(null,"8773"))},d=function(){return a.e("pages/playPage/uni-popup").then(a.bind(null,"df83"))},h=function(){return a.e("pages/playPage/share").then(a.bind(null,"1f43"))},m=a("a4b0"),p={components:{commItem:r,chatinput:u,uniPopup:d,sharePage:h},onResize:function(){this.pageChangeBig?this.pageChangeBig=!1:this.bigInputBlur()},onHide:function(){this.videoContext.pause(),this.autoPlay=!1},onShow:function(){var t=e.getSystemInfoSync();this.style.pageHeight=t.windowHeight,this.style.contentViewHeight=t.windowHeight-e.getSystemInfoSync().screenWidth/750*660,this.style.detailViewHeight=t.windowHeight-e.getSystemInfoSync().screenWidth/750*540,this.style.commentViewHeight=t.windowHeight-e.getSystemInfoSync().screenWidth/750*750,this.style.allConment=t.windowHeight-e.getSystemInfoSync().screenWidth/750*540,this.$nextTick(function(){this.videoContext=e.createVideoContext("myVideo",this),this.videoContext.play()}),this.autoPlay=!0},onUnload:function(){this.autoPlay=!1},data:function(){return{scrollLeft:0,baseDateName:"98TV",baseDataSrc:"_doc/test.db",type:"",select_status:!1,playTvSrc:"",playTvImg:"",beginPlay:!1,videoToShareStatus:!1,vodId:0,allsuccessData:{},tabIndex:0,downIndex:0,collectionNum:"",pageChangeBig:!0,otherContentList:[],otherCommentListShow:!1,commentListShow:!1,currentCommentType:1,currentCommentId:0,currentCommentMid:0,currentCommentIndex:0,loadSurvey:!0,loadComplent:!1,danmuList:[],commentData:[],name:"xcecd@qq.com",style:{pageHeight:0,detailViewHeight:0,contentViewHeight:0,commentViewHeight:0,footViewHeight:90,mitemHeight:0,allConment:0},scrollTop:0,messages:[{user:"home",type:"head",content:"你好!"}],initialTime:0,currentPlayTime:0,sharingStatus:!1,isFullscreen:!1,autoPlay:!1,advertArr:[]}},onLoad:function(t){var a=this,n=this;if(n.vodId=t.vodId,n.$store.state.userInfo.userId)var o=n.$store.state.userInfo.userId;else o="";n.checkIShareStatus(function(t){if(t)var i=JSON.parse(t);else i=[];i.length>0&&(n.initialTime=Number(i[0].playTime),n.sharingStatus=Boolean(i[0].isShare),i[0].partsNo&&(n.tabIndex=i[0].partsNo)),e.request({url:n.websiteUrl+"/api/home/play?vodId="+n.vodId+"&userId="+o,success:function(t){if(n.allsuccessData=t.data,console.log(s(n.allsuccessData," at pages\\playPage\\playPage.vue:277")),n.allsuccessData){if("VIP"==n.allsuccessData.trgRemark&&!a.$store.state.isLogin)return e.navigateBack({delta:1}),void e.navigateTo({url:"../../pages/login/login"});n.allsuccessData.visitInfo&&(n.initialTime=n.allsuccessData.visitInfo.playTime,n.tabIndex=n.allsuccessData.visitInfo.partsNo,n.scrollLeft=6.5*(n.tabIndex+3)),n.allsuccessData.shareStatus&&"Y"==n.allsuccessData.shareStatus&&(n.allsuccessData.vodIsShare&&"N"==n.allsuccessData.vodIsShare||n.allsuccessData.visitInfo&&n.allsuccessData.visitInfo.isShare&&"Y"==n.allsuccessData.visitInfo.isShare)&&(n.sharingStatus=!0),""==n.allsuccessData.vodPicThumb?n.playTvImg=n.allsuccessData.vodPic:n.playTvImg=n.allsuccessData.vodPicThumb,n.playTvSrc=n.allsuccessData.vodPlayUrl[n.tabIndex].playUrl,n.currentCommentMid=n.allsuccessData.typeId1,n.allsuccessData.vodPlayUrl&&n.allsuccessData.vodPlayUrl.length>1?n.select_status=!0:n.select_status=!1,n.allsuccessData.commentList?n.commentData=n.allsuccessData.commentList:n.commentData=[],n.commentData.length>0?n.commentListShow=!1:n.commentListShow=!0,n.allsuccessData.commentNum?n.loadComplent=!0:n.loadComplent=!1,n.allsuccessData.advertInfo&&(n.advertArr=n.allsuccessData.advertInfo)}}})})},onBackPress:function(){this.backPress()},methods:{gotoWeb:function(e){var t=e.target.dataset.url;plus.runtime.openWeb(t),this.videoContext.pause()},backPress:function(){var t=this;if(this.$store.state.isLogin){var a=t.sharingStatus?"Y":"N";e.request({url:this.websiteUrl+"/user/add/visit",method:"POST",header:{Authorization:this.$store.state.userInfo.loginToken},data:{userId:Number(this.$store.state.userInfo.userId),vodId:Number(this.vodId),vodType:this.allsuccessData.typeId1,partsNo:Number(this.tabIndex),partsUrl:this.allsuccessData.vodPlayUrl[t.tabIndex].playUrl,playTime:String(t.currentPlayTime),isShare:a},success:function(e){}})}else plus.sqlite.isOpenDatabase({name:t.baseDateName,path:t.baseDataSrc})?t.executeSQL():plus.sqlite.openDatabase({name:t.baseDateName,path:t.baseDataSrc,success:function(e){console.log(s("openDatabase success!"," at pages\\playPage\\playPage.vue:380")),t.executeSQL()},fail:function(e){console.log(s("openDatabase failed: "+JSON.stringify(e)," at pages\\playPage\\playPage.vue:384"))}})},toXuanji:function(){var e=c(n.default.mark(function e(t){var a;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.currentTarget.id,this.playTvSrc=this.allsuccessData.vodPlayUrl[a].playUrl,this.tabIndex!==a){e.next=6;break}return e.abrupt("return",!1);case 6:this.tabIndex=a,this.tabIndex>=5&&"selected_works"===this.type&&(this.scrollLeft=6.5*(this.tabIndex+3));case 8:this.togglePopup("");case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),videoEnd:function(){this.select_status&&(this.tabIndex++,this.playTvSrc=this.allsuccessData.vodPlayUrl[this.tabIndex].playUrl,this.videoContext.play())},fullscreenchangeback:function(e){this.isFullscreen=e.detail.fullScreen},videoPlayBack:function(){this.beginPlay=!0,e.getNetworkType({success:function(e){"wifi"!=e.networkType&&plus.nativeUI.toast("当前非WiFi环境注意流量消耗!")}})},gotoFeedback:function(){e.navigateTo({url:"../../pages/feedback/feedback"})},togglePopup:function(e){"close_bottom_share"==e&&(this.type="",this.videoToShareStatus=!1),this.type=e,this.currentCommentType=1,this.currentCommentMid=this.allsuccessData.typeId1},checkOtherContent:function(e,t,a){this.currentCommentIndex=e,this.type=a,this.currentCommentType=2,this.currentCommentId=t.commentId,this.currentCommentMid=t.commentMid,this.otherContentList=[];var s={commentContent:"",commentId:"",commentMid:"",commentName:"",commentObject:[],commentPid:"",commentTime:"",userId:"",userPortrait:""};if(s.commentContent=this.allsuccessData.commentList[e].commentContent,s.commentId=this.allsuccessData.commentList[e].commentId,s.commentMid=this.allsuccessData.commentList[e].commentMid,s.commentName=this.allsuccessData.commentList[e].commentName,s.commentPid=this.allsuccessData.commentList[e].commentPid,s.commentTime=this.allsuccessData.commentList[e].commentTime,s.userId=this.allsuccessData.commentList[e].userId,s.userPortrait=this.allsuccessData.commentList[e].userPortrait,this.otherContentList.push(s),this.allsuccessData.commentList[e].commentObject)for(var n=0;n<this.allsuccessData.commentList[e].commentObject.length;n++)this.otherContentList.push(this.allsuccessData.commentList[e].commentObject[n]);this.otherContentList.length>0?this.otherCommentListShow=!1:this.otherCommentListShow=!0},toSendComent:function(t){var a=this,s=this;1==this.currentCommentType&&(this.currentCommentId=0),e.request({url:this.websiteUrl+"/api/comment/save",method:"POST",data:{commentId:Number(this.currentCommentId),userId:Number(this.$store.state.userInfo.userId),commentName:this.$store.state.userInfo.userName,commentMid:Number(this.currentCommentMid),commentRid:Number(this.vodId),commentContent:t.inputValue},success:function(e){plus.nativeUI.toast("发表成功!");var n={commentContent:t.inputValue,commentId:e.data,commentMid:Number(a.currentCommentMid),commentName:a.$store.state.userInfo.userName,commentObject:[],commentPid:a.currentCommentId,commentTime:m.getNowTime("yyyy-MM-dd hh:mm:ss"),userId:Number(a.$store.state.userInfo.userId),userPortrait:a.$store.state.userImage.localImage};a.allsuccessData.commentNum++,1==s.currentCommentType?(s.commentData.push(n),s.commentListShow=!1):(s.commentData[a.currentCommentIndex].commentObject.push(n),a.commentListShow=!0,a.$nextTick(function(){a.commentListShow=!1}),a.otherCommentListShow=!1)}})},videoErrorCallback:function(e){this.beginPlay=!0},failShare:function(){this.sharingStatus=!0,this.togglePopup("close_bottom_share")},successShare:function(){this.sharingStatus=!0,this.togglePopup("close_bottom_share")},timeUpdateToshare:function(e){this.currentPlayTime=e.detail.currentTime,e.detail.currentTime>600&&!this.sharingStatus&&(this.videoToShareStatus=!0,this.videoContext.pause(),this.isFullscreen&&this.videoContext.exitFullScreen(),this.togglePopup("bottom_share"))},goBack:function(){e.navigateBack({delta:1,animationType:"pop-out",animationDuration:200})},bigInputFocus:function(){this.pageChangeBig=!0,e.pageScrollTo({scrollTop:0,duration:0});var t=e.getSystemInfoSync(),a=t.platform;"ios"!=a&&(this.style.allConment=t.windowHeight-e.getSystemInfoSync().screenWidth/750*1120),this.style.contentViewHeight=t.windowHeight-e.getSystemInfoSync().screenWidth/750*1220,this.style.detailViewHeight=t.windowHeight-e.getSystemInfoSync().screenWidth/750*1210,this.style.commentViewHeight=t.windowHeight-e.getSystemInfoSync().screenWidth/750*1300},bigInputBlur:function(){var t=this;this.pageChangeBig=!1,this.$refs.chatinput&&(this.$refs.chatinput.inputFocusStatus=!1),this.loadSurvey=!1,this.$nextTick(function(){t.loadSurvey=!0});var a=e.getSystemInfoSync();a.platform;this.style.contentViewHeight=a.windowHeight-e.getSystemInfoSync().screenWidth/750*660,this.style.detailViewHeight=a.windowHeight-e.getSystemInfoSync().screenWidth/750*540,this.style.commentViewHeight=a.windowHeight-e.getSystemInfoSync().screenWidth/750*750,this.style.allConment=a.windowHeight-e.getSystemInfoSync().screenWidth/750*540},toAddLike:function(){var t=this;""==this.collectionNum?e.request({url:this.websiteUrl+"/user/add/collect",method:"POST",header:{Authorization:this.$store.state.userInfo.loginToken},data:{userId:this.$store.state.userInfo.userId,vodId:Number(this.vodId),vodType:this.allsuccessData.typeId1,partsNo:Number(this.tabIndex),partsUrl:this.allsuccessData.vodPlayUrl[this.tabIndex].playUrl,playTime:"10:25"},success:function(a){1001==a.data.status?e.navigateTo({url:"../../pages/login/login"}):(t.collectionNum=a.data,t.collectionNum?(t.loadComplent=!0,t.loadSurvey=!1,t.$nextTick(function(){t.loadSurvey=!0}),plus.nativeUI.toast("收藏成功!")):plus.nativeUI.toast("收藏失败!"))}}):e.request({url:this.websiteUrl+"/user/del/collect",method:"POST",data:[Number(this.collectionNum)],success:function(e){t.collectionNum="",t.loadComplent=!1,t.loadSurvey=!1,t.$nextTick(function(){t.loadSurvey=!0}),plus.nativeUI.toast("收藏取消!")}})},toDownLoad:function(){if(this.$store.state.isLogin){var t=this.$store.state.userInfo.userId,a=this.$store.state.userInfo.loginToken,s=this;e.request({url:this.websiteUrl+"/api/exchange/permission",header:{Authorization:a},method:"GET",data:{userId:t},success:function(t){var a=t.data;0==a.status?a.userDownload>0?s.select_status?s.togglePopup("downLoad_selected_works"):s.toSendDownLoadData():(e.showToast({title:"请到兑换中心兑换下载次数",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3)):1001==a.status?(e.showToast({title:a.message,icon:"none",mask:!0}),setTimeout(function(){e.hideToast(),e.navigateTo({url:"/pages/login/login",animationType:"slide-in-bottom"})},300)):(e.showToast({title:a.message,icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3))},fail:function(){},complete:function(){}})}else e.navigateTo({url:"/pages/login/login",animationType:"slide-in-bottom"})},toAddDownLoad:function(e){this.downIndex=e.currentTarget.id,this.toSendDownLoadData()},toSendDownLoadData:function(){var t=this,a=plus.os.name.toUpperCase();if(t.$store.state.isDown)switch(a){case"ANDROID":t.sendDownLoadToAndroid();break;case"IOS":t.sendDownLoadToIOS();break}else e.getNetworkType({success:function(e){if("wifi"!=e.networkType)plus.nativeUI.confirm("确定非WiFi下载?",function(e){if(0==e.index)switch(a){case"ANDROID":t.sendDownLoadToAndroid();break;case"IOS":t.sendDownLoadToIOS();break}},{title:"提示",buttons:["Yes","No"],verticalAlign:"center"});else switch(a){case"ANDROID":t.sendDownLoadToAndroid();break;case"IOS":t.sendDownLoadToIOS();break}}})},sendDownLoadToAndroid:function(){var t=this.$store.state.userInfo.userId,a=this.$store.state.userInfo.loginToken,n=plus.android.importClass("com.tjyz.video.download.TS"),o=new n;if(o.getDownload())plus.nativeUI.toast("当前已有下载任务 请稍后!");else{var i="",l=this.allsuccessData.vodPlayUrl[this.tabIndex].playUrl;this.select_status&&(i=this.allsuccessData.vodPlayUrl[this.downIndex].playName,l=this.allsuccessData.vodPlayUrl[this.downIndex].playUrl),o.getTSFile(l,this.allsuccessData.vodName,i),plus.nativeUI.toast("已添加下载队列!"),e.request({url:this.websiteUrl+"/api/download/upd",header:{Authorization:a},method:"POST",data:{userId:t},complete:function(e){console.log(s(e," at pages\\playPage\\playPage.vue:807"))}})}},sendDownLoadToIOS:function(){var t=this.$store.state.userInfo.userId,a=this.$store.state.userInfo.loginToken,n=plus.ios.importClass("downloadViewController"),o=new n,i="",l=this.allsuccessData.vodPlayUrl[this.tabIndex].playUrl;if("NO"==o.ifdown())return console.log(s("22222222"," at pages\\playPage\\playPage.vue:826")),void plus.nativeUI.toast("当前已有下载任务 请稍后!");this.select_status&&(i=this.allsuccessData.vodPlayUrl[this.downIndex].playName,l=this.allsuccessData.vodPlayUrl[this.downIndex].playUrl),o.setvediomodelwithurlnamejishuimage(l,this.allsuccessData.vodName,i,this.allsuccessData.vodPic),plus.nativeUI.toast("已添加下载队列!"),e.request({url:this.websiteUrl+"/api/download/upd",header:{Authorization:a},method:"POST",data:{userId:t},complete:function(e){console.log(s(e," at pages\\playPage\\playPage.vue:846"))}})},executeSQL:function(){var e=this,t="select * from sqlite_master where name='history' and sql like '%isShare%'";plus.sqlite.selectSql({name:e.baseDateName,sql:t,success:function(t){t.length>0?(e.creatTableSQL(),console.log(s("查到数据"," at pages\\playPage\\playPage.vue:862"))):plus.sqlite.executeSql({name:e.baseDateName,sql:"drop table if exists history",success:function(t){console.log(s("删除表成功"," at pages\\playPage\\playPage.vue:868")),e.creatTableSQL()},fail:function(e){console.log(s("executeSql failed: "+JSON.stringify(e)," at pages\\playPage\\playPage.vue:872"))}})},fail:function(e){console.log(s("查找判断字段失败"," at pages\\playPage\\playPage.vue:878"))}})},creatTableSQL:function(){var e=this;plus.sqlite.executeSql({name:e.baseDateName,sql:'create table if not exists history("vodId" INT(10) PRIMARY KEY,"vodBlurb" CHAR(255),"vodName" CHAR(255),"vodPic" CHAR(255),"partsNo" INT(10),"partsUrl" CHAR(255) ,"playTime" CHAR(255),"isShare" Boolean)',success:function(t){var a="replace into history('vodId','vodBlurb','vodName','vodPic','partsNo','partsUrl','playTime','isShare') values("+e.vodId+",'"+e.allsuccessData.vodBlurb+"','"+e.allsuccessData.vodName+"','"+e.allsuccessData.vodPic+"',"+e.tabIndex+",'"+e.allsuccessData.vodPlayUrl[e.tabIndex].playUrl+"','"+e.currentPlayTime+"','false')";plus.sqlite.executeSql({name:e.baseDateName,sql:a,success:function(t){console.log(s("executeSql success!"," at pages\\playPage\\playPage.vue:900")),e.closeDB()},fail:function(e){console.log(s("executeSql failed: "+JSON.stringify(e)," at pages\\playPage\\playPage.vue:904"))}})},fail:function(e){console.log(s("executeSql failed: "+JSON.stringify(e)," at pages\\playPage\\playPage.vue:909"))}})},selectSQL:function(){var e=this;plus.sqlite.selectSql({name:e.baseDateName,sql:"select * from  history",success:function(t){console.log(s("selectSql success: "," at pages\\playPage\\playPage.vue:922")),e.closeDB()},fail:function(t){e.closeDB(),console.log(s("selectSql failed: "+JSON.stringify(t)," at pages\\playPage\\playPage.vue:927"))}})},closeDB:function(){var e=this;plus.sqlite.closeDatabase({name:e.baseDateName,success:function(e){console.log(s("closeDatabase success!"," at pages\\playPage\\playPage.vue:939"))},fail:function(e){console.log(s("closeDatabase failed: "+JSON.stringify(e)," at pages\\playPage\\playPage.vue:942"))}})},checkIShareStatus:function(e){var t=this;plus.sqlite.isOpenDatabase({name:t.baseDateName,path:t.baseDataSrc})?t.executCheckShare(e):plus.sqlite.openDatabase({name:t.baseDateName,path:t.baseDataSrc,success:function(a){console.log(s("openDatabase success!"," at pages\\playPage\\playPage.vue:959")),t.executCheckShare(e)},fail:function(e){console.log(s("openDatabase failed: "+JSON.stringify(e)," at pages\\playPage\\playPage.vue:963"))}})},executCheckShare:function(e){var t=this;plus.sqlite.selectSql({name:t.baseDateName,sql:"select * from  history where vodId= "+this.vodId,success:function(a){e(JSON.stringify(a)),t.closeDB()},fail:function(a){e(),t.closeDB(),console.log(s("selectSql failed: "+JSON.stringify(a)," at pages\\playPage\\playPage.vue:984"))}})},toShare:function(){var t=this,a={href:"http://47.98.171.179:8080/download_page/download.html",title:'98影院，随时随地抢"鲜"看！',desc:"精彩大片抢先看",imgUrl:"/static/98Code.png"},n=this;this.shareObj=(0,o.default)(a,function(t){console.log(s("点击按钮的序号: "+t," at pages\\playPage\\playPage.vue:1003"));var o={href:a.href||"",title:a.title||"",summary:a.desc||"",success:function(e){console.log(s("success:"+JSON.stringify(e)," at pages\\playPage\\playPage.vue:1009")),n.$nextTick(function(){n.shareObj.alphaBg.hide(),n.shareObj.shareMenu.hide()})},fail:function(e){console.log(s("fail:"+JSON.stringify(e)," at pages\\playPage\\playPage.vue:1016")),n.$nextTick(function(){n.shareObj.alphaBg.hide(),n.shareObj.shareMenu.hide()})}};switch(t){case 0:o.provider="weixin",o.scene="WXSceneSession",o.type=0,o.imageUrl=a.imgUrl||"",e.share(o);break;case 1:o.provider="weixin",o.scene="WXSenceTimeline",o.type=0,o.imageUrl=a.imgUrl||"",e.share(o);break;case 2:o.provider="qq",o.type=1,o.imageUrl=a.imgUrl||"",e.share(o);break;case 3:e.setClipboardData({data:a.href,complete:function(){e.showToast({title:"已复制到剪贴板"})}});break;case 4:plus.share.sendWithSystem({type:"web",title:a.title||"",thumbs:[a.imgUrl||""],href:a.href||"",content:a.desc||""});break}}),this.$nextTick(function(){t.shareObj.alphaBg.show(),t.shareObj.shareMenu.show()})},toLogin:function(){this.videoContext.pause()}}};t.default=p}).call(this,a("6e42")["default"],a("0de9")["default"])},"6b1f":function(e,t,a){"use strict";a.r(t);var s=a("0488"),n=a("2476");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("a4ac");var i=a("2877"),l=Object(i["a"])(n["default"],s["a"],s["b"],!1,null,null,null);t["default"]=l.exports},a4ac:function(e,t,a){"use strict";var s=a("b8c2"),n=a.n(s);n.a},b8c2:function(e,t,a){},f620:function(e,t,a){"use strict";(function(e){a("eee4"),a("921b");s(a("66fd"));var t=s(a("6b1f"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])}},[["f620","common/runtime","common/vendor"]]]);
});
require('pages/playPage/playPage.js');
__wxRoute = 'pages/classify/classify';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/classify/classify.js';

define('pages/classify/classify.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/classify/classify"],{"38b2":function(t,e,n){"use strict";var a=n("583b"),u=n.n(a);u.a},"583b":function(t,e,n){},"897c":function(t,e,n){"use strict";n.r(e);var a=n("b40f"),u=n("e419");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("38b2");var c=n("2877"),o=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},b40f:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},e419:function(t,e,n){"use strict";n.r(e);var a=n("f6b7"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a},ea57:function(t,e,n){"use strict";(function(t){n("eee4"),n("921b");a(n("66fd"));var e=a(n("897c"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f6b7:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{classifyArray:[]}},methods:{toHome:function(e){t.switchTab({url:"/pages/tarbar/home/home"}),this.$store.commit("changeTar",e)}},onLoad:function(){var e=this;t.request({url:this.websiteUrl+"/api/home/moretype",method:"GET",data:{},success:function(t){e.classifyArray=t.data},fail:function(){},complete:function(){}})}};e.default=n}).call(this,n("6e42")["default"])}},[["ea57","common/runtime","common/vendor"]]]);
});
require('pages/classify/classify.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"2dc1":function(e,t,s){},"34ee":function(e,t,s){"use strict";(function(e,i,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(s("85cd"));function n(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{index:0,username:"",phoneNum:"",password:"",smsCode:"",userFalg:!1,phoneFalg:!1,codeFalg:!1,pwdFalg:!1,isShowPwd:!0,sendCodeText:"发送验证码",timeText:"",num:60,codeTime:"",beginFalg:!1,userobj:{},imgObj:{},system:"",remPwd:{checked:!1},disable:!1,userInfo:{},userValue:""}},onShow:function(){this.system=plus.os.name.toUpperCase(),this.userValue=e.getStorageSync("userValue"),this.userValue?(this.username=this.userValue.userNameStr,this.password=this.userValue.userPwdStr,this.$set(this.remPwd,"checked",this.userValue.pwdFlag)):(this.username="",this.password="",this.$set(this.remPwd,"checked",!1))},methods:{pwd:function(){this.index=0,this.disable=!1,this.userValue?(this.username=this.userValue.userNameStr,this.password=this.userValue.userPwdStr,this.$set(this.remPwd,"checked",this.userValue.pwdFlag)):(this.username=this.username,this.password=this.password,this.$set(this.remPwd,"checked",!1))},code:function(){this.index=1,this.disable=!0,this.$set(this.remPwd,"checked",!1)},checkboxChange:function(e){var t=e.detail.value;t.length>0?this.$set(this.remPwd,"checked",!0):this.$set(this.remPwd,"checked",!1)},swiperChange:function(e){this.index=e.detail.current,this.disable=0!=this.index},checkUser:function(){var t=/^1[3-9]\d{9}$/;return""!=this.username&&t.test(this.username)?(this.userFalg=!0,!0):(e.showToast({title:"请检查手机号",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),this.userFalg=!1,!1)},checkPhone:function(){var t=/^1[3-9]\d{9}$/;return""!=this.phoneNum&&t.test(this.phoneNum)?(this.phoneFalg=!0,!0):(e.showToast({title:"请检查手机号",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),this.phoneFalg=!1,!1)},checkPwd:function(){var t=/^(?![a-zA-Z]+$)(?![0-9]+$)[A-Za-z0-9]{6,15}$/;return""!=this.password&&t.test(this.password)?(this.pwdFalg=!0,!0):(e.showToast({title:"请输入6-15位的字母数字组合",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),this.pwdFalg=!1,!1)},checkCode:function(){return""!=this.smsCode?(this.codeFalg=!0,!0):(this.codeFalg=!1,e.showToast({title:"验证码不能为空",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1)},showPass:function(){return this.isShowPwd?(this.isShowPwd=!1,!1):(this.isShowPwd=!0,!0)},login:function(){var t=this;if(0===this.index){if(!this.checkUser()||!this.checkPwd())return!1;var s=a.default.MD5(this.password).toString(),n=new i(this.username).toString("base64");e.request({url:this.websiteUrl+"/api/login",method:"POST",data:{mobile:n,userPwd:s},success:function(s){if(s.data&&0===s.data.status){t.remPwd.checked?(t.userInfo={userNameStr:t.username,userPwdStr:t.password,pwdFlag:t.remPwd.checked},e.setStorageSync("userValue",t.userInfo)):e.removeStorageSync("userValue");var a=s.data,n=new i(a.user.userPhone,"base64").toString("utf8");if(t.userobj.userPhone=n,t.userobj.userName=a.user.userNickName,t.userobj.userCode=a.user.userInvite,t.userobj.userId=parseInt(a.user.userId),t.userobj.loginToken=a.token,null==a.user.userBlurb?t.userobj.userText="":t.userobj.userText=a.user.userBlurb,""==a.user.userPortrait)t.imgObj.networkImage="",t.imgObj.localImage="/static/touxiang.png",t.$store.commit("storeImage",t.imgObj),t.$store.commit("login",t.userobj),e.navigateBack();else{t.imgObj.networkImage=t.websiteUrl+"/"+a.user.userPortrait;var r=t,u=r.$store.state.userImage.localImage;u&&""!=u&&"/static/touxiang.png"!=u&&e.removeSavedFile({filePath:u,success:function(e){console.log(o(e," at pages\\login\\login.vue:272"))}}),e.downloadFile({url:r.imgObj.networkImage,success:function(t){var s=t.tempFilePath,i=t.statusCode;200==i?e.saveFile({tempFilePath:s,success:function(t){var s=t.savedFilePath;r.imgObj.localImage=s,r.$store.commit("storeImage",r.imgObj),r.$store.commit("login",r.userobj),e.navigateBack()}}):(r.imgObj.localImage="/static/touxiang.png",r.$store.commit("storeImage",r.imgObj),r.$store.commit("login",r.userobj),e.navigateBack())}})}}else e.showToast({title:s.data.message,icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3)},fail:function(){},complete:function(){}})}else{if(!this.checkPhone()||!this.checkCode())return!1;var r=new i(this.phoneNum).toString("base64");e.request({url:this.websiteUrl+"/api/loginsms",method:"POST",data:{mobile:r,smsCode:this.smsCode},success:function(s){if(s.data&&0===s.data.status){var o=s.data,a=new i(o.user.userPhone,"base64").toString("utf8");if(t.userobj.userPhone=a,t.userobj.userName=o.user.userNickName,t.userobj.userCode=o.user.userInvite,t.userobj.userId=parseInt(o.user.userId),t.userobj.loginToken=o.token,null==o.user.userBlurb?t.userobj.userText="":t.userobj.userText=o.user.userBlurb,""==o.user.userPortrait)t.imgObj.networkImage="",t.imgObj.localImage="/static/touxiang.png",t.$store.commit("storeImage",t.imgObj),t.$store.commit("login",t.userobj),e.navigateBack();else{t.imgObj.networkImage=t.websiteUrl+"/"+o.user.userPortrait;var n=t,r=n.$store.state.userImage.localImage;r&&""!=r&&"/static/touxiang.png"!=r&&e.removeSavedFile({filePath:r}),e.downloadFile({url:n.imgObj.networkImage,success:function(t){var s=t.tempFilePath,i=t.statusCode;200==i?e.saveFile({tempFilePath:s,success:function(t){var s=t.savedFilePath;n.imgObj.localImage=s,n.$store.commit("storeImage",n.imgObj),n.$store.commit("login",n.userobj),e.navigateBack()}}):(n.imgObj.localImage="/static/touxiang.png",n.$store.commit("storeImage",n.imgObj),n.$store.commit("login",n.userobj),e.navigateBack())}})}}else e.showToast({title:s.data.message,icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3)},fail:function(){},complete:function(){}})}},sendCode:function(){var t=/^1[3-9]\d{9}$/;if(""==this.phoneNum||!t.test(this.phoneNum))return e.showToast({title:"请检查手机号",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1;this.codeTime=setInterval(this.countDown,1e3);var s=new i(this.phoneNum).toString("base64");e.request({url:this.websiteUrl+"/api/code/sms",method:"POST",data:{mobile:s},success:function(e){console.log(o(e," at pages\\login\\login.vue:423"))},fail:function(){},complete:function(){}})},countDown:function(){this.num--,this.beginFalg=!0,this.timeText=this.num+"s",this.num<=0&&(this.num=60,this.timeText="",this.beginFalg=!1,clearInterval(this.codeTime))}}};t.default=r}).call(this,s("6e42")["default"],s("b639").Buffer,s("0de9")["default"])},"3c84":function(e,t,s){"use strict";s.r(t);var i=s("968e"),o=s("f7d2");for(var a in o)"default"!==a&&function(e){s.d(t,e,function(){return o[e]})}(a);s("6dc9");var n=s("2877"),r=Object(n["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=r.exports},"621a":function(e,t,s){"use strict";(function(e){s("eee4"),s("921b");i(s("66fd"));var t=i(s("3c84"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,s("6e42")["createPage"])},"6dc9":function(e,t,s){"use strict";var i=s("2dc1"),o=s.n(i);o.a},"968e":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];s.d(t,"a",function(){return i}),s.d(t,"b",function(){return o})},f7d2:function(e,t,s){"use strict";s.r(t);var i=s("34ee"),o=s.n(i);for(var a in i)"default"!==a&&function(e){s.d(t,e,function(){return i[e]})}(a);t["default"]=o.a}},[["621a","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/forgetPwd/forgetPwd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/forgetPwd/forgetPwd.js';

define('pages/forgetPwd/forgetPwd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forgetPwd/forgetPwd"],{"25fc":function(t,e,n){"use strict";(function(t){n("eee4"),n("921b");o(n("66fd"));var e=o(n("c717"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4fa3":function(t,e,n){"use strict";var o=n("79cb"),s=n.n(o);s.a},"79cb":function(t,e,n){},"8c7a":function(t,e,n){"use strict";n.r(e);var o=n("de28"),s=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=s.a},"90c7":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})},c717:function(t,e,n){"use strict";n.r(e);var o=n("90c7"),s=n("8c7a");for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);n("4fa3");var a=n("2877"),u=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},de28:function(t,e,n){"use strict";(function(t,o,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("85cd"));function a(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{phoneNum:"",smsCode:"",password:"",confirmPwd:"",phoneFalg:!1,codeFalg:!1,pwdFalg:!1,beginFalg:!1,isSame:!1,sendCodeText:"发送验证码",timeText:"",num:60,system:""}},onShow:function(){this.system=plus.os.name.toUpperCase()},methods:{sendCode:function(){var e=/^1[3-9]\d{9}$/;if(""==this.phoneNum||!e.test(this.phoneNum))return t.showToast({title:"请检查手机号",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1;this.codeTime=setInterval(this.countDown,1e3);var n=new o(this.phoneNum).toString("base64");t.request({url:this.websiteUrl+"/api/code/sms",method:"POST",data:{mobile:n},success:function(t){console.log(s(t," at pages\\forgetPwd\\forgetPwd.vue:72"))},fail:function(){},complete:function(){}})},countDown:function(){this.num--,this.beginFalg=!0,this.timeText=this.num+"s",this.num<=0&&(this.num=60,this.timeText="",this.beginFalg=!1,clearInterval(this.codeTime))},checkPhone:function(){var e=/^1[3-9]\d{9}$/;return""!=this.phoneNum&&e.test(this.phoneNum)?(this.phoneFalg=!0,!0):(this.phoneFalg=!1,t.showToast({title:"请检查手机号",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1)},checkCode:function(){return""!=this.smsCode?(this.codeFalg=!0,!0):(this.codeFalg=!1,t.showToast({title:"验证码不能为空",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1)},checkPwd:function(){var e=/^(?![a-zA-Z]+$)(?![0-9]+$)[A-Za-z0-9]{6,15}$/;return""!=this.password&&e.test(this.password)?(this.pwdFalg=!0,!0):(this.pwdFalg=!1,t.showToast({title:"请输入6-15位的字母数字组合",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1)},checkPwdSame:function(){return""!=this.confirmPwd&&this.password===this.confirmPwd?(this.isSame=!0,!0):(this.isSame=!1,t.showToast({title:"两次密码必须相同",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1)},confirm:function(){if(!(this.checkPhone()&&this.checkPwd()&&this.checkPwdSame()&&this.checkCode()))return!1;var e=i.default.MD5(this.password).toString(),n=i.default.MD5(this.confirmPwd).toString(),s=new o(this.phoneNum).toString("base64");t.request({url:this.websiteUrl+"/api/forget",method:"POST",data:{mobile:s,userPwd:e,smsCode:this.smsCode,confirmUserPwd:n},success:function(e){e.data&&0===e.data.status?(t.showToast({title:"修改成功",mask:!0}),setTimeout(function(){t.hideToast(),t.navigateBack({delta:1,animationType:"slide-in-left"})},1600)):(t.showToast({title:e.data.message,icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3))},fail:function(t){},complete:function(){}})}}};e.default=u}).call(this,n("6e42")["default"],n("b639").Buffer,n("0de9")["default"])}},[["25fc","common/runtime","common/vendor"]]]);
});
require('pages/forgetPwd/forgetPwd.js');
__wxRoute = 'pages/register/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/register/register.js';

define('pages/register/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"1ad1":function(e,t,n){"use strict";(function(e,s,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("85cd"));function a(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{phoneNum:"",smsCode:"",password:"",codeText:"",phoneFalg:!1,codeFalg:!1,pwdFalg:!1,beginFalg:!1,sendCodeText:"发送验证码",timeText:"",num:60,checkFalg:!1,system:""}},onShow:function(){this.system=plus.os.name.toUpperCase()},methods:{sendCode:function(){var t=/^1[3-9]\d{9}$/;if(""==this.phoneNum||!t.test(this.phoneNum))return e.showToast({title:"请检查手机号",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1;this.codeTime=setInterval(this.countDown,1e3);var n=new s(this.phoneNum).toString("base64");e.request({url:this.websiteUrl+"/api/code/sms",method:"POST",data:{mobile:n},success:function(e){console.log(i(e," at pages\\register\\register.vue:77"))},fail:function(){},complete:function(){}})},countDown:function(){this.num--,this.beginFalg=!0,this.timeText=this.num+"s",this.num<0&&(this.num=60,this.timeText="",this.beginFalg=!1,clearInterval(this.codeTime))},checkPhone:function(){var t=/^1[3-9]\d{9}$/;return""!=this.phoneNum&&t.test(this.phoneNum)?(this.phoneFalg=!0,!0):(this.phoneFalg=!1,e.showToast({title:"请检查手机号",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1)},checkCode:function(){return""!=this.smsCode?(this.codeFalg=!0,!0):(this.codeFalg=!1,e.showToast({title:"验证码不能为空",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1)},checkPwd:function(){var t=/^(?![a-zA-Z]+$)(?![0-9]+$)[A-Za-z0-9]{6,15}$/;return""!=this.password&&t.test(this.password)?(this.pwdFalg=!0,!0):(this.pwdFalg=!1,e.showToast({title:"请输入6-15位的字母数字组合",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1)},isAgree:function(){return this.checkFalg?(this.checkFalg=!1,e.showToast({title:"请阅读相关协议并同意",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1):(this.checkFalg=!0,!0)},hasAgree:function(){return!!this.checkFalg},register:function(){if(!(this.checkPhone()&&this.checkCode()&&this.checkPwd()&&this.hasAgree()))return!1;var t=o.default.MD5(this.password).toString(),n=new s(this.phoneNum).toString("base64");e.request({url:this.websiteUrl+"/api/register",method:"POST",data:{mobile:n,userPwd:t,smsCode:this.smsCode,shareCode:this.codeText},success:function(t){t&&0===t.data.status?(e.showToast({title:"注册成功",mask:!0}),setTimeout(function(){e.hideToast(),e.navigateBack({delta:1,animationType:"slide-in-left"})},1600)):(e.showToast({title:t.data.message,icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3))},fail:function(){},complete:function(){}})}}};t.default=u}).call(this,n("6e42")["default"],n("b639").Buffer,n("0de9")["default"])},4549:function(e,t,n){"use strict";(function(e){n("eee4"),n("921b");s(n("66fd"));var t=s(n("4ffe"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"4ffe":function(e,t,n){"use strict";n.r(t);var s=n("a59d"),i=n("ae0a");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("cdb6");var a=n("2877"),u=Object(a["a"])(i["default"],s["a"],s["b"],!1,null,null,null);t["default"]=u.exports},a59d:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i})},aacb:function(e,t,n){},ae0a:function(e,t,n){"use strict";n.r(t);var s=n("1ad1"),i=n.n(s);for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);t["default"]=i.a},cdb6:function(e,t,n){"use strict";var s=n("aacb"),i=n.n(s);i.a}},[["4549","common/runtime","common/vendor"]]]);
});
require('pages/register/register.js');
__wxRoute = 'pages/download/download';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/download/download.js';

define('pages/download/download.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/download/download"],{"17b7":function(e,t,i){"use strict";var n=i("e3c1"),o=i.n(n);o.a},"7b01":function(e,t,i){"use strict";i.r(t);var n=i("996e"),o=i("f701");for(var s in o)"default"!==s&&function(e){i.d(t,e,function(){return o[e]})}(s);i("17b7");var a=i("2877"),l=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=l.exports},"7f15":function(e,t,i){"use strict";(function(e){i("eee4"),i("921b");n(i("66fd"));var t=n(i("7b01"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},"996e":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},d753:function(e,t,i){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{isCancel:!1,downVideo:[],index:0,timer:null,num:0,isSelect:!1,allSelect:"全选",selectedId:0,selectedArr:[]}},methods:{creatView:function(){var e=null;e=new plus.nativeObj.View("control",{top:"0px",left:"0px",height:"44px",width:"100%"},[{tag:"rect",id:"rect",position:{top:"0px",left:"0px",width:"100%",height:"44px"},rectStyles:{color:"rgba(0,0,0,0.5)"}},{tag:"img",id:"img",src:"static/fanhui.png",position:{top:"14px",left:"15px",width:"17px",height:"17px"}}]),e.show(),this.listenerEvent(e)},listenerEvent:function(t){t.setTouchEventRect({top:"0",left:"0",width:"87px",height:"44px"}),t.addEventListener("click",function(t){console.log(e("点击原生控件："+JSON.stringify(t)," at pages\\download\\download.vue:66"))},!1)},creatVideoPlay:function(e){var t=null;t=plus.video.createVideoPlayer("localVideo",{src:e,autoplay:"true","show-fullscreen-btn":"false",position:"absolute"}),t.requestFullScreen(-90),plus.webview.currentWebview().append(t),t.addEventListener("fullscreenchange",function(){t.close()},!1)},video:function(e){if(!this.isCancel){var t=plus.os.name.toUpperCase(),n=e.currentTarget.dataset.str,o=e.currentTarget.dataset.name,s=e.currentTarget.dataset.url,a=parseInt(e.currentTarget.dataset.index),l=parseInt(e.currentTarget.dataset.down),d=this;if(-1!=n.indexOf("个"))i.navigateTo({url:"/pages/download/video/video?name="+o,animationType:"slide-in-right"});else if(-1!=n.indexOf("%"))switch(t){case"ANDROID":if(1==l){var r=plus.android.newObject("com.tjyz.video.download.DownloadTask");plus.android.invoke(r,"pauseDownload"),clearInterval(this.timer),this.$set(this.downVideo[a],"percent","已暂停"),this.$set(this.downVideo[a],"down","0")}else{var c=plus.android.newObject("com.tjyz.video.download.TS");plus.android.invoke(c,"getTSFile","",o,""),this.timer=setInterval(function(){d.polling(a)},1500),this.$set(this.downVideo[a],"down","1")}break;case"IOS":break;default:break}else switch(t){case"ANDROID":this.creatVideoPlay(s);break;case"IOS":break;default:break}}},polling:function(e){var t=plus.os.name.toUpperCase(),i=this.downVideo[e].name,n="";switch(t){case"ANDROID":var o=plus.android.newObject("com.tjyz.video.download.VideoUtils"),s=plus.android.invoke(o,"getProgress",i,n);this.$set(this.downVideo[e],"percent",s),-1!=s.indexOf("B")&&(clearInterval(this.timer),this.$set(this.downVideo[e],"size",s));break;case"IOS":break;default:break}},checkboxChange:function(e){var t=this.downVideo,i=e.detail.value;this.num=i.length,this.selectedArr=i;for(var n=0,o=t.length;n<o;++n){var s=t[n],a=s.name;i.includes(a)?this.$set(s,"checked",!0):this.$set(s,"checked",!1)}this.num<t.length?this.allSelect="全选":this.allSelect="取消全选"},all_select:function(){var e=this.downVideo;if(this.isSelect){if(this.num<this.downVideo.length){this.num=this.downVideo.length,this.selectedArr=[];for(var t=0,i=e.length;t<i;++t){var n=e[t];this.$set(n,"checked",!0),this.selectedArr.push(n.name)}return void(this.allSelect="取消全选")}for(t=0,i=e.length;t<i;++t){var o=e[t];this.$set(o,"checked",!1)}this.num=0,this.isSelect=!1,this.allSelect="全选",this.selectedArr=[]}else{this.selectedArr=[];for(t=0,i=e.length;t<i;++t){var s=e[t];this.$set(s,"checked",!0),this.selectedArr.push(s.name)}this.num=e.length,this.isSelect=!0,this.allSelect="取消全选"}},deleteItem:function(){var e=plus.os.name.toUpperCase(),t=JSON.stringify(this.selectedArr),i="";switch(e){case"ANDROID":var n=plus.android.newObject("com.tjyz.video.download.VideoUtils");plus.android.invoke(n,"deleteFile",t,i);var o=plus.android.newObject("com.tjyz.video.download.VideoUtils"),s=plus.android.invoke(o,"downloadList");this.downVideo=JSON.parse(s);var a=this.$mp.page.$getAppWebview();a.setStyle({titleNView:{autoBackButton:!0}}),a.setTitleNViewButtonStyle(0,{text:"编辑"}),this.isCancel=!1;break;case"IOS":break;default:break}}},onNavigationBarButtonTap:function(){var e=this.$mp.page.$getAppWebview(),t=plus.os.name.toUpperCase();if(this.isCancel){e.setStyle({titleNView:{autoBackButton:!0}}),e.setTitleNViewButtonStyle(0,{text:"编辑"}),this.isCancel=!1,this.num=0,this.isSelect=!1,this.allSelect="全选";for(var i=0,n=this.downVideo.length;i<n;++i){var o=this.downVideo[i];this.$set(o,"checked",!1)}}else switch(e.setStyle({titleNView:{autoBackButton:!1}}),e.setTitleNViewButtonStyle(0,{text:"取消"}),this.isCancel=!0,t){case"ANDROID":for(var s=0;s<this.downVideo.length;s++)if(this.downVideo[s],1==this.downVideo[s].down){var a=plus.android.newObject("com.tjyz.video.download.DownloadTask");plus.android.invoke(a,"pauseDownload"),clearInterval(this.timer),this.$set(this.downVideo[s],"percent","已暂停"),this.$set(this.downVideo[s],"down","0")}break;case"IOS":break;default:break}},onShow:function(){var e=plus.os.name.toUpperCase(),t=this;if("ANDROID"===e){var i=plus.android.newObject("com.tjyz.video.download.VideoUtils"),n=plus.android.invoke(i,"downloadList");this.downVideo=JSON.parse(n);for(var o=0;o<this.downVideo.length;o++)if(1==this.downVideo[o].down){this.index=o,this.timer=setInterval(function(){t.polling(t.index)},1500);break}}else IOS},onUnload:function(){clearInterval(this.timer)},onHide:function(){clearInterval(this.timer)}};t.default=n}).call(this,i("0de9")["default"],i("6e42")["default"])},e3c1:function(e,t,i){},f701:function(e,t,i){"use strict";i.r(t);var n=i("d753"),o=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=o.a}},[["7f15","common/runtime","common/vendor"]]]);
});
require('pages/download/download.js');
__wxRoute = 'pages/collection/collection';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/collection/collection.js';

define('pages/collection/collection.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/collection/collection"],{"0110":function(t,e,i){},"62c3":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},l=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return l})},"71a4":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{isCancel:!1,num:0,isSelect:!1,allSelect:"全选",selectedId:0,unknow:"未知",collectArr:[],selectedArr:[]}},methods:{toMovie:function(e){var i=e.currentTarget.id;this.isCancel||t.navigateTo({url:"/pages/playPage/playPage?vodId="+i,animationType:"slide-in-right"})},checkboxChange:function(t){var e=this.collectArr,i=t.detail.value;this.num=i.length,this.selectedArr=i;for(var n=0,l=e.length;n<l;++n){var s=e[n],r=s.recordId.toString();i.includes(r)?this.$set(s,"checked",!0):this.$set(s,"checked",!1)}this.num<e.length?this.allSelect="全选":this.allSelect="取消全选"},all_select:function(){var t=this.collectArr;if(this.isSelect){if(this.num<this.collectArr.length){this.num=this.collectArr.length,this.selectedArr=[];for(var e=0,i=t.length;e<i;++e){var n=t[e];this.$set(n,"checked",!0),this.selectedArr.push(n.recordId.toString())}return void(this.allSelect="取消全选")}for(e=0,i=t.length;e<i;++e){var l=t[e];this.$set(l,"checked",!1)}this.num=0,this.isSelect=!1,this.allSelect="全选",this.selectedArr=[]}else{this.selectedArr=[];for(e=0,i=t.length;e<i;++e){var s=t[e];this.$set(s,"checked",!0),this.selectedArr.push(s.recordId.toString())}this.num=t.length,this.isSelect=!0,this.allSelect="取消全选"}},deleteItem:function(){var e=this,i=this;this.selectedArr=JSON.stringify(this.selectedArr);var n=this.$store.state.userInfo.loginToken;t.request({url:this.websiteUrl+"/user/del/collect",header:{Authorization:n},method:"POST",data:{collectIdArray:this.selectedArr},success:function(t){t.data&&JSON.parse(e.selectedArr,function(t,e){for(var n=i.collectArr,l=0;l<n.length;l++)n[l].recordId==e&&n.splice(l,1);var s=i.$mp.page.$getAppWebview();s.setStyle({titleNView:{autoBackButton:!0}}),s.setTitleNViewButtonStyle(0,{text:"编辑"}),i.isCancel=!1})},fail:function(){},complete:function(){}})}},onNavigationBarButtonTap:function(){var t=this.$mp.page.$getAppWebview();if(this.isCancel){t.setStyle({titleNView:{autoBackButton:!0}}),t.setTitleNViewButtonStyle(0,{text:"编辑"}),this.isCancel=!1,this.num=0,this.isSelect=!1,this.allSelect="全选";for(var e=0,i=this.collectArr.length;e<i;++e){var n=this.collectArr[e];this.$set(n,"checked",!1)}}else t.setStyle({titleNView:{autoBackButton:!1}}),t.setTitleNViewButtonStyle(0,{text:"取消"}),this.isCancel=!0},onShow:function(){var e=this,i=this.$store.state.userInfo.userId,n=this.$store.state.userInfo.loginToken;t.request({url:this.websiteUrl+"/user/get/collect",header:{Authorization:n},method:"GET",data:{userId:i},success:function(i){if(1001==i.data.status)return t.showToast({title:i.data.message,icon:"none",mask:!0}),void setTimeout(function(){t.hideToast(),t.navigateTo({url:"/pages/login/login",animationType:"slide-in-bottom"})},800);i.data.length>0&&(e.collectArr=i.data)},fail:function(){},complete:function(){}})}};e.default=i}).call(this,i("6e42")["default"])},"80d4":function(t,e,i){"use strict";(function(t){i("eee4"),i("921b");n(i("66fd"));var e=n(i("d70e"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},aeb5:function(t,e,i){"use strict";var n=i("0110"),l=i.n(n);l.a},c39a:function(t,e,i){"use strict";i.r(e);var n=i("71a4"),l=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=l.a},d70e:function(t,e,i){"use strict";i.r(e);var n=i("62c3"),l=i("c39a");for(var s in l)"default"!==s&&function(t){i.d(e,t,function(){return l[t]})}(s);i("aeb5");var r=i("2877"),c=Object(r["a"])(l["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports}},[["80d4","common/runtime","common/vendor"]]]);
});
require('pages/collection/collection.js');
__wxRoute = 'pages/task/my_coin';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/task/my_coin.js';

define('pages/task/my_coin.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/task/my_coin"],{"1c89":function(t,e,n){},3534:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={created:function(e){var n=this,a="";this.$store.state.userInfo.userId&&(a=this.$store.state.userInfo.userId),t.request({url:this.websiteUrl+"/api/growth/list?userId="+a,success:function(t){0==t.data.status&&(n.myCoinData=t.data,t.data.growth.length>0&&(n.myCoinListStatus=!1))}})},methods:{toEarnMoney:function(){t.switchTab({url:"../../pages/tarbar/task/task"})}},data:function(){return{myCoinData:{},myCoinListStatus:!0}}};e.default=n}).call(this,n("6e42")["default"])},"6d2f":function(t,e,n){"use strict";n.r(e);var a=n("aa05"),u=n("73b4");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("7e8e");var s=n("2877"),o=Object(s["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"73b4":function(t,e,n){"use strict";n.r(e);var a=n("3534"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a},"7e8e":function(t,e,n){"use strict";var a=n("1c89"),u=n.n(a);u.a},"83ae":function(t,e,n){"use strict";(function(t){n("eee4"),n("921b");a(n("66fd"));var e=a(n("6d2f"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},aa05:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})}},[["83ae","common/runtime","common/vendor"]]]);
});
require('pages/task/my_coin.js');
__wxRoute = 'pages/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/search/search.js';

define('pages/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"06ca":function(t,a,e){"use strict";var n=e("a421"),i=e.n(n);i.a},"2c74":function(t,a,e){"use strict";e.r(a);var n=e("8289"),i=e("bf89");for(var r in i)"default"!==r&&function(t){e.d(a,t,function(){return i[t]})}(r);e("06ca");var c=e("2877"),u=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=u.exports},8289:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},a11d:function(t,a,e){"use strict";(function(t){e("eee4"),e("921b");n(e("66fd"));var a=n(e("2c74"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},a421:function(t,a,e){},bf89:function(t,a,e){"use strict";e.r(a);var n=e("d34b"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,function(){return n[t]})}(r);a["default"]=i.a},d34b:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{style:{pageHeight:0,contentViewHeight:0},searchArr:[],hasSearch:!1,searchFalg:!1,initArr:[],tabNum:0,itemFalg:!0,unknow:"未知"}},methods:{numChanged:function(t){this.tabNum=t},tabChange:function(t){this.tabNum=t.detail.current},seachText:function(t){var a=t._relatedInfo.anchorTargetText,e=this.$mp.page.$getAppWebview();e.setTitleNViewSearchInputText(a)},toMovieItem:function(a){var e=a.currentTarget.id;t.navigateTo({url:"/pages/playPage/playPage?vodId="+e,animationType:"slide-in-right",animationDuration:300})}},computed:{scrollLeft:function(){return 60*(this.tabNum-1)}},onLoad:function(){var a=this,e=t.getSystemInfoSync();this.style.pageHeight=e.windowHeight,this.style.contentViewHeight=e.windowHeight,t.request({url:this.websiteUrl+"/api/home/searchInit",method:"GET",data:{},success:function(t){a.initArr=t.data},fail:function(){},complete:function(){}})},onNavigationBarSearchInputConfirmed:function(a){var e=this;t.request({url:this.websiteUrl+"/api/home/search",method:"GET",data:{vodName:a.text},success:function(t){null!=t.data.data?(e.searchArr=t.data.data,e.hasSearch=!1,e.searchFalg=!0,e.itemFalg=!1):(e.hasSearch=!0,e.searchFalg=!1,e.itemFalg=!1),e.searchArr=t.data.data},fail:function(){},complete:function(){}})},onNavigationBarButtonTap:function(){t.navigateBack()},onNavigationBarSearchInputChanged:function(a){var e=this;t.request({url:this.websiteUrl+"/api/home/search",method:"GET",data:{vodName:a.text},success:function(t){return null!=t.data.data&&""!==a.text?(e.searchArr=t.data.data,e.hasSearch=!1,e.searchFalg=!0,void(e.itemFalg=!1)):null==t.data.data&&""!==a.text?(e.searchArr=[],e.hasSearch=!0,e.searchFalg=!1,void(e.itemFalg=!1)):(e.searchArr=[],e.hasSearch=!1,e.searchFalg=!1,void(e.itemFalg=!0))},fail:function(){},complete:function(){}})}};a.default=e}).call(this,e("6e42")["default"])}},[["a11d","common/runtime","common/vendor"]]]);
});
require('pages/search/search.js');
__wxRoute = 'pages/playHistory/playHistory';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/playHistory/playHistory.js';

define('pages/playHistory/playHistory.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/playHistory/playHistory"],{"0428":function(t,e,s){"use strict";var l=function(){var t=this,e=t.$createElement;t._self._c},i=[];s.d(e,"a",function(){return l}),s.d(e,"b",function(){return i})},"1c20":function(t,e,s){},"2a9a":function(t,e,s){"use strict";s.r(e);var l=s("0428"),i=s("d7f9");for(var a in i)"default"!==a&&function(t){s.d(e,t,function(){return i[t]})}(a);s("3b90");var r=s("2877"),o=Object(r["a"])(i["default"],l["a"],l["b"],!1,null,null,null);e["default"]=o.exports},"2d53":function(t,e,s){"use strict";(function(t){s("eee4"),s("921b");l(s("66fd"));var e=l(s("2a9a"));function l(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},"3b90":function(t,e,s){"use strict";var l=s("1c20"),i=s.n(l);i.a},"6b1a":function(t,e,s){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l={data:function(){return{isCancel:!1,num:0,isSelect:!1,allSelect:"全选",selectedId:0,selectedArr:[],historyArr:[],localArr:[],localSelect:[],localNum:0}},methods:{changeCheckbox:function(t){var e=this.localArr,s=t.detail.value;this.localNum=s.length,this.localSelect=s;for(var l=0,i=e.length;l<i;++l){var a=e[l],r=a.vodId.toString();s.includes(r)?this.$set(a,"checked",!0):this.$set(a,"checked",!1)}var o=this.localNum+this.num,n=e.length+this.historyArr.length;this.allSelect=o<n?"全选":"取消全选"},toMovie:function(e){var s=e.currentTarget.id;this.isCancel||t.navigateTo({url:"/pages/playPage/playPage?vodId="+s,animationType:"slide-in-right"})},checkboxChange:function(t){var e=this.historyArr,s=t.detail.value;this.num=s.length,this.selectedArr=s;for(var l=0,i=e.length;l<i;++l){var a=e[l],r=a.recordId.toString();s.includes(r)?this.$set(a,"checked",!0):this.$set(a,"checked",!1)}var o=this.localNum+this.num,n=this.localArr.length+e.length;this.allSelect=o<n?"全选":"取消全选"},all_select:function(){var t=this.historyArr,e=this.localArr;if(!(t.length<=0&&e.length<=0))if(this.isSelect){if(this.num<t.length&&e.length<=0){this.num=t.length,this.selectedArr=[];for(var s=0,l=t.length;s<l;++s){var i=t[s];this.$set(i,"checked",!0),this.selectedArr.push(i.recordId.toString())}return void(this.allSelect="取消全选")}if(this.localNum<e.length&&t.length<=0){this.localNum=e.length,this.localSelect=[];for(var a=0,r=e.length;a<r;++a){var o=e[a];this.$set(o,"checked",!0),this.localSelect.push(o.vodId.toString())}return void(this.allSelect="取消全选")}if(this.localNum<e.length||this.num<t.length){this.localNum=e.length,this.num=t.length,this.selectedArr=[],this.localSelect=[];for(var n=0,c=e.length;n<c;++n){var h=e[n];this.$set(h,"checked",!0),this.localSelect.push(h.vodId.toString())}for(var u=0,d=t.length;u<d;++u){var f=t[u];this.$set(f,"checked",!0),this.selectedArr.push(f.recordId.toString())}return void(this.allSelect="取消全选")}for(var g=0,v=t.length;g<v;++g){var p=t[g];this.$set(p,"checked",!1)}for(var y=0,S=e.length;y<S;++y){var m=e[y];this.$set(m,"checked",!1)}this.num=0,this.localNum=0,this.isSelect=!1,this.allSelect="全选",this.selectedArr=[],this.localSelect=[]}else{this.selectedArr=[],this.localSelect=[];for(var A=0,b=t.length;A<b;++A){var N=t[A];this.$set(N,"checked",!0),this.selectedArr.push(N.recordId.toString())}for(var k=0,$=e.length;k<$;++k){var I=e[k];this.$set(I,"checked",!0),this.localSelect.push(I.vodId.toString())}this.num=t.length,this.localNum=e.length,this.isSelect=!0,this.allSelect="取消全选"}},deleteItem:function(){var e=this,l=this;if(this.selectedArr.length>0){this.selectedArr=JSON.stringify(this.selectedArr);var i=this.$store.state.userInfo.loginToken;t.request({url:this.websiteUrl+"/user/del/visit",header:{Authorization:i},method:"POST",data:{visitIdArray:this.selectedArr},success:function(t){if(t.data){JSON.parse(e.selectedArr,function(t,e){for(var s=l.historyArr,i=0;i<s.length;i++)s[i].recordId==e&&s.splice(i,1)});var s=l.$mp.page.$getAppWebview();s.setStyle({titleNView:{autoBackButton:!0}}),s.setTitleNViewButtonStyle(0,{text:"编辑"}),l.isCancel=!1}},fail:function(){},complete:function(){}})}if(this.localSelect.length>0){var a=JSON.stringify(this.localSelect),r=a.replace("[","(").replace("]",")");plus.sqlite.executeSql({name:"98TV",sql:"delete from history where vodId in "+r,success:function(t){console.log(s("executeSql success!"," at pages\\playHistory\\playHistory.vue:239")),JSON.parse(a,function(t,e){for(var s=l.localArr,i=0;i<s.length;i++)s[i].vodId==e&&s.splice(i,1)});var e=l.$mp.page.$getAppWebview();e.setStyle({titleNView:{autoBackButton:!0}}),e.setTitleNViewButtonStyle(0,{text:"编辑"}),l.isCancel=!1},fail:function(t){console.log(s("executeSql failed: "+JSON.stringify(t)," at pages\\playHistory\\playHistory.vue:256"))}})}},isOpen:function(){var t;return t=plus.sqlite.isOpenDatabase({name:"98TV",path:"_doc/test.db"}),!!t},selectSql:function(){var t=this;this.isOpen()||plus.sqlite.openDatabase({name:"98TV",path:"_doc/test.db",success:function(t){console.log(s("openDatabase success!"," at pages\\playHistory\\playHistory.vue:284"))},fail:function(t){console.log(s("openDatabase failed: "+JSON.stringify(t)," at pages\\playHistory\\playHistory.vue:287"))}}),plus.sqlite.selectSql({name:"98TV",sql:"select * from history",success:function(e){console.log(s("selectSql success: "," at pages\\playHistory\\playHistory.vue:295")),e.length>0&&(t.localArr=e)},fail:function(t){console.log(s("selectSql failed: "+JSON.stringify(t)," at pages\\playHistory\\playHistory.vue:301"))}})}},onNavigationBarButtonTap:function(){var t=this.$mp.page.$getAppWebview();if(this.isCancel){t.setStyle({titleNView:{autoBackButton:!0}}),t.setTitleNViewButtonStyle(0,{text:"编辑"}),this.isCancel=!1,this.num=0,this.localNum=0,this.isSelect=!1,this.allSelect="全选";for(var e=0,s=this.historyArr.length;e<s;++e){var l=this.historyArr[e];this.$set(l,"checked",!1)}for(var i=0,a=this.localArr.length;i<a;++i){var r=this.localArr[i];this.$set(r,"checked",!1)}}else t.setStyle({titleNView:{autoBackButton:!1}}),t.setTitleNViewButtonStyle(0,{text:"取消"}),this.isCancel=!0},onShow:function(){var e=this;if(this.selectSql(),this.$store.state.isLogin){var s=this.$store.state.userInfo.userId,l=this.$store.state.userInfo.loginToken;t.request({url:this.websiteUrl+"/user/get/visit",method:"GET",header:{Authorization:l},data:{userId:s},success:function(s){if(1001==s.data.status)return t.showToast({title:s.data.message,icon:"none",mask:!0}),void setTimeout(function(){t.hideToast(),t.navigateTo({url:"/pages/login/login",animationType:"slide-in-bottom"})},800);if(s.data.length>0){e.historyArr=s.data;for(var l=0;l<e.historyArr.length;l++)for(var i=0;i<e.localArr.length;i++)e.localArr[i].vodId==e.historyArr[l].vodId&&e.localArr.splice(i,1)}},fail:function(){},complete:function(){}})}},onBackPress:function(){this.isOpen()&&plus.sqlite.closeDatabase({name:"98TV",success:function(t){console.log(s("closeDatabase success!"," at pages\\playHistory\\playHistory.vue:389"))},fail:function(t){console.log(s("closeDatabase failed: "+JSON.stringify(t)," at pages\\playHistory\\playHistory.vue:392"))}})}};e.default=l}).call(this,s("6e42")["default"],s("0de9")["default"])},d7f9:function(t,e,s){"use strict";s.r(e);var l=s("6b1a"),i=s.n(l);for(var a in l)"default"!==a&&function(t){s.d(e,t,function(){return l[t]})}(a);e["default"]=i.a}},[["2d53","common/runtime","common/vendor"]]]);
});
require('pages/playHistory/playHistory.js');
__wxRoute = 'pages/changePwd/changePwd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/changePwd/changePwd.js';

define('pages/changePwd/changePwd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/changePwd/changePwd"],{"1c17":function(t,e,n){"use strict";var i=n("d8ae"),o=n.n(i);o.a},4110:function(t,e,n){"use strict";n.r(e);var i=n("cabf"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},c7a1:function(t,e,n){"use strict";(function(t){n("eee4"),n("921b");i(n("66fd"));var e=i(n("e0f9"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},cabf:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("85cd"));function o(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{oldPwd:"",newPwd:"",comfirePwd:"",system:""}},onShow:function(){this.system=plus.os.name.toUpperCase()},methods:{checkOld:function(){return""!=this.oldPwd?(this.oldFalg=!0,!0):(this.oldFalg=!1,t.showToast({title:"原密码不能为空",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1)},checkNew:function(){var e=/^(?![a-zA-Z]+$)(?![0-9]+$)[A-Za-z0-9]{6,15}$/;return""!=this.newPwd&&e.test(this.newPwd)?(this.newFlag=!0,!0):(this.newFlag=!1,t.showToast({title:"请输入6-15位的字母数字组合",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1)},checkComfire:function(){return""!=this.comfirePwd&&this.newPwd===this.comfirePwd?(this.comfireFalg=!0,!0):(this.comfireFalg=!1,t.showToast({title:"两次密码必须相同",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1)},submit:function(){if(!(this.checkOld()&&this.checkNew()&&this.checkComfire()))return!1;var e=i.default.MD5(this.oldPwd).toString(),n=i.default.MD5(this.newPwd).toString(),o=i.default.MD5(this.comfirePwd).toString(),a=this.$store.state.userInfo.loginToken;t.request({url:this.websiteUrl+"/api/user/upd",method:"POST",header:{Authorization:a},data:{oldUserPwd:e,userPwd:n,confirmUserPwd:o},success:function(e){e.data&&0===e.data.status?(t.showToast({title:"修改成功",mask:!0}),setTimeout(function(){t.hideToast(),t.redirectTo({url:"/pages/login/login",animationType:"slide-in-left"})},1600)):1001==e.data.status?(t.showToast({title:e.data.message,icon:"none",mask:!0}),setTimeout(function(){t.hideToast(),t.navigateTo({url:"/pages/login/login",animationType:"slide-in-right"})},300)):(t.showToast({title:e.data.message,icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3))},fail:function(){},complete:function(){}})}}};e.default=a}).call(this,n("6e42")["default"])},d8ae:function(t,e,n){},d9a7:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},e0f9:function(t,e,n){"use strict";n.r(e);var i=n("d9a7"),o=n("4110");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("1c17");var s=n("2877"),u=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports}},[["c7a1","common/runtime","common/vendor"]]]);
});
require('pages/changePwd/changePwd.js');
__wxRoute = 'pages/setting/setting';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/setting/setting.js';

define('pages/setting/setting.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting/setting"],{"443c":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return o})},"52f9":function(t,e,s){},"9de7":function(t,e,s){"use strict";var i=s("52f9"),o=s.n(i);o.a},b471:function(t,e,s){"use strict";s.r(e);var i=s("f5f1"),o=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=o.a},b4a2:function(t,e,s){"use strict";(function(t){s("eee4"),s("921b");i(s("66fd"));var e=i(s("edb3"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},edb3:function(t,e,s){"use strict";s.r(e);var i=s("443c"),o=s("b471");for(var n in o)"default"!==n&&function(t){s.d(e,t,function(){return o[t]})}(n);s("9de7");var a=s("2877"),u=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},f5f1:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{version:"1.0.0",storageSize:.3,sizeClass:"KB",isNetDown:{checked:!1},isInfoPush:{checked:!0},allowObj:{},pushtObj:{}}},methods:{network:function(e){var s=this,i=e.target.value,o=this;this.$set(this.isNetDown,"checked",i),e.detail.value?t.showModal({title:"",content:"温馨提示：开启后，运营商网络缓存可能会产生超额流量，确认开启？",showCancel:!0,cancelText:"取消",confirmText:"开启",success:function(t){t.confirm?(s.allowObj.status=1,o.$set(o.isNetDown,"checked",!0),s.$store.commit("allowDown",s.allowObj)):(s.allowObj.status=0,o.$set(o.isNetDown,"checked",!1),s.$store.commit("allowDown",s.allowObj))}}):(this.allowObj.status=0,this.$store.commit("allowDown",this.allowObj))},infoPush:function(e){var s=this,i=e.target.value,o=this;this.$set(this.isInfoPush,"checked",i),e.detail.value?(this.pushtObj.status=1,this.$store.commit("allowPush",this.pushtObj)):t.showModal({title:"",content:"温馨提示：关闭后将无法及时接收到新消息推送，确认关闭？",showCancel:!0,cancelText:"取消",confirmText:"确定",success:function(t){t.confirm?(s.pushtObj.status=0,o.$set(o.isInfoPush,"checked",!1),s.$store.commit("allowPush",s.pushtObj)):(s.pushtObj.status=1,o.$set(o.isInfoPush,"checked",!0),s.$store.commit("allowPush",s.pushtObj))}})},toCode:function(){t.navigateTo({url:"/pages/inviteCode/inviteCode",animationType:"slide-in-right"})},toSecurity:function(){this.$store.state.isLogin?t.navigateTo({url:"/pages/security/security",animationType:"slide-in-right"}):t.navigateTo({url:"/pages/login/login",animationType:"slide-in-right"})},clearStorage:function(){this.storageSize="缓存已清除",this.sizeClass="",t.showToast({title:"清除成功"}),setTimeout(function(){t.hideToast()},600)}},onShow:function(){this.version=plus.storage.getItem("app-id"),Console.log(this.version);var e=t.getStorageInfoSync();this.storageSize=e.currentSize,this.$set(this.isNetDown,"checked",this.$store.state.isDown),this.$set(this.isInfoPush,"checked",this.$store.state.isPush)}};e.default=s}).call(this,s("6e42")["default"])}},[["b4a2","common/runtime","common/vendor"]]]);
});
require('pages/setting/setting.js');
__wxRoute = 'pages/allClass/allClass';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/allClass/allClass.js';

define('pages/allClass/allClass.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/allClass/allClass"],{1902:function(e,t,a){"use strict";a.r(t);var r=a("609d"),o=a("5800");for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);a("28c7");var n=a("2877"),i=Object(n["a"])(o["default"],r["a"],r["b"],!1,null,null,null);t["default"]=i.exports},"28c7":function(e,t,a){"use strict";var r=a("569b"),o=a.n(r);o.a},"2fbd":function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{classId:1,classArr:[],movieArr:[],titleArr:[],areaArr:[],sortArr:[],yearArr:[],langArr:[],overArr:[],rankArr:[],areaText:"",sortText:"",yearText:"",langText:"",overText:"",rankText:"",nums:2,loadMoreText:"加载中...",showLoadMore:!1,showFalg:!0}},onReachBottom:function(){var t=this;console.log(e("onReachBottom"," at pages\\allClass\\allClass.vue:109")),this.showFalg?(this.showLoadMore=!0,this.loadMoreText="加载中...",setTimeout(function(){t.moreData()},300)):this.loadMoreText="我是有底线的!"},methods:{selectArea:function(e){var t=this;this.areaText=e.currentTarget.id,a.request({url:this.websiteUrl+"/api/home/classinfo",method:"POST",data:{typeId:this.classId,vodArea:this.areaText,vodClass:this.sortText,vodYear:this.yearText,vodLang:this.langText,vodIsend:this.overText,otherColumn:this.rankText,pageCount:1},success:function(e){if(e.data.length<=0)return t.movieArr=e.data,t.showLoadMore=!0,void(t.loadMoreText="暂无数据！");t.loadMoreText="",t.movieArr=e.data,t.nums=2,t.showFalg=!0},fail:function(){},complete:function(){}})},selectSort:function(e){var t=this;this.sortText=e.currentTarget.id,a.request({url:this.websiteUrl+"/api/home/classinfo",method:"POST",data:{typeId:this.classId,vodArea:this.areaText,vodClass:this.sortText,vodYear:this.yearText,vodLang:this.langText,vodIsend:this.overText,otherColumn:this.rankText,pageCount:1},success:function(e){if(e.data.length<=0)return t.movieArr=e.data,t.showLoadMore=!0,void(t.loadMoreText="暂无数据！");t.loadMoreText="",t.movieArr=e.data,t.nums=2,t.showFalg=!0},fail:function(){},complete:function(){}})},selectYear:function(e){var t=this;this.yearText=e.currentTarget.id,a.request({url:this.websiteUrl+"/api/home/classinfo",method:"POST",data:{typeId:this.classId,vodArea:this.areaText,vodClass:this.sortText,vodYear:this.yearText,vodLang:this.langText,vodIsend:this.overText,otherColumn:this.rankText,pageCount:1},success:function(e){if(e.data.length<=0)return t.movieArr=e.data,t.showLoadMore=!0,void(t.loadMoreText="暂无数据！");t.loadMoreText="",t.movieArr=e.data,t.nums=2,t.showFalg=!0},fail:function(){},complete:function(){}})},selectLang:function(e){var t=this;this.langText=e.currentTarget.id,a.request({url:this.websiteUrl+"/api/home/classinfo",method:"POST",data:{typeId:this.classId,vodArea:this.areaText,vodClass:this.sortText,vodYear:this.yearText,vodLang:this.langText,vodIsend:this.overText,otherColumn:this.rankText,pageCount:1},success:function(e){if(e.data.length<=0)return t.movieArr=e.data,t.showLoadMore=!0,void(t.loadMoreText="暂无数据！");t.loadMoreText="",t.movieArr=e.data,t.nums=2,t.showFalg=!0},fail:function(){},complete:function(){}})},selectOver:function(e){var t=this;this.overText=e.currentTarget.id,a.request({url:this.websiteUrl+"/api/home/classinfo",method:"POST",data:{typeId:this.classId,vodArea:this.areaText,vodClass:this.sortText,vodYear:this.yearText,vodLang:this.langText,vodIsend:this.overText,otherColumn:this.rankText,pageCount:1},success:function(e){if(e.data.length<=0)return t.movieArr=e.data,t.showLoadMore=!0,void(t.loadMoreText="暂无数据！");t.loadMoreText="",t.movieArr=e.data,t.nums=2,t.showFalg=!0},fail:function(){},complete:function(){}})},selectRank:function(e){var t=this;this.rankText=e.currentTarget.id,a.request({url:this.websiteUrl+"/api/home/classinfo",method:"POST",data:{typeId:this.classId,vodArea:this.areaText,vodClass:this.sortText,vodYear:this.yearText,vodLang:this.langText,vodIsend:this.overText,otherColumn:this.rankText,pageCount:1},success:function(e){if(e.data.length<=0)return t.movieArr=e.data,t.showLoadMore=!0,void(t.loadMoreText="暂无数据！");t.loadMoreText="",t.movieArr=e.data,t.nums=2,t.showFalg=!0},fail:function(){},complete:function(){}})},moreData:function(){var e=this;a.request({url:this.websiteUrl+"/api/home/classinfo",method:"POST",data:{typeId:this.classId,vodArea:this.areaText,vodClass:this.sortText,vodYear:this.yearText,vodLang:this.langText,vodIsend:this.overText,otherColumn:this.rankText,pageCount:this.nums},success:function(t){if(t.data.length>0){for(var a=[],r=0;r<t.data.length;r++)a.push(t.data[r]);e.movieArr=e.movieArr.concat(a),e.nums++}else e.showFalg=!1},fail:function(){},complete:function(){}})},toMovie:function(e){var t=e.currentTarget.id;a.navigateTo({url:"/pages/playPage/playPage?vodId="+t,animationType:"slide-in-right",animationDuration:300})}},onLoad:function(e){var t=this;this.classId=e.id,a.setNavigationBarTitle({title:""});var r=parseInt(this.classId-1);a.request({url:this.websiteUrl+"/api/home/classtype",method:"GET",data:{typeId:this.classId},success:function(e){t.classArr=e.data.classType;for(var o=0;o<t.classArr.length;o++)switch(t.classArr[o].columnType){case"全部地区":t.areaArr.push(t.classArr[o]),t.areaText=t.areaArr[0].columnName;break;case"全部分类":t.sortArr.push(t.classArr[o]),t.sortText=t.sortArr[0].columnName;break;case"全部年份":t.yearArr.push(t.classArr[o]),t.yearText=t.yearArr[0].columnName;break;case"全部语言":t.langArr.push(t.classArr[o]),t.langText=t.langArr[0].columnName;break;case"是否完结":t.overArr.push(t.classArr[o]),t.overText=t.overArr[0].columnName;break;default:t.rankArr.push(t.classArr[o]),t.rankText=t.rankArr[0].columnValueList[0].column;break}t.areaArr.length>0&&t.areaArr[0].columnValueList.length>14&&(t.areaArr[0].columnValueList=t.areaArr[0].columnValueList.slice(0,12)),t.sortArr.length>0&&t.sortArr[0].columnValueList.length>14&&(t.sortArr[0].columnValueList=t.sortArr[0].columnValueList.slice(0,12)),t.yearArr.length>0&&t.yearArr[0].columnValueList.length>14&&(t.yearArr[0].columnValueList=t.yearArr[0].columnValueList.slice(0,12)),t.langArr.length>0&&t.langArr[0].columnValueList.length>14&&(t.langArr[0].columnValueList=t.langArr[0].columnValueList.slice(0,12)),t.overArr.length>0&&t.overArr[0].columnValueList.length>14&&(t.overArr[0].columnValueList=t.overArr[0].columnValueList.slice(0,12)),t.rankArr.length>0&&t.rankArr[0].columnValueList.length>14&&(t.rankArr[0].columnValueList=t.rankArr[0].columnValueList.slice(0,12)),e.data.movie.length>0&&(t.movieArr=e.data.movie[0].modle),t.titleArr=e.data.titleList,a.setNavigationBarTitle({title:t.titleArr[r].name})},fail:function(){},complete:function(){}})},onUnload:function(){this.data=[],this.showLoadMore=!1,this.showFalg=!0,this.nums=2}};t.default=r}).call(this,a("0de9")["default"],a("6e42")["default"])},"569b":function(e,t,a){},5800:function(e,t,a){"use strict";a.r(t);var r=a("2fbd"),o=a.n(r);for(var s in r)"default"!==s&&function(e){a.d(t,e,function(){return r[e]})}(s);t["default"]=o.a},"609d":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return o})},e992:function(e,t,a){"use strict";(function(e){a("eee4"),a("921b");r(a("66fd"));var t=r(a("1902"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])}},[["e992","common/runtime","common/vendor"]]]);
});
require('pages/allClass/allClass.js');
__wxRoute = 'pages/feedback/feedback';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/feedback/feedback.js';

define('pages/feedback/feedback.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/feedback/feedback"],{"061a":function(t,e,n){"use strict";(function(t){n("eee4"),n("921b");i(n("66fd"));var e=i(n("0cf4"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"0a3c":function(t,e,n){},"0cf4":function(t,e,n){"use strict";n.r(e);var i=n("cce8"),o=n("a9fd");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("2f33");var a=n("2877"),u=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},"2f33":function(t,e,n){"use strict";var i=n("0a3c"),o=n.n(i);o.a},"9e30":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{questionArr:[],selectId:"",quesionContent:"",qqNumber:"",eMail:"",showflag:!0,windowSize:null}},methods:{showBtn:function(){this.showflag=!0},hideBtn:function(){this.showflag=!1},selectQus:function(t){this.selectId=t.currentTarget.id},checkMail:function(){this.showflag=!0;var e=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;if(""!=this.eMail&&!e.test(this.eMail))return t.showToast({title:"请重新输入邮箱",icon:"none",mask:!0}),void setTimeout(function(){t.hideToast()},2e3)},confirm:function(){if(this.$store.state.isLogin)return""===this.quesionContent?(t.showToast({title:"详细描述为必填项",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1):void t.request({url:this.websiteUrl+"/api/question/add",method:"POST",header:{Authorization:this.$store.state.userInfo.loginToken},data:{userId:this.$store.state.userInfo.userId,qids:this.selectId,questionDesc:this.quesionContent,qq:this.qqNumber,email:this.eMail},success:function(e){0===e.data.status?(t.showToast({title:"提交成功",mask:!0}),setTimeout(function(){t.hideToast()},2e3)):1001===e.data.status?(t.showToast({title:e.data.message,icon:"none",mask:!0}),setTimeout(function(){t.hideToast(),t.navigateTo({url:"/pages/login/login",animationType:"slide-in-right"})},600)):(t.showToast({title:e.data.message,icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},600))},fail:function(){},complete:function(){}});t.navigateTo({url:"/pages/login/login",animationType:"slide-in-bottom"})}},onLoad:function(){var e=this,n=t.getSystemInfoSync();this.windowSize=n.windowHeight,t.onWindowResize(function(t){t.size.windowHeight<e.windowSize?e.showflag=!1:e.showflag=!0}),t.request({url:this.websiteUrl+"/api/question/type",method:"GET",data:{},success:function(t){e.questionArr=t.data.questionType},fail:function(){},complete:function(){}})}};e.default=n}).call(this,n("6e42")["default"])},a9fd:function(t,e,n){"use strict";n.r(e);var i=n("9e30"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},cce8:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})}},[["061a","common/runtime","common/vendor"]]]);
});
require('pages/feedback/feedback.js');
__wxRoute = 'pages/helpCenter/helpCenter';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/helpCenter/helpCenter.js';

define('pages/helpCenter/helpCenter.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/helpCenter/helpCenter"],{"125b":function(e,t,n){"use strict";n.r(t);var u=n("5f25"),a=n("ec47");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("22c6");var f=n("2877"),c=Object(f["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},"22c6":function(e,t,n){"use strict";var u=n("9d0b"),a=n.n(u);a.a},"2f95":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{tapId:1}},methods:{showMore:function(e){this.tapId=e.currentTarget.dataset.id},toFeed:function(){e.navigateTo({url:"/pages/feedback/feedback",animationType:"slide-in-right"})}}};t.default=n}).call(this,n("6e42")["default"])},"5f25":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})},"9d0b":function(e,t,n){},ec47:function(e,t,n){"use strict";n.r(t);var u=n("2f95"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a},f78f:function(e,t,n){"use strict";(function(e){n("eee4"),n("921b");u(n("66fd"));var t=u(n("125b"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["f78f","common/runtime","common/vendor"]]]);
});
require('pages/helpCenter/helpCenter.js');
__wxRoute = 'pages/editProfile/editProfile';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/editProfile/editProfile.js';

define('pages/editProfile/editProfile.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/editProfile/editProfile"],{"25ac":function(e,t,s){},"2edd":function(e,t,s){"use strict";(function(e){s("eee4"),s("921b");a(s("66fd"));var t=a(s("3d58"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,s("6e42")["createPage"])},3551:function(e,t,s){"use strict";s.r(t);var a=s("a64c"),n=s.n(a);for(var o in a)"default"!==o&&function(e){s.d(t,e,function(){return a[e]})}(o);t["default"]=n.a},"3d58":function(e,t,s){"use strict";s.r(t);var a=s("3e7e"),n=s("3551");for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);s("becf");var i=s("2877"),u=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports},"3e7e":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},n=[];s.d(t,"a",function(){return a}),s.d(t,"b",function(){return n})},a64c:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{user:{userName:"",userPhone:"",userContent:"",userUrl:"/static/touxiang.png"}}},methods:{upload:function(){var t=this,s={},a=this.$store.state.userInfo.loginToken,n=this.$store.state.userInfo.userId;e.chooseImage({count:1,sizeType:["compressed"],success:function(o){var i=o.tempFilePaths;e.uploadFile({url:t.websiteUrl+"/api/user/uploadImage",header:{Authorization:a},filePath:i[0],name:"file",formData:{userId:n},success:function(a){var n=JSON.parse(a.data),o=n.user.userPortrait;s.networkImage=t.websiteUrl+"/"+o,0==n.status?e.downloadFile({url:t.websiteUrl+"/"+o,success:function(a){var n=a.tempFilePath;e.saveFile({tempFilePath:n,success:function(a){var n=a.savedFilePath;s.localImage=n,t.$store.commit("storeImage",s),t.user.userUrl=n,e.showToast({title:"上传成功",mask:!0}),setTimeout(function(){e.hideToast()},2e3)}})}}):1001==a.data.status?(e.showToast({title:a.data.message,icon:"none",mask:!0}),setTimeout(function(){e.hideToast(),e.navigateTo({url:"/pages/login/login",animationType:"slide-in-right"})},300)):(e.showToast({title:n.message,icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3))}})}})},toChangeName:function(){e.navigateTo({url:"/pages/changeName/changeName",animationType:"slide-in-right"})},toSign:function(){e.navigateTo({url:"/pages/autograph/autograph",animationType:"slide-in-right"})}},onShow:function(){this.$set(this.user,"userUrl",this.$store.state.userImage.localImage),this.$set(this.user,"userName",this.$store.state.userInfo.userName),this.$set(this.user,"userPhone",this.$store.state.userInfo.userPhone),this.$set(this.user,"userContent",this.$store.state.userInfo.userText),this.$set(this.user,"userContent",this.$store.state.userInfo.userText)}};t.default=s}).call(this,s("6e42")["default"])},becf:function(e,t,s){"use strict";var a=s("25ac"),n=s.n(a);n.a}},[["2edd","common/runtime","common/vendor"]]]);
});
require('pages/editProfile/editProfile.js');
__wxRoute = 'pages/inviteCode/inviteCode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/inviteCode/inviteCode.js';

define('pages/inviteCode/inviteCode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/inviteCode/inviteCode"],{3009:function(t,e,n){"use strict";var o=n("f464"),i=n.n(o);i.a},"3d90":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{code:"",disabled:!1,placeholder:"填写您的好友邀请码",codeToken:""}},onNavigationBarButtonTap:function(){var e=this;this.$store.state.isLogin?(this.codeToken=this.$store.state.userInfo.loginToken,t.request({url:this.websiteUrl+"/api/shareupd/code/"+this.code,method:"POST",header:{Authorization:this.codeToken},data:{},success:function(n){0===n.data.status?(e.disabled=!0,e.code="",e.placeholder="您已填写，邀请码只能填写一次"):1001==n.data.status&&(t.showToast({title:n.data.message,icon:"none",mask:!0}),setTimeout(function(){t.hideToast(),t.navigateTo({url:"/pages/login/login",animationType:"slide-in-right"})},300))},fail:function(){},complete:function(){}})):t.navigateTo({url:"/pages/login/login",animationType:"slide-in-bottom"})}};e.default=n}).call(this,n("6e42")["default"])},6053:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},7687:function(t,e,n){"use strict";(function(t){n("eee4"),n("921b");o(n("66fd"));var e=o(n("f4c6"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e95e:function(t,e,n){"use strict";n.r(e);var o=n("3d90"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},f464:function(t,e,n){},f4c6:function(t,e,n){"use strict";n.r(e);var o=n("6053"),i=n("e95e");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("3009");var u=n("2877"),s=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports}},[["7687","common/runtime","common/vendor"]]]);
});
require('pages/inviteCode/inviteCode.js');
__wxRoute = 'pages/systemMsg/systemMsg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/systemMsg/systemMsg.js';

define('pages/systemMsg/systemMsg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/systemMsg/systemMsg"],{"1b70":function(e,t,n){"use strict";(function(e){n("eee4"),n("921b");s(n("66fd"));var t=s(n("3c4c"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"23d8":function(e,t,n){"use strict";n.r(t);var s=n("d721"),a=n.n(s);for(var c in s)"default"!==c&&function(e){n.d(t,e,function(){return s[e]})}(c);t["default"]=a.a},"3c4c":function(e,t,n){"use strict";n.r(t);var s=n("cc7f"),a=n("23d8");for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);n("8ace");var i=n("2877"),u=Object(i["a"])(a["default"],s["a"],s["b"],!1,null,null,null);t["default"]=u.exports},"3eec":function(e,t,n){},"8ace":function(e,t,n){"use strict";var s=n("3eec"),a=n.n(s);a.a},cc7f:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return a})},d721:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{deviceid:"",msgArr:[],hasMsg:!0,hasNet:!1,style:{pageHeight:0,contentViewHeight:0}}},onShow:function(){var t=this,s=this.$store.state.deviceId,a=e.getSystemInfoSync();this.style.pageHeight=a.windowHeight,this.style.contentViewHeight=a.windowHeight,e.request({url:this.websiteUrl+"/api/sysmsg/list",method:"GET",data:{deviceId:s},success:function(e){t.msgArr=e.data.list,t.msgArr.length>0?(t.hasMsg=!1,t.hasNet=!1):(t.hasMsg=!0,t.hasNet=!1)},fail:function(){t.hasMsg=!1,t.hasNet=!0},complete:function(a){a.data.count>0&&e.request({url:t.websiteUrl+"/api/sysmsg/upd",method:"POST",data:{deviceId:s},success:function(e){console.log(n(e.data.message," at pages\\systemMsg\\systemMsg.vue:67"))},fail:function(){},complete:function(){}})}})}};t.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["1b70","common/runtime","common/vendor"]]]);
});
require('pages/systemMsg/systemMsg.js');
__wxRoute = 'pages/security/security';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/security/security.js';

define('pages/security/security.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/security/security"],{"0562":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{}},methods:{toChangePhone:function(){n.navigateTo({url:"/pages/changePhone/changePhone",animationType:"slide-in-right"})},toChangePwd:function(){n.navigateTo({url:"/pages/changePwd/changePwd",animationType:"slide-in-right"})}}};e.default=t}).call(this,t("6e42")["default"])},"628b":function(n,e,t){"use strict";(function(n){t("eee4"),t("921b");a(t("66fd"));var e=a(t("9134"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},7190:function(n,e,t){"use strict";t.r(e);var a=t("0562"),u=t.n(a);for(var i in a)"default"!==i&&function(n){t.d(e,n,function(){return a[n]})}(i);e["default"]=u.a},9134:function(n,e,t){"use strict";t.r(e);var a=t("9c76"),u=t("7190");for(var i in u)"default"!==i&&function(n){t.d(e,n,function(){return u[n]})}(i);t("d89a");var o=t("2877"),c=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"9c76":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return u})},ad67:function(n,e,t){},d89a:function(n,e,t){"use strict";var a=t("ad67"),u=t.n(a);u.a}},[["628b","common/runtime","common/vendor"]]]);
});
require('pages/security/security.js');
__wxRoute = 'pages/changePhone/changePhone';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/changePhone/changePhone.js';

define('pages/changePhone/changePhone.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/changePhone/changePhone"],{"2c14":function(e,t,n){"use strict";(function(e,n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{num:60,countdown:"",beginFalg:!1,codeTime:"",timeText:"",codeText:"",newPhone:""}},methods:{sendCode:function(){var t=/^1[3-9]\d{9}$/;if(""==this.phone||!t.test(this.phone))return e.showToast({title:"请检查手机号",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1;this.codeTime=setInterval(this.countDown,1e3);var i=new n(this.phone).toString("base64");e.request({url:this.websiteUrl+"/api/code/sms",method:"POST",data:{mobile:i},success:function(e){console.log(o(e," at pages\\changePhone\\changePhone.vue:57"))},fail:function(){},complete:function(){}})},countDown:function(){this.num--,this.beginFalg=!0,this.timeText=this.num+"s",this.num<=0&&(this.num=60,this.timeText="",this.beginFalg=!1,clearInterval(this.codeTime))},checkCode:function(){return""!=this.codeText||(e.showToast({title:"验证码不能为空",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1)},checkPhone:function(){var t=/^1[3-9]\d{9}$/;return!(""==this.newPhone||!t.test(this.newPhone))||(e.showToast({title:"请检查手机号",icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3),!1)},confirm:function(){var t=this;if(!this.checkCode()||!this.checkPhone())return!1;e.showModal({title:"确认手机号",content:"确认要将手机号修改为"+this.newPhone,showCancel:!0,cancelText:"取消",confirmText:"确定",success:function(o){if(o.confirm){var i=t.$store.state.userInfo,s=i.userId,a=i.loginToken,u=new n(t.phone).toString("base64"),c=new n(t.newPhone).toString("base64");e.request({url:t.websiteUrl+"/api/user/updMobile",method:"POST",header:{Authorization:a},data:{userId:s,mobile:u,smsCode:t.codeText,newMobile:c},success:function(o){if(0==o.data.status){var s=new n(o.data.user.userPhone,"base64").toString("utf8");i.userPhone=s,t.$store.commit("login",i),e.showToast({title:"修改成功",mask:!0}),setTimeout(function(){e.hideToast(),e.navigateBack()},400)}else 1001==o.data.status?(e.showToast({title:o.data.message,icon:"none",mask:!0}),setTimeout(function(){e.hideToast(),e.navigateTo({url:"/pages/login/login",animationType:"slide-in-right"})},300)):(e.showToast({title:o.data.message,icon:"none",mask:!0}),setTimeout(function(){e.hideToast()},2e3))},fail:function(){},complete:function(){}})}},fail:function(){},complete:function(){}})}},computed:{phone:function(){return this.$store.state.userInfo.userPhone}}};t.default=i}).call(this,n("6e42")["default"],n("b639").Buffer,n("0de9")["default"])},3785:function(e,t,n){"use strict";n.r(t);var o=n("2c14"),i=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);t["default"]=i.a},6570:function(e,t,n){},"8b63":function(e,t,n){"use strict";var o=n("6570"),i=n.n(o);i.a},b0c7:function(e,t,n){"use strict";(function(e){n("eee4"),n("921b");o(n("66fd"));var t=o(n("fe9d"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c9db:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},fe9d:function(e,t,n){"use strict";n.r(t);var o=n("c9db"),i=n("3785");for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);n("8b63");var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports}},[["b0c7","common/runtime","common/vendor"]]]);
});
require('pages/changePhone/changePhone.js');
__wxRoute = 'pages/changeName/changeName';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/changeName/changeName.js';

define('pages/changeName/changeName.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/changeName/changeName"],{"0380":function(t,e,n){"use strict";(function(t){n("eee4"),n("921b");a(n("66fd"));var e=a(n("45be"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"0dd4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{username:""}},methods:{checkName:function(){return""!==this.username||(t.showToast({title:"昵称不能为空",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1)}},onLoad:function(){this.username=this.$store.state.userInfo.userName},onNavigationBarButtonTap:function(){var e=this;if(this.checkName()){var n=this.$store.state.userInfo,a=n.userId,o=n.loginToken;t.request({url:this.websiteUrl+"/api/user/updUnick",method:"POST",header:{Authorization:o},data:{userId:a,userNickName:this.username},success:function(a){0==a.data.status?(n.userName=a.data.user.userNickName,e.$store.commit("login",n),t.showToast({title:"修改成功",mask:!0}),setTimeout(function(){t.hideToast(),t.navigateBack()},400)):1001==a.data.status?(t.showToast({title:a.data.message,icon:"none",mask:!0}),setTimeout(function(){t.hideToast(),t.navigateTo({url:"/pages/login/login",animationType:"slide-in-right"})},300)):(t.showToast({title:a.data.message,icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3))},fail:function(){},complete:function(){}})}}};e.default=n}).call(this,n("6e42")["default"])},"45be":function(t,e,n){"use strict";n.r(e);var a=n("c324"),o=n("d938");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("fdaa");var s=n("2877"),u=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},a6b4:function(t,e,n){},c324:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},d938:function(t,e,n){"use strict";n.r(e);var a=n("0dd4"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},fdaa:function(t,e,n){"use strict";var a=n("a6b4"),o=n.n(a);o.a}},[["0380","common/runtime","common/vendor"]]]);
});
require('pages/changeName/changeName.js');
__wxRoute = 'pages/autograph/autograph';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/autograph/autograph.js';

define('pages/autograph/autograph.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/autograph/autograph"],{"30ba":function(t,e,n){"use strict";n.r(e);var a=n("c1d1"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},"358f":function(t,e,n){},"3e2f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},5322:function(t,e,n){"use strict";n.r(e);var a=n("3e2f"),o=n("30ba");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("dc61");var i=n("2877"),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},a6d3:function(t,e,n){"use strict";(function(t){n("eee4"),n("921b");a(n("66fd"));var e=a(n("5322"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c1d1:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{content:""}},onLoad:function(){this.content=this.$store.state.userInfo.userText},onNavigationBarButtonTap:function(){var e=this,n=this.$store.state.userInfo,a=n.userId,o=n.loginToken;t.request({url:this.websiteUrl+"/api/user/updBlurb",method:"POST",header:{Authorization:o},data:{userId:a,userBlurb:this.content},success:function(a){0==a.data.status?(n.userText=a.data.user.userBlurb,e.$store.commit("login",n),t.showToast({title:"保存成功",mask:!0}),setTimeout(function(){t.hideToast(),t.navigateBack()},400)):1001==a.data.status?(t.showToast({title:a.data.message,icon:"none",mask:!0}),setTimeout(function(){t.hideToast(),t.navigateTo({url:"/pages/login/login",animationType:"slide-in-right"})},300)):(t.showToast({title:a.data.message,icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3))},fail:function(){},complete:function(){}})}};e.default=n}).call(this,n("6e42")["default"])},dc61:function(t,e,n){"use strict";var a=n("358f"),o=n.n(a);o.a}},[["a6d3","common/runtime","common/vendor"]]]);
});
require('pages/autograph/autograph.js');
__wxRoute = 'pages/discover/topics/topics_details_comment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/discover/topics/topics_details_comment.js';

define('pages/discover/topics/topics_details_comment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discover/topics/topics_details_comment"],{"047d":function(t,e,n){"use strict";(function(t){n("eee4"),n("921b");o(n("66fd"));var e=o(n("b98a"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"04d4":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})},2470:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("pages/discover/topics/input_detail").then(n.bind(null,"ad2e"))},s=function(){return n.e("pages/playPage/commentItem").then(n.bind(null,"3057"))},i=n("a4b0"),a={data:function(){return{commentListShow:!1,commentId:0,vodId:0,scrollTop:0,style:{pageHeight:0,contentViewHeight:0},commentData:[]}},components:{input_detail:o,commItem:s},onLoad:function(e){var n=JSON.parse(e.commentList);this.commentId=n.commentId,this.commentMid=n.commentMid,this.vodId=n.vodId,n.data.length>0?(this.commentListShow=!1,this.commentData=n.data):this.commentListShow=!0;var o=t.getSystemInfoSync();this.style.pageHeight=o.windowHeight,this.style.contentViewHeight=o.windowHeight-t.getSystemInfoSync().screenWidth/750*110},methods:{toSendMessage:function(e){var n=this,o=this,s={commentId:this.commentId,userId:this.$store.state.userInfo.userId,commentName:this.$store.state.userInfo.userName,commentPid:this.commentId,commentRid:Number(this.vodId),commentContent:e.inputValue};t.request({url:this.websiteUrl+"/api/discover/inscomment",method:"POST",data:s,success:function(t){if(0==t.data.status){var s={commentContent:e.inputValue,commentId:t.data.commentId,commentName:n.$store.state.userInfo.userName,commentObject:[],commentPid:n.commentId,commentTime:i.getNowTime("yyyy-MM-dd hh:mm:ss"),userId:n.$store.state.userInfo.userId,userPortrait:n.$store.state.userImage.localImage};o.commentData.push(s),o.commentListShow=!1}}})}}};e.default=a}).call(this,n("6e42")["default"])},9913:function(t,e,n){},b98a:function(t,e,n){"use strict";n.r(e);var o=n("04d4"),s=n("d9b8");for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);n("e753");var a=n("2877"),c=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},d9b8:function(t,e,n){"use strict";n.r(e);var o=n("2470"),s=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=s.a},e753:function(t,e,n){"use strict";var o=n("9913"),s=n.n(o);s.a}},[["047d","common/runtime","common/vendor"]]]);
});
require('pages/discover/topics/topics_details_comment.js');
__wxRoute = 'pages/download/video/video';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/download/video/video.js';

define('pages/download/video/video.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/download/video/video"],{"0e3a":function(e,t,i){"use strict";i.r(t);var n=i("6c90"),s=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=s.a},1276:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},s=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return s})},2173:function(e,t,i){"use strict";i.r(t);var n=i("1276"),s=i("0e3a");for(var o in s)"default"!==o&&function(e){i.d(t,e,function(){return s[e]})}(o);i("dc36");var a=i("2877"),l=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=l.exports},"6c90":function(e,t,i){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{isCancel:!1,downVideo:[],playFlag:!0,name:"",num:0,isSelect:!1,allSelect:"全选",selectedId:0,selectedArr:[]}},methods:{creatView:function(){var e=null;e=new plus.nativeObj.View("control",{top:"0px",left:"0px",height:"44px",width:"100%"},[{tag:"rect",id:"rect",position:{top:"0px",left:"0px",width:"100%",height:"44px"},rectStyles:{color:"rgba(0,0,0,0.5)"}},{tag:"img",id:"img",src:"static/fanhui.png",position:{top:"14px",left:"15px",width:"17px",height:"17px"}}]),e.show(),this.listenerEvent(e)},listenerEvent:function(t){t.setTouchEventRect({top:"0",left:"0",width:"87px",height:"44px"}),t.addEventListener("click",function(t){console.log(e("点击原生控件："+JSON.stringify(t)," at pages\\download\\video\\video.vue:66"))},!1)},creatVideoPlay:function(e){var t=null;t=plus.video.createVideoPlayer("localVideo",{src:e,autoplay:"true",direction:"-90","show-fullscreen-btn":"false",position:"absolute"}),t.requestFullScreen(-90),plus.webview.currentWebview().append(t),t.addEventListener("fullscreenchange",function(){t.close()},!1)},videoMore:function(e){if(!this.isCancel){var t=e.currentTarget.dataset.url,i=e.currentTarget.dataset.str,n=e.currentTarget.dataset.name,s=plus.os.name.toUpperCase(),o=parseInt(e.currentTarget.dataset.index),a=parseInt(e.currentTarget.dataset.down),l=this;if(-1!=i.indexOf("%"))switch(s){case"ANDROID":if(1==a){var d=plus.android.newObject("com.tjyz.video.download.DownloadTask");plus.android.invoke(d,"pauseDownload"),clearInterval(this.timer),this.$set(this.downVideo[o],"percent","已暂停"),this.$set(this.downVideo[o],"down","0")}else{var r=plus.android.newObject("com.tjyz.video.download.TS");plus.android.invoke(r,"getTSFile","",this.name,n),this.timer=setInterval(function(){l.polling(o)},1500),this.$set(this.downVideo[o],"down","1")}break;case"IOS":break;default:break}else switch(s){case"ANDROID":this.creatVideoPlay(t);break;case"IOS":break;default:break}}},polling:function(e){var t=plus.os.name.toUpperCase(),i=this.name,n=this.downVideo[e].name;switch(t){case"ANDROID":var s=plus.android.newObject("com.tjyz.video.download.VideoUtils"),o=plus.android.invoke(s,"getProgress",i,n);this.$set(this.downVideo[e],"percent",o),-1!=o.indexOf("B")&&(clearInterval(this.timer),this.$set(this.downVideo[e],"size",o));break;case"IOS":break;default:break}},checkboxChange:function(e){var t=this.downVideo,i=e.detail.value;this.num=i.length,this.selectedArr=i;for(var n=0,s=t.length;n<s;++n){var o=t[n],a=o.name;i.includes(a)?this.$set(o,"checked",!0):this.$set(o,"checked",!1)}this.num<t.length?this.allSelect="全选":this.allSelect="取消全选"},all_select:function(){var e=this.downVideo;if(this.isSelect){if(this.num<this.downVideo.length){this.num=this.downVideo.length,this.selectedArr=[];for(var t=0,i=e.length;t<i;++t){var n=e[t];this.$set(n,"checked",!0),this.selectedArr.push(n.name)}return void(this.allSelect="取消全选")}for(t=0,i=e.length;t<i;++t){var s=e[t];this.$set(s,"checked",!1)}this.num=0,this.isSelect=!1,this.allSelect="全选",this.selectedArr=[]}else{this.selectedArr=[];for(t=0,i=e.length;t<i;++t){var o=e[t];this.$set(o,"checked",!0),this.selectedArr.push(o.name)}this.num=e.length,this.isSelect=!0,this.allSelect="取消全选"}},deleteItem:function(){var e=plus.os.name.toUpperCase(),t=[this.name];t=JSON.stringify(t);var i=JSON.stringify(this.selectedArr);switch(e){case"ANDROID":var n=plus.android.newObject("com.tjyz.video.download.VideoUtils"),s=(plus.android.invoke(n,"deleteFile",t,i),plus.android.newObject("com.tjyz.video.download.VideoUtils")),o=plus.android.invoke(s,"downloadList",this.name);this.downVideo=JSON.parse(o);var a=this.$mp.page.$getAppWebview();a.setStyle({titleNView:{autoBackButton:!0}}),a.setTitleNViewButtonStyle(0,{text:"编辑"}),this.isCancel=!1;break;case"IOS":break;default:break}}},onNavigationBarButtonTap:function(){var e=this.$mp.page.$getAppWebview();plus.os.name.toUpperCase();if(this.isCancel){e.setStyle({titleNView:{autoBackButton:!0}}),e.setTitleNViewButtonStyle(0,{text:"编辑"}),this.isCancel=!1,this.num=0,this.isSelect=!1,this.allSelect="全选";for(var t=0,i=this.downVideo.length;t<i;++t){var n=this.downVideo[t];this.$set(n,"checked",!1)}}else{e.setStyle({titleNView:{autoBackButton:!1}}),e.setTitleNViewButtonStyle(0,{text:"取消"}),this.isCancel=!0;for(var s=0;s<this.downVideo.length;s++)if(this.downVideo[s],1==this.downVideo[s].down){var o=plus.android.newObject("com.tjyz.video.download.DownloadTask");plus.android.invoke(o,"pauseDownload"),clearInterval(this.timer),this.$set(this.downVideo[s],"percent","已暂停"),this.$set(this.downVideo[s],"down","0")}}},onLoad:function(e){var t=this;this.name=e.name,i.setNavigationBarTitle({title:this.name});var n=plus.os.name.toUpperCase();if("ANDROID"===n){var s=plus.android.newObject("com.tjyz.video.download.VideoUtils"),o=plus.android.invoke(s,"downloadList",this.name);this.downVideo=JSON.parse(o);for(var a=0;a<this.downVideo.length;a++)if(1==this.downVideo[a].down){this.index=a,this.timer=setInterval(function(){t.polling(t.index)},1500);break}}else IOS},onUnload:function(){clearInterval(this.timer)},onHide:function(){clearInterval(this.timer)}};t.default=n}).call(this,i("0de9")["default"],i("6e42")["default"])},dc36:function(e,t,i){"use strict";var n=i("ecfe"),s=i.n(n);s.a},ecfe:function(e,t,i){},fdf3:function(e,t,i){"use strict";(function(e){i("eee4"),i("921b");n(i("66fd"));var t=n(i("2173"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])}},[["fdf3","common/runtime","common/vendor"]]]);
});
require('pages/download/video/video.js');
__wxRoute = 'pages/download/videoPlay/videoPlay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/download/videoPlay/videoPlay.js';

define('pages/download/videoPlay/videoPlay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/download/videoPlay/videoPlay"],{"24fb":function(t,n,e){},5345:function(t,n,e){"use strict";e.r(n);var o=e("911c"),a=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=a.a},"61f1":function(t,n,e){"use strict";(function(t){e("eee4"),e("921b");o(e("66fd"));var n=o(e("9a08"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"911c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{videoUrl:"http://47.98.171.179:8080/test1/kEzXGr5591023.mp4",showflag:!1}},methods:{quit:function(){plus.screen.lockOrientation("portrait-primary"),t.navigateBack()},showBack:function(){this.showflag=!this.showflag}},onReady:function(){var t=plus.video.getVideoPlayerById("localVideo");t.setStyles({"show-fullscreen-btn":!1})},onShow:function(t){plus.screen.lockOrientation("landscape-primary")},onBackPress:function(){plus.screen.lockOrientation("portrait-primary")}};n.default=e}).call(this,e("6e42")["default"])},"9a08":function(t,n,e){"use strict";e.r(n);var o=e("cbee"),a=e("5345");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("bf6bf");var u=e("2877"),i=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},bf6bf:function(t,n,e){"use strict";var o=e("24fb"),a=e.n(o);a.a},cbee:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})}},[["61f1","common/runtime","common/vendor"]]]);
});
require('pages/download/videoPlay/videoPlay.js');
__wxRoute = 'pages/luckDraw/luckDraw';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/luckDraw/luckDraw.js';

define('pages/luckDraw/luckDraw.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/luckDraw/luckDraw"],{"198f":function(t,e,i){"use strict";(function(t){i("eee4"),i("921b");a(i("66fd"));var e=a(i("1c40"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"1c40":function(t,e,i){"use strict";i.r(e);var a=i("5ff8"),n=i("7591");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("5c3a");var r=i("2877"),u=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"5c3a":function(t,e,i){"use strict";var a=i("f660"),n=i.n(a);n.a},"5ff8":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},7591:function(t,e,i){"use strict";i.r(e);var a=i("fe9c"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},f660:function(t,e,i){},fe9c:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{num:0,prize_list:[{image:"/static/xiexie.png",name:"谢谢参与"},{image:"/static/alljinbi.png",name:"100金币"},{image:"/static/quan.png",name:"1次"},{image:"/static/alljinbi.png",name:"500金币"},{image:"/static/rmb.png",name:"100元现金"},{image:"/static/alljinbi.png",name:"50金币"},{image:"/static/xiexie.png",name:"谢谢参与"},{image:"/static/quan.png",name:"3次"},{image:"/static/rmb.png",name:"50元现金"},{image:"/static/quan.png",name:"2次"},{image:"/static/rmb.png",name:"30元现金"},{image:"/static/alljinbi.png",name:"200金币"}],rotate_angle:0,rotate_transition:"transform 6s ease-in-out",click_flag:!0,rand_circle:10,start_rotating_degree:0,val:"",isPrize:!1,prizeText:"谢谢参与",prizeBtn:"返回抽奖",result_angle:[15,45,75,105,135,165,195,225,255,285,315,345],prize_people:["恭喜DFG225D抽中30元红包","恭喜E42VS22抽中50元红包","恭喜E746A4G抽中100元红包","恭喜ERGA561抽中30元红包","恭喜AG4465S抽中50元红包","恭喜ASDGA16抽中100元红包","恭喜RTJET6H抽中30元红包","恭喜BDG1N64抽中50元红包","恭喜ERYH6ZD抽中100元红包","恭喜F1S6T1B抽中30元红包","恭喜AGE11WE抽中50元红包","恭喜AERG46D抽中100元红包"],autoplay:!1}},methods:{prizeRule:function(){var e=t.getSubNVueById("showRule");e.show("slide-in-top",200),t.$emit("websrc",this.websiteUrl)},rotate_handle:function(){var e=this.$store.state.isLogin;this.$store.state.userInfo.userId;e?this.click_flag&&0!=this.num&&(this.click_flag=!1,this.requestData()):t.navigateTo({url:"/pages/login/login",animationType:"slide-in-bottom"})},rotating:function(){var t,e=5;t=this.val;var i=this.start_rotating_degree+360*this.rand_circle+this.result_angle[t]-this.start_rotating_degree%360;this.start_rotating_degree=i,this.rotate_angle="rotate("+i+"deg)";var a=this;setTimeout(function(){a.click_flag=!0,a.game_over()},1e3*e+1500)},game_over:function(){"谢谢参与"==this.prize_list[this.val].name?this.isPrize=!1:this.isPrize=!0;var e=t.getSubNVueById("hasPrize");e.show("slide-in-top",200),t.$emit("is-prize",this.isPrize),this.requestTimer()},requestData:function(){var e=this,i=this.$store.state.userInfo.userId;t.request({url:this.websiteUrl+"/api/lottery/getprize",method:"GET",data:{userId:i},success:function(t){0==t.data.status?e.val=t.data.result:e.val=11,e.rotating()},fail:function(){},complete:function(){}})},requestTimer:function(){var e=this,i=this.$store.state.userInfo.userId;i||(i=""),t.request({url:this.websiteUrl+"/api/task/lotterycount",method:"GET",data:{userId:i},success:function(t){0==t.data.status&&(e.num=t.data.result)},fail:function(){},complete:function(){}})},requestPrize:function(){var e=this;t.request({url:this.websiteUrl+"/api/lottery/prizes",method:"GET",data:{},success:function(t){0==t.data.status&&(e.prize_list=t.data.result)},fail:function(){},complete:function(){}})}},onShow:function(){this.requestTimer(),this.autoplay=!this.autoplay},onHide:function(){this.autoplay=!this.autoplay},onLoad:function(){this.requestPrize()},onUnload:function(){this.autoplay=!this.autoplay}};e.default=i}).call(this,i("6e42")["default"])}},[["198f","common/runtime","common/vendor"]]]);
});
require('pages/luckDraw/luckDraw.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

