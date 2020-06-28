<template>
  <div>
    <!-- 单选框el-radio -->
    <div>
      <el-radio v-model="radio" label="1" border>备选项1</el-radio>
      <el-radio v-model="radio" label="3" disabled>备选项3</el-radio>
      <el-radio-group v-model="radio">
        <el-radio :label="1">备选项1</el-radio>
        <el-radio :label="2">备选项2</el-radio>
        <el-radio :label="3">备选项3</el-radio>
      </el-radio-group>
      <el-radio-group v-model="radio2" size="small">
        <el-radio-button label="SH"></el-radio-button>
        <el-radio-button label="BJ"></el-radio-button>
        <el-radio-button label="SZ"></el-radio-button>
      </el-radio-group>
    </div>

    <!-- 复选框el-checkbox -->
    <div>
      <div style="border: 1px solid; margin-bottom:5px">
        <el-checkbox border true-label="true-label" false-label="false-label" @change="cha">备选项1</el-checkbox>
        <el-checkbox v-model="checked" disabled border>备选项2</el-checkbox>
        <el-checkbox-group v-model="valList" :min="1" :max="2" size="small">
          <el-checkbox-button label="section2"></el-checkbox-button>
          <el-checkbox-button label="section3" disabled></el-checkbox-button>
          <el-checkbox-button label="section1"></el-checkbox-button>
          <span style="font-size:12px;">含有选中数量限制</span>
        </el-checkbox-group>
      </div>
      <div style="border: 1px solid; margin-bottom:5px">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox-button  label="上海"></el-checkbox-button>
          <el-checkbox v-for="city in cityOptions" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    
    <!-- 输入框input + 选择框select -->
    <div>
      <div style="white-space: nowrap; margin-top: 1rem;">input——可添加尺寸属性size="medium/small/mini"</div>
      <el-input placeholder="必须带有v-model，否则内容不变" v-model="input"></el-input>
      <el-input placeholder="带清空标志的input" v-model="input" clearable></el-input>
      <el-input placeholder="带显示密码标志的input" v-model="pwd" show-password></el-input>
      <el-input placeholder="带禁用标志的input" v-model="input" disabled type="textarea" rows="3"></el-input>
      <el-input placeholder="高度适应内容+字符长度限制" v-model="input" type="textarea" autosize maxlength="10"></el-input>
      <el-input placeholder="高度适应内容，带最大最小行限制" v-model="input" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
      <el-input suffix-icon="el-icon-date" v-model="input" style="width:25%;" placeholder="图标属性方式"></el-input>
      <el-input v-model="input" style="width:25%;" placeholder="图标slot方式"><i slot="suffix" class="el-input__icon el-icon-date"></i></el-input>
      <span>{{ input }}</span>
      <el-input placeholder="复合型输入框" v-model="input">
        <template slot="prepend">Http://</template>
      </el-input>
      <el-input placeholder="复合型输入框" v-model="input">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="ct"></el-option>
          <el-option label="订单号" value="dd"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <div>带输入建议的input,可异步获取建议列表</div>
      <el-autocomplete 
        v-model="input"
        :fetch-suggestions="querrySearch"
        placeholder="激活即列出建议"
        @select="handleSelect"
      ></el-autocomplete>
      <el-autocomplete
        :fetch-suggestions="querrySearch"
        placeholder="自定义建议模板"
        v-model="input">
        <i
          slot="suffix"
          class="el-icon-search el-input__icon">
        </i>
        <template slot-scope="{ item }">
          <div style="float: left;">{{ item.value }}</div>
          <span style="float: right;">{{ item.des }}</span>
        </template>
      </el-autocomplete>
    </div>

    <!-- 输入框计数器input-number -->
    <div>
      <el-input-number v-model="num" :min="1" :max="10" :step="2" controls-position="right"></el-input-number>
      <div>步数倍增 + 精度(含size属性)</div>
      <el-input-number v-model="num" :min="1" :max="10" step-strictly :precision="2"></el-input-number>
    </div>

    <!-- Cascader级联选择器 其中数据源可通过懒加载进行异步实现-->
    <div>
      <span style="margin-right: 1rem">Cascader级联选择器</span>
      <el-cascader
        v-model="inputArr"
        :options="options"
        :props="{ expandTrigger: 'hover', multiple: true, checkStrictly: true }"
        placeholder="默认点击切换，props可更改"
        clearable
        :show-all-levels="false"
        collapse-tags></el-cascader>
      <el-cascader :options="options" placeholder="自定义下拉框模板">
        <template slot-scope="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
        </template>
      </el-cascader>
      <el-cascader-panel :options="options"></el-cascader-panel>
    </div>

    <!-- Switch开关 -->
    <div>
      <el-switch
        v-model="switchBtn"
        active-icon-class="el-icon-search"
        inactive-text="未选中文字"></el-switch>
      <el-switch
        v-model="switchBtn"
        active-icon-class="el-icon-search"
        inactive-text="未选中文字"
        disabled></el-switch>
    </div>

    <!-- Slider滑块 -->
    <div style="width: 25%; margin: 0 auto;">
      <el-slider
        v-model="sliderVal"
        :format-tooltip="formatTooltip"
        show-stops :step="10"
        show-input
        input-size="small"></el-slider>
      <el-slider v-model="sliderVal" :show-tooltip="false" disabled></el-slider>
      <el-slider v-model="sliderValRange" range :marks="marks"></el-slider>
      <el-slider v-model="sliderValRange" range vertical height="100px"></el-slider>
    </div>

    <!-- TimePicker时间选择器 -->
    <div>
      <el-time-select
        v-model="input"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '22:00',
          minTime: '08:50'
        }"
        placeholder="选择时间"></el-time-select>
      <el-time-picker
        v-model="input"
        arrow-control
        :picker-options="{
          selectableRange: '18:30:00 - 20:30:00'
        }"
        placeholder="任意时间点-箭头选择"></el-time-picker>
      <el-time-picker
        v-model="inputTimeArr"
        arrow-control
        is-range
        range-separator="—"
        start-placeholder="start时间"
        end-placeholder="end时间"
        placeholder="选择时间范围"
        :picker-options="{
          selectableRange: '18:30:00 - 20:30:00'
        }"></el-time-picker>
    </div>

    <!-- DatePicker日期选择器 -->
    <div>
      <el-date-picker
        v-model="inputTimeArr"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="left">
      </el-date-picker>
    </div>

    <!-- Rate评分、ColorPicker颜色选择器 -->

    <!-- Transfer穿梭框 -->
    <div>
      <el-transfer v-model="transfer" :data="data" style="text-align: start; display: flex; justify-content:center;"></el-transfer>
    </div>

    <!-- Form表单 -->
    <div>
      <el-form :model="formVal" :rules="formRules" ref="formRef" label-position="right" label-width="100px">
        <el-form-item label="活动名称" prop="name" :rules="formRules.name2">
          <el-input v-model="formVal.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formRef')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- table表格 -->
    <div style="display: inline-block">
      <el-table :data="tableData" :row-class-name="tableRowClassName" max-height="250">
        <el-table-column
          prop="date"
          label="日期"
          width="180px"
          :filters="[{text: '2016-05-01', value: '2016-05-01'}]"
          :filter-method="filterHandler"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180px"></el-table-column>
        <el-table-column prop="address" label="地址" width="180px"></el-table-column>
      </el-table>
    </div>

    <!-- Progress进度条 -->
    <div>
      <el-progress type="circle" :percentage="20" status="success" :width="100" :stroke-width="20"></el-progress>
    </div>

    <!-- Tree树 -->
    <div>
      <el-tree
        :props="treeProps"
        lazy
        :load="loadNode"
        show-checkbox
        :highlight-current="true"></el-tree>
      <el-tree
        :props="treeProps"
        :data="treeData"
        show-checkbox
        :highlight-current="true"
        :expand-on-click-node="false"
        :render-content="renderContent"
        default-expand-all></el-tree>
    </div>
  </div>
