(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{305:function(t,e,n){"use strict";n.r(e);var s=n(0),_=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h4",{staticStyle:{color:"red"}},[t._v("方法一：")]),t._v(" "),n("p",[t._v('在最后加上语句： os.system("pause")')]),t._v(" "),n("p",[t._v("但是这个不一定有用，如果前面的代码中有发生异常，我们看到的效果也是直接一闪而过。")]),t._v(" "),n("p",[t._v("解决方法：")]),t._v(" "),n("p",[t._v("在可能出现异常的语句中加上 python 的异常捕捉语句，try except 如下所示：\nif __name__ == \"__main__\":\ntry:\n#这里 是你觉得可能出现异常的代码块\nexcept Exception:\nprint('Oops,出现问题了。')\nos.system('pause')\nfinally:\nos.system('pause')")]),t._v(" "),n("h4",{staticStyle:{color:"red"}},[t._v("方法二：")]),t._v(" "),n("p",[t._v("在程序最后加入**input()**函数，这里默认你的程序没有异常，在运行完以后，控制台就自动关了。在程序最后加入input()函数相当于程序等待输入，还没有结束，但当程序有问题的时候，这种方法就不适用了。")]),t._v(" "),n("h4",{staticStyle:{color:"red"}},[t._v("方法三：")]),t._v(" "),n("p",[t._v("使用time.sleep()函数")])])},[],!1,null,null,null);e.default=_.exports}}]);