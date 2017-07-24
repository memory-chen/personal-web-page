<template>
    <div id="main" style="width: 100px;height: 100px; margin-left:-10px">
    </div>
</template>

<script>
import echarts from 'echarts'
var labelTop = {
    normal: {
        label: {
            show: true,
            position: 'center',
            formatter: '{b}',
            textStyle: {
                baseline: 'bottom'
            }
        },
        labelLine: {
            show: false
        }
    }
};
var labelFromatter = {
    normal: {
        label: {
            formatter: function (params) {
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline: 'top'
            }
        }
    },
}
var labelBottom = {
    normal: {
        color: '#ccc',
        label: {
            show: true,
            position: 'center'
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [20, 35];
export default {
    data() {
        return {
            charts: '',
            opinionData: [
                {name:'', value:this.valueKey, itemStyle : labelBottom},
                {name:'', value:35,itemStyle : labelTop}
            ]
        }
    },
    methods: {
        drawPie(id) {
            this.charts = echarts.init(document.getElementById(id))
            this.charts.setOption({
                legend: {
                    x: 'center',
                    y: 'center',
                    data: [
                        ''
                    ]
                },
                series: [
                    {
                        type: 'pie',
                        // center: ['10%', '30%'],
                        radius: radius,
                        x: '0%', // for funnel
                        itemStyle: labelFromatter,
                        data: this.opinionData
                    }
                ]
            })
        }
    },
    //调用
    mounted() {
        this.$nextTick(function () {
            this.drawPie('main')
        })
        this.init = function (dom, theme) {
            var zrender = require('zrender');
            if (zrender.version.replace('.', '') - 0 < self.dependencies.zrender.replace('.', '') - 0) {
                console.error('ZRender ' + zrender.version + ' is too old for ECharts ' + self.version + '. Current version need ZRender ' + self.dependencies.zrender + '+');
            }
            dom = dom instanceof Array ? dom[0] : dom;//如果是一组id相同的，则会取第一个
            var key = dom.getAttribute(DOM_ATTRIBUTE_KEY);//comment by danielinbiti这里可以看出，自己可以对dom节点增加属性，从而定义key。定义后这个key不能改，不然instances无法销毁
            if (!key) {
                key = _idBase++;
                dom.setAttribute(DOM_ATTRIBUTE_KEY, key);
            }
            if (_instances[key]) {
                _instances[key].dispose();
            }
            _instances[key] = new Echarts(dom);//这里做了事件监听，组件属性初始化，记录dom成全局变量。
            _instances[key].id = key;
            _instances[key].canvasSupported = _canvasSupported;
            _instances[key].setTheme(theme);
            return _instances[key];
        };
    }
}
</script>
