'use strict';var wasmImports = {
Web:{
win_get0:(p)=>window[p],
get0:(o,p)=>o[p],
fromChars:(v)=>{v=v[2];var s='';for(var i=0;i<v.length;i++){s+=String.fromCharCode(v[i]);}return s},
invoke0:(o,m,p1)=>o[m](p1)
},
NonGC:{
array_new_u16:(l)=>Object.seal({0:1636,1:0,2:Object.seal(new Array(l).fill(null))}),
array_set_sun_misc_FDBigInteger:(a,i,v)=>a[2][i]=v,
new_java_lang_UnsupportedOperationException:() => Object.seal({0:10376,1:0,2:null,3:null,4:null,5:null}),
new_java_lang_ThreadLocal:() => Object.seal({0:4524,1:0,2:0}),
array_set_i64:(a,i,v)=>a[2][i]=v,
set_f64:(a,v,i) => a[i]=v,
identityHashCode:(o)=>{var h=o[1];while(h==0){o[1]=h=Math.round((Math.random()-0.5)*0xffff);}return h},
new_sun_misc_FloatingDecimal$1:() => Object.seal({0:11424,1:0,2:0}),
array_new_f32:(l)=>Object.seal({0:15720,1:0,2:new Float32Array(l)}),
array_new_sun_misc_FDBigInteger:(l)=>Object.seal({0:8360,1:0,2:Object.seal(new Array(l).fill(null))}),
array_set_java_io_ObjectStreamField:(a,i,v)=>a[2][i]=v,
new_jdk_internal_misc_TerminatingThreadLocal$1:() => Object.seal({0:11676,1:0,2:0}),
new_java_lang_StringIndexOutOfBoundsException:() => Object.seal({0:2152,1:0,2:null,3:null,4:null,5:null}),
array_new_i16:(l)=>Object.seal({0:1692,1:0,2:new Int16Array(l)}),
array_set_java_util_Hashtable$Entry:(a,i,v)=>a[2][i]=v,
array_new_bool:(l)=>Object.seal({0:15664,1:0,2:Object.seal(new Array(l).fill(null))}),
new_java_util_IdentityHashMap$EntryIterator$Entry:() => Object.seal({0:21400,1:0,2:0,3:null}),
new_java_lang_InternalError:() => Object.seal({0:15776,1:0,2:null,3:null,4:null,5:null}),
array_new_java_lang_StackTraceElement:(l)=>Object.seal({0:3396,1:0,2:Object.seal(new Array(l).fill(null))}),
array_get_java_lang_Class:(a,i)=>a[2][i],
new_java_lang_String:() => Object.seal({0:632,1:0,2:null,3:0,4:null}),
get_externref:(a,i) => a[i],
new_java_util_Collections$UnmodifiableRandomAccessList:() => Object.seal({0:5524,1:0,2:null,3:null}),
new_java_math_BigInteger:() => Object.seal({0:12532,1:0,2:0,3:null,4:0,5:0,6:0}),
new_java_lang_Thread$WeakClassKey:() => Object.seal({0:9332,1:0,2:null,3:null,4:null,5:0}),
new_java_lang_AssertionError:() => Object.seal({0:5292,1:0,2:null,3:null,4:null,5:null}),
new_de_inetsoftware_jwebassembly_api_java_security_ReplacementForAccessControlContext:() => Object.seal({0:9104,1:0}),
new_java_lang_ThreadLocal$ThreadLocalMap$Entry:() => Object.seal({0:7696,1:0,2:null,3:null,4:null,5:null}),
new_java_util_Collections$EmptyMap:() => Object.seal({0:11076,1:0,2:null,3:null}),
new_de_inetsoftware_jwebassembly_web_dom_HTMLButtonElement:() => Object.seal({0:1240,1:0,2:null}),
array_len:(a)=>a[2].length,
new_java_lang_Thread$1:() => Object.seal({0:9928,1:0,2:null}),
new_java_lang_RuntimePermission:() => Object.seal({0:8676,1:0,2:null,3:0,4:null,5:0}),
new_java_lang_ref_ReferenceQueue$Lock:() => Object.seal({0:10152,1:0}),
array_new_java_lang_ThreadLocal$ThreadLocalMap$Entry:(l)=>Object.seal({0:8136,1:0,2:Object.seal(new Array(l).fill(null))}),
new_java_util_Collections$EmptyListIterator:() => Object.seal({0:20316,1:0}),
new_java_lang_Thread:() => Object.seal({0:7332,1:0,2:null,3:0,4:0,5:0,6:null,7:null,8:null,9:null,10:null,11:null,12:0n,13:0n,14:0,15:null}),
array_get_i64:(a,i)=>a[2][i],
array_set_java_lang_Object:(a,i,v)=>a[2][i]=v,
array_new_java_math_BigInteger:(l)=>Object.seal({0:14780,1:0,2:Object.seal(new Array(l).fill(null))}),
array_set_java_lang_Class:(a,i,v)=>a[2][i]=v,
new_de_inetsoftware_jwebassembly_web_dom_HTMLAnchorElement:() => Object.seal({0:1008,1:0,2:null}),
new_de_inetsoftware_jwebassembly_web_dom_HTMLCanvasElement:() => Object.seal({0:1356,1:0,2:null}),
new_sun_reflect_ReflectionFactory$GetReflectionFactoryAction:() => Object.seal({0:18468,1:0}),
new_java_util_Hashtable$EntrySet:() => Object.seal({0:12920,1:0,2:null}),
new_java_util_IdentityHashMap$KeyIterator:() => Object.seal({0:20780,1:0,2:0,3:0,4:0,5:0,6:null,7:null,8:null}),
get_f32:(a,i) => a[i],
new_sun_misc_FDBigInteger:() => Object.seal({0:7868,1:0,2:null,3:0,4:0,5:0}),
new_java_lang_CloneNotSupportedException:() => Object.seal({0:15908,1:0,2:null,3:null,4:null,5:null}),
new_java_util_Collections$SetFromMap:() => Object.seal({0:17656,1:0,2:null,3:null}),
new_java_math_MutableBigInteger:() => Object.seal({0:14892,1:0,2:null,3:0,4:0}),
array_set_java_math_BigInteger:(a,i,v)=>a[2][i]=v,
new_java_lang_IllegalArgumentException:() => Object.seal({0:2908,1:0,2:null,3:null,4:null,5:null}),
new_java_util_HashMap$KeySet:() => Object.seal({0:19356,1:0,2:null}),
new_java_util_concurrent_ConcurrentHashMap:() => Object.seal({0:11788,1:0,2:null,3:null,4:null,5:null,6:0,7:0,8:0,9:0}),
array_new__Ljava_math_BigInteger:(l)=>Object.seal({0:15484,1:0,2:Object.seal(new Array(l).fill(null))}),
array_get_java_lang_Object:(a,i)=>a[2][i],
new_java_util_AbstractList$Itr:() => Object.seal({0:13180,1:0,2:0,3:0,4:0,5:null}),
array_get_java_util_HashMap$Node:(a,i)=>a[2][i],
new_java_util_IdentityHashMap$KeySet:() => Object.seal({0:19724,1:0,2:null}),
new_java_util_ArrayList$Itr:() => Object.seal({0:16220,1:0,2:0,3:0,4:0,5:null}),
array_new_java_lang_Throwable:(l)=>Object.seal({0:5164,1:0,2:Object.seal(new Array(l).fill(null))}),
new_de_inetsoftware_jwebassembly_web_dom_HTMLDivElement:() => Object.seal({0:1472,1:0,2:null}),
new_java_lang_Boolean:() => Object.seal({0:9448,1:0,2:0}),
new_java_util_NoSuchElementException:() => Object.seal({0:16364,1:0,2:null,3:null,4:null,5:null}),
new_sun_misc_FloatingDecimal$BinaryToASCIIBuffer:() => Object.seal({0:7156,1:0,2:0,3:0,4:0,5:0,6:null,7:null,8:0,9:0}),
new_de_inetsoftware_jwebassembly_web_dom_Text:() => Object.seal({0:520,1:0,2:null}),
set_i32:(a,v,i) => a[i]=v,
array_new_java_lang_Object:(l)=>Object.seal({0:5420,1:0,2:Object.seal(new Array(l).fill(null))}),
new_java_util_HashMap$EntrySet:() => Object.seal({0:19540,1:0,2:null}),
new_sun_reflect_ReflectionFactory:() => Object.seal({0:18564,1:0}),
new_sun_misc_FloatingDecimal$ExceptionalBinaryToASCIIBuffer:() => Object.seal({0:11316,1:0,2:null,3:0}),
new_java_util_HashMap$KeyIterator:() => Object.seal({0:20448,1:0,2:null,3:null,4:0,5:0,6:null,7:null}),
array_get_f64:(a,i)=>a[2][i],
new_de_inetsoftware_jwebassembly_web_dom_HTMLElement:() => Object.seal({0:408,1:0,2:null}),
new_java_util_Hashtable$Entry:() => Object.seal({0:6796,1:0,2:0,3:null,4:null,5:null}),
new_java_lang_ArrayIndexOutOfBoundsException:() => Object.seal({0:14644,1:0,2:null,3:null,4:null,5:null}),
array_get_java_math_BigInteger:(a,i)=>a[2][i],
new_java_lang_ref_ReferenceQueue$Null:() => Object.seal({0:12084,1:0,2:null,3:null,4:0n}),
new_java_util_AbstractList$ListItr:() => Object.seal({0:17480,1:0,2:0,3:0,4:0,5:null,6:null}),
get_i32:(a,i) => a[i],
new_de_inetsoftware_jwebassembly_web_dom_Document:() => Object.seal({0:288,1:0,2:null}),
new_de_inetsoftware_jwebassembly_web_dom_HTMLAreaElement:() => Object.seal({0:1124,1:0,2:null}),
new_java_util_IdentityHashMap:() => Object.seal({0:16740,1:0,2:null,3:null,4:null,5:0,6:0,7:null}),
new_java_util_Hashtable$KeySet:() => Object.seal({0:18872,1:0,2:null}),
new_java_util_ArrayList$ListItr:() => Object.seal({0:19056,1:0,2:0,3:0,4:0,5:null,6:null}),
new_java_lang_ThreadLocal$ThreadLocalMap:() => Object.seal({0:7560,1:0,2:null,3:0,4:0}),
ref_eq:(a,b) => a === b,
new_java_lang_IndexOutOfBoundsException:() => Object.seal({0:2456,1:0,2:null,3:null,4:null,5:null}),
new_java_util_Collections$UnmodifiableCollection$1:() => Object.seal({0:19232,1:0,2:null,3:null}),
new_java_util_HashMap$EntryIterator:() => Object.seal({0:20612,1:0,2:null,3:null,4:0,5:0,6:null,7:null}),
array_get_java_util_Hashtable$Entry:(a,i)=>a[2][i],
array_new_java_util_HashMap$Node:(l)=>Object.seal({0:16956,1:0,2:Object.seal(new Array(l).fill(null))}),
new_java_util_Collections$EmptyIterator:() => Object.seal({0:16632,1:0}),
array_set__Ljava_math_BigInteger:(a,i,v)=>a[2][i]=v,
array_new_java_util_Hashtable$Entry:(l)=>Object.seal({0:6932,1:0,2:Object.seal(new Array(l).fill(null))}),
array_new_java_io_ObjectStreamField:(l)=>Object.seal({0:4344,1:0,2:Object.seal(new Array(l).fill(null))}),
new_java_lang_NumberFormatException:() => Object.seal({0:14276,1:0,2:null,3:null,4:null,5:null}),
new_java_lang_String$CaseInsensitiveComparator:() => Object.seal({0:4400,1:0}),
array_new_i8:(l)=>Object.seal({0:952,1:0,2:new Uint8Array(l)}),
array_new_i64:(l)=>Object.seal({0:7812,1:0,2:new BigInt64Array(l)}),
new_java_lang_IllegalStateException:() => Object.seal({0:9692,1:0,2:null,3:null,4:null,5:null}),
new_java_util_Collections$UnmodifiableList$1:() => Object.seal({0:20164,1:0,2:null,3:0,4:null}),
new_java_util_IdentityHashMap$EntrySet:() => Object.seal({0:19980,1:0,2:null}),
set_f32:(a,v,i) => a[i]=v,
new_java_util_Collections$EmptyList:() => Object.seal({0:10736,1:0,2:0}),
new_java_util_Properties:() => Object.seal({0:3960,1:0,2:null,3:0,4:0,5:0,6:0,7:null,8:null,9:null,10:null}),
array_get_java_lang_ThreadLocal$ThreadLocalMap$Entry:(a,i)=>a[2][i],
new_java_lang_StringBuilder:() => Object.seal({0:2288,1:0,2:null,3:0}),
new_java_lang_reflect_ReflectAccess:() => Object.seal({0:18640,1:0}),
new_java_util_Collections$SynchronizedSet:() => Object.seal({0:14020,1:0,2:null,3:null}),
array_new_java_lang_Class:(l)=>Object.seal({0:13324,1:0,2:Object.seal(new Array(l).fill(null))}),
array_set_java_lang_String:(a,i,v)=>a[2][i]=v,
array_set_java_lang_ThreadLocal$ThreadLocalMap$Entry:(a,i,v)=>a[2][i]=v,
new_java_util_Collections$EmptySet:() => Object.seal({0:10508,1:0}),
array_new_f64:(l)=>Object.seal({0:15148,1:0,2:new Float64Array(l)}),
array_set_f64:(a,i,v)=>a[2][i]=v,
new_java_util_Collections$UnmodifiableList:() => Object.seal({0:5724,1:0,2:null,3:null}),
new_java_lang_OutOfMemoryError:() => Object.seal({0:3504,1:0,2:null,3:null,4:null,5:null}),
new_java_util_HashMap$Node:() => Object.seal({0:16496,1:0,2:0,3:null,4:null,5:null}),
new_java_util_IdentityHashMap$EntryIterator:() => Object.seal({0:20952,1:0,2:0,3:0,4:0,5:0,6:null,7:null,8:null,9:null}),
new_java_util_ConcurrentModificationException:() => Object.seal({0:17228,1:0,2:null,3:null,4:null,5:null}),
new_java_util_concurrent_atomic_AtomicInteger:() => Object.seal({0:5916,1:0,2:0}),
array_new_i32:(l)=>Object.seal({0:2852,1:0,2:new Int32Array(l)}),
array_new_java_lang_String:(l)=>Object.seal({0:14836,1:0,2:Object.seal(new Array(l).fill(null))}),
array_get_sun_misc_FDBigInteger:(a,i)=>a[2][i],
new_sun_misc_FloatingDecimal$PreparedASCIIToBinaryBuffer:() => Object.seal({0:11536,1:0,2:0,3:0}),
new_java_lang_ref_ReferenceQueue:() => Object.seal({0:9176,1:0,2:null,3:null,4:0n}),
new_java_lang_NullPointerException:() => Object.seal({0:6664,1:0,2:null,3:null,4:null,5:null}),
new_java_lang_ArithmeticException:() => Object.seal({0:15352,1:0,2:null,3:null,4:null,5:null}),
new_java_util_HashMap$TreeNode:() => Object.seal({0:17012,1:0,2:0,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:0}),
set_i64:(a,v,i) => a[i]=v,
get_anyref:(a,i) => a[i],
array_get__Ljava_math_BigInteger:(a,i)=>a[2][i],
new_java_lang_Object:() => Object.seal({0:780,1:0}),
set_anyref:(a,v,i) => a[i]=v,
array_get_i32:(a,i)=>a[2][i],
array_get_java_lang_reflect_Type:(a,i)=>a[2][i],
array_set_java_util_HashMap$Node:(a,i,v)=>a[2][i]=v,
array_get_java_lang_String:(a,i)=>a[2][i],
array_set_i32:(a,i,v)=>a[2][i]=v,
new_java_util_Hashtable$Enumerator:() => Object.seal({0:17848,1:0,2:null,3:0,4:null,5:null,6:0,7:0,8:0,9:null}),
get_i64:(a,i) => a[i],
new_java_io_ObjectStreamField:() => Object.seal({0:4200,1:0,2:null,3:null,4:null,5:0,6:null,7:0}),
new_java_util_ArrayList:() => Object.seal({0:4908,1:0,2:0,3:null,4:0}),
new_java_lang_Class:() => Object.seal({0:4700,1:0,2:0,3:0}),
new_java_lang_IllegalThreadStateException:() => Object.seal({0:9556,1:0,2:null,3:null,4:null,5:null})
},
Object:{
clone:(val)=>Object.assign({},val)
},
Math:Math,
System:{
arraycopy:(src,srcPos,dest,destPos,length)=>{src=src[2];dest=dest[2];if(destPos<srcPos){for (var i=0;i<length;i++)dest[i+destPos]=src[i+srcPos];}else{for (var i=length-1;i>=0;i--)dest[i+destPos]=src[i+srcPos];}}
}
};
if (typeof module !== 'undefined') module.exports = wasmImports;