</template>

<script>
let treeId = 1000
export default {
  name: 'formCase',
  data () {
    return {
      treeData: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      treeProps: {
        label: 'name',
        children: 'children',
        isLeaf: 'isLeaf',
      },
      treeCount: 1,
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      formRules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur'},
          { min: 3, max: 5, message: '长度在3-5个字符', trigger: 'blur'},
        ],
        name2: [
          { required: true, message: '请输入活动名称', trigger: 'blur'},
          { min: 4, max: 5, message: '长度在4-5个字符', trigger: 'blur'},
        ]
      },
      formVal: {
        name: '',
      },
      transfer: [1,4],
      data: [{key: 1, label: 'Case1', disabled: false}, {key: 2, label: 'Case2', disabled: false}, {key: 3, label: 'Case3', disabled: false}, {key: 4, label: 'Case4', disabled: false},],
      options: [
        {
          value: 'first1',
          label: '一级菜单',
          disabled: true,
          children: [
            {
              value: 'second',
              label: '二级菜单'
            }
          ]
        },
        {
          value: 'first2',
          label: '一级菜单2',
          children: [
            {
              value: 'second2',
              label: '二级菜单2'
            },
            {
              value: 'second2-2',
              label: '二级菜单2-2'
            }
          ]
        }
      ],
      switchBtn: true,
      marks: {
        0: '0',
        8: '8',
        50: {
          style: {
            color: '#1989fa'
          },
          label: this.$createElement('strong', '50')
        }
      },
      sliderValRange: [10,60],
      sliderVal: 10,
      num:1,
      radio: "1",
      radio2: "SH",
      cityOptions: ['上海', '北京', '深圳'],
      checked: true,
      valList: ["section3","section1"],
      isIndeterminate: true,
      checkedCities: ['北京'],
      checkAll: false,
      input: '',
      inputArr: [],
      inputTimeArr: null,
      pwd: '',
      select: '',
      inputAdviceArr: [{value:'上海', des: 'sh'}, {value: '北京', des: 'bj'}, {value: '深圳', des: 'sz'}],
    }
  },
  methods: {
    renderContent(h, { node, data }) {//{node, data, store}
      return (
        <span class="custom-tree-node">
          <span>{data.label}</span>
          <span>
            <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
            <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
          </span>
        </span>);
    },
    append(data) {
        const newChild = { id: treeId++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
    },
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },
    loadNode (node, resolve) {
      if(node.level === 0) {
        return resolve([{ name: 'region1'}, { name: 'region2'}])
      }
      let hasChild = node.data.name === 'region1'
      setTimeout(() => {
        let data
        if(hasChild) {
          data = [{ name: 'zone' + this.treeCount++}]
        } else data = [];
        resolve(data)
      }, 500)
    },
    filterHandler (val, row, column) {
      console.log(row, column)
      return row[column.property] === val
    },
    tableRowClassName (obj) {
      if(obj.rowIndex === 0) return 'bg-yellow';
    },
    tableColClassName (obj) {
      if(obj.colIndex === 0) return 'bg-yellow';
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cityOptions.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityOptions.length;
    },
    cha(val) {
      console.log(val, this.checked)
    },
    querrySearch (querryString, cb) {
      let items = this.inputAdviceArr;
      let results = querryString ? items.filter(item => item.value.indexOf(querryString) === 0) : items;
      cb(results)
    },
    handleSelect (item) {
      console.log(item)
    },
    formatTooltip(val) {
      return val * 2
    },
    submitForm (formName) {
      console.log(formName)
      console.log(this.$refs[formName])
    }
  }
}
</script>

<style scoped>
.el-select /deep/ .el-input {
  width: 130px;
}
/* .el-select >>> .el-input {
  width: 130px;
} */
</style>