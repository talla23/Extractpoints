var driver;(()=>{var e={274:(e,t,a)=>{const l={"600-021":a(838),"600-022":a(487),"600-023":a(984),"600-024":a(890),"600-031":a(581),"600-032":a(201),"600-033":a(429),"600-034":a(34),"600-035":a(462),"600-036":a(127),"600-037":a(781),"600-038":a(555),"600-039":a(423),"600-232":a(586),"600-233":a(18)};t.initialize=e=>{try{return new l[e].device}catch(e){return null}}},838:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX T&H AMB"),this.PAYLOAD_LENGTH=36,this.template.addValueField({temperature:{unit:"°C",value:s.templatedValue(12,4,(e=>u.hexToInt(e,10)))}}),this.template.addValueField({humidity:{unit:"%",value:s.templatedValue(16,4,(e=>u.hexToUInt(e,10)))}}),this.template.addValueField({voc:{unit:"ppb",value:s.templatedValue(20,4,u.hexToUInt)}}),this.template.addValueField({co2:{unit:"ppm",value:s.templatedValue(24,4,u.hexToUInt)}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(28,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(32,4,u.hexToBatteryLvl)}),this.template.addStateField({msg_type:s.templatedValue(32,4,u.hexToMsgType)})}alarmParser(e){return u.hexToStatus(e,[{name:"temperature",values:[{high:!1},{high:!0}],bit:1},{name:"temperature",values:[{low:!1},{low:!0}],bit:2},{name:"humidity",values:[{high:!1},{high:!0}],bit:3},{name:"humidity",values:[{low:!1},{low:!0}],bit:4}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},487:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX VOC/T&H AMB"),this.PAYLOAD_LENGTH=36,this.template.addValueField({temperature:{unit:"°C",value:s.templatedValue(12,4,(e=>u.hexToInt(e,10)))}}),this.template.addValueField({humidity:{unit:"%",value:s.templatedValue(16,4,(e=>u.hexToUInt(e,10)))}}),this.template.addValueField({voc:{unit:"ppb",value:s.templatedValue(20,4,u.hexToUInt)}}),this.template.addValueField({co2:{unit:"ppm",value:s.templatedValue(24,4,u.hexToUInt)}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(28,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(32,4,u.hexToBatteryLvl)}),this.template.addStateField({msg_type:s.templatedValue(32,4,u.hexToMsgType)})}alarmParser(e){return u.hexToStatus(e,[{name:"temperature",values:[{high:!1},{high:!0}],bit:1},{name:"temperature",values:[{low:!1},{low:!0}],bit:2},{name:"humidity",values:[{high:!1},{high:!0}],bit:3},{name:"humidity",values:[{low:!1},{low:!0}],bit:4},{name:"voc",values:[{high:!1},{high:!0}],bit:5},{name:"voc",values:[{low:!1},{low:!0}],bit:6}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},984:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX CO2/VOC/T&H AMB"),this.PAYLOAD_LENGTH=36,this.template.addValueField({temperature:{unit:"°C",value:s.templatedValue(12,4,(e=>u.hexToInt(e,10)))}}),this.template.addValueField({humidity:{unit:"%",value:s.templatedValue(16,4,(e=>u.hexToUInt(e,10)))}}),this.template.addValueField({voc:{unit:"ppb",value:s.templatedValue(20,4,u.hexToUInt)}}),this.template.addValueField({co2:{unit:"ppm",value:s.templatedValue(24,4,u.hexToUInt)}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(28,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(32,4,u.hexToBatteryLvl)}),this.template.addStateField({msg_type:s.templatedValue(32,4,u.hexToMsgType)})}alarmParser(e){return u.hexToStatus(e,[{name:"temperature",values:[{high:!1},{high:!0}],bit:1},{name:"temperature",values:[{low:!1},{low:!0}],bit:2},{name:"humidity",values:[{high:!1},{high:!0}],bit:3},{name:"humidity",values:[{low:!1},{low:!0}],bit:4},{name:"voc",values:[{high:!1},{high:!0}],bit:5},{name:"voc",values:[{low:!1},{low:!0}],bit:6},{name:"co2",values:[{high:!1},{high:!0}],bit:7},{name:"co2",values:[{low:!1},{low:!0}],bit:8}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},890:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX CO2/T&H AMB"),this.PAYLOAD_LENGTH=36,this.template.addValueField({temperature:{unit:"°C",value:s.templatedValue(12,4,(e=>u.hexToInt(e,10)))}}),this.template.addValueField({humidity:{unit:"%",value:s.templatedValue(16,4,(e=>u.hexToUInt(e,10)))}}),this.template.addValueField({voc:{unit:"ppb",value:s.templatedValue(20,4,u.hexToUInt)}}),this.template.addValueField({co2:{unit:"ppm",value:s.templatedValue(24,4,u.hexToUInt)}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(28,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(32,4,u.hexToBatteryLvl)}),this.template.addStateField({msg_type:s.templatedValue(32,4,u.hexToMsgType)})}alarmParser(e){return u.hexToStatus(e,[{name:"temperature",values:[{high:!1},{high:!0}],bit:1},{name:"temperature",values:[{low:!1},{low:!0}],bit:2},{name:"humidity",values:[{high:!1},{high:!0}],bit:3},{name:"humidity",values:[{low:!1},{low:!0}],bit:4},{name:"co2",values:[{high:!1},{high:!0}],bit:7},{name:"co2",values:[{low:!1},{low:!0}],bit:8}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},581:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX TEMP INS"),this.PAYLOAD_LENGTH=28,this.template.addValueField({temperature_1:{unit:"°C",value:s.templatedValue(12,4,(e=>u.hexToInt(e,10)))}}),this.template.addValueField({temperature_2:{unit:"°C",value:s.templatedValue(16,4,(e=>u.hexToInt(e,10)))}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(20,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(24,4,u.hexToBatteryLvl)}),this.template.addStateField({msg_type:s.templatedValue(24,4,u.hexToMsgType)})}alarmParser(e){return u.hexToStatus(e,[{name:"temperature_1",values:[{high:!1},{high:!0}],bit:1},{name:"temperature_1",values:[{low:!1},{low:!0}],bit:2}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},201:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX TEMP CONT1"),this.PAYLOAD_LENGTH=28,this.template.addValueField({temperature_1:{unit:"°C",value:s.templatedValue(12,4,(e=>u.hexToInt(e,10)))}}),this.template.addValueField({temperature_2:{unit:"°C",value:s.templatedValue(16,4,(e=>u.hexToInt(e,10)))}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(20,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(24,4,u.hexToBatteryLvl)}),this.template.addStateField({msg_type:s.templatedValue(24,4,u.hexToMsgType)})}alarmParser(e){return u.hexToStatus(e,[{name:"temperature_1",values:[{high:!1},{high:!0}],bit:1},{name:"temperature_1",values:[{low:!1},{low:!0}],bit:2}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},429:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX TEMP CONT1 MP"),this.PAYLOAD_LENGTH=28,this.template.addValueField({temperature_1:{unit:"°C",value:s.templatedValue(12,4,(e=>u.hexToInt(e,10)))}}),this.template.addValueField({temperature_2:{unit:"°C",value:s.templatedValue(16,4,(e=>u.hexToInt(e,10)))}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(20,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(24,4,u.hexToBatteryLvl)}),this.template.addStateField({msg_type:s.templatedValue(24,4,u.hexToMsgType)})}alarmParser(e){return u.hexToStatus(e,[{name:"temperature_1",values:[{high:!1},{high:!0}],bit:1},{name:"temperature_1",values:[{low:!1},{low:!0}],bit:2}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},34:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX T&H EXT"),this.PAYLOAD_LENGTH=28,this.template.addValueField({temperature:{unit:"°C",value:s.templatedValue(12,4,(e=>u.hexToInt(e,10)))}}),this.template.addValueField({humidity:{unit:"%",value:s.templatedValue(16,4,(e=>u.hexToUInt(e,10)))}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(20,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(24,4,u.hexToBatteryLvl)}),this.template.addStateField({msg_type:s.templatedValue(24,4,u.hexToMsgType)})}alarmParser(e){return u.hexToStatus(e,[{name:"temperature",values:[{high:!1},{high:!0}],bit:1},{name:"temperature",values:[{low:!1},{low:!0}],bit:2},{name:"humidity",values:[{high:!1},{high:!0}],bit:3},{name:"humidity",values:[{low:!1},{low:!0}],bit:4}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},462:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX 4/20mA"),this.PAYLOAD_LENGTH=24,this.template.addValueField({current:{unit:"mA",value:s.templatedValue(12,4,(e=>u.hexToUInt(e,1e3)))}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(16,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(20,4,u.hexToBatteryLvl)}),this.template.addStateField({msg_type:s.templatedValue(20,4,u.hexToMsgType)})}alarmParser(e){return u.hexToStatus(e,[{name:"current",values:[{high:!1},{high:!0}],bit:1},{name:"current",values:[{low:!1},{low:!0}],bit:2}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},127:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX PULSE"),this.PAYLOAD_LENGTH=44,this.template.addValueField({pulse_ch1:{unit:"count",value:s.templatedValue(12,8,u.hexToUInt)}}),this.template.addValueField({pulse_ch2:{unit:"count",value:s.templatedValue(20,8,u.hexToUInt)}}),this.template.addValueField({pulse_oc:{unit:"count",value:s.templatedValue(28,8,u.hexToUInt)}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(36,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(40,4,u.hexToBatteryLvl)}),this.template.addStateField(s.templatedValue(40,4,this.stateParser))}alarmParser(e){return u.hexToStatus(e,[{name:"pulse_ch1_flow",values:[{high:!1},{high:!0}],bit:1},{name:"pulse_ch2_flow",values:[{high:!1},{high:!0}],bit:2},{name:"pulse_oc_flow",values:[{high:!1},{high:!0}],bit:3},{name:"pulse_ch1_flow",values:[{low:!1},{low:!0}],bit:5},{name:"pulse_ch2_flow",values:[{low:!1},{low:!0}],bit:6},{name:"pulse_oc_flow",values:[{low:!1},{low:!0}],bit:7},{name:"pulse_ch1_leak",values:[!1,!0],bit:9},{name:"pulse_ch2_leak",values:[!1,!0],bit:10},{name:"pulse_oc_leak",values:[!1,!0],bit:11},{name:"debounce_1",values:[!1,!0],bit:12},{name:"debounce_2",values:[!1,!0],bit:13},{name:"debounce_3",values:[!1,!0],bit:14}])}stateParser(e){return u.hexToStatus(e,[{name:"msg_type",values:["normal","alarm"],bit:1},{name:"pulse_ch1",values:["open","closed"],bit:5},{name:"pulse_ch2",values:["open","closed"],bit:6},{name:"pulse_oc",values:["open","closed"],bit:7}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},781:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX PULSE ATEX"),this.PAYLOAD_LENGTH=44,this.template.addValueField({pulse_ch1:{unit:"count",value:s.templatedValue(12,8,u.hexToUInt)}}),this.template.addValueField({pulse_ch2:{unit:"count",value:s.templatedValue(20,8,u.hexToUInt)}}),this.template.addValueField({pulse_oc:{unit:"count",value:s.templatedValue(28,8,u.hexToUInt)}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(36,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(40,4,u.hexToBatteryLvl)}),this.template.addStateField(s.templatedValue(40,4,this.stateParser))}alarmParser(e){return u.hexToStatus(e,[{name:"pulse_ch1_flow",values:[{high:!1},{high:!0}],bit:1},{name:"pulse_ch2_flow",values:[{high:!1},{high:!0}],bit:2},{name:"pulse_oc_flow",values:[{high:!1},{high:!0}],bit:3},{name:"pulse_ch1_flow",values:[{low:!1},{low:!0}],bit:5},{name:"pulse_ch2_flow",values:[{low:!1},{low:!0}],bit:6},{name:"pulse_oc_flow",values:[{low:!1},{low:!0}],bit:7},{name:"pulse_ch1_leak",values:[!1,!0],bit:9},{name:"pulse_ch2_leak",values:[!1,!0],bit:10},{name:"pulse_oc_leak",values:[!1,!0],bit:11}])}stateParser(e){return u.hexToStatus(e,[{name:"msg_type",values:["normal","alarm"],bit:1},{name:"pulse_ch1",values:["open","closed"],bit:5},{name:"pulse_ch2",values:["open","closed"],bit:6},{name:"pulse_oc",values:["open","closed"],bit:7}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},555:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX PULSE LED"),this.PAYLOAD_LENGTH=44,this.template.addValueField({pulse_ch1:{unit:"count",value:s.templatedValue(12,8,u.hexToUInt)}}),this.template.addValueField({pulse_ch2:{unit:"count",value:s.templatedValue(20,8,u.hexToUInt)}}),this.template.addValueField({pulse_oc:{unit:"count",value:s.templatedValue(28,8,u.hexToUInt)}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(36,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(40,4,u.hexToBatteryLvl)}),this.template.addStateField(s.templatedValue(40,4,this.stateParser))}alarmParser(e){return u.hexToStatus(e,[{name:"pulse_ch1_flow",values:[{high:!1},{high:!0}],bit:1},{name:"pulse_ch2_flow",values:[{high:!1},{high:!0}],bit:2},{name:"pulse_oc_flow",values:[{high:!1},{high:!0}],bit:3},{name:"pulse_ch1_flow",values:[{low:!1},{low:!0}],bit:5},{name:"pulse_ch2_flow",values:[{low:!1},{low:!0}],bit:6},{name:"pulse_oc_flow",values:[{low:!1},{low:!0}],bit:7},{name:"pulse_ch1_leak",values:[!1,!0],bit:9},{name:"pulse_ch2_leak",values:[!1,!0],bit:10},{name:"pulse_oc_leak",values:[!1,!0],bit:11}])}stateParser(e){return u.hexToStatus(e,[{name:"msg_type",values:["normal","alarm"],bit:1},{name:"pulse_ch1",values:["open","closed"],bit:5},{name:"pulse_ch2",values:["open","closed"],bit:6},{name:"pulse_oc",values:["open","closed"],bit:7}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},423:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX CONTACT"),this.PAYLOAD_LENGTH=44,this.template.addValueField({pulse_ch1:{unit:"count",value:s.templatedValue(12,8,u.hexToUInt)}}),this.template.addValueField({pulse_ch2:{unit:"count",value:s.templatedValue(20,8,u.hexToUInt)}}),this.template.addValueField({pulse_oc:{unit:"count",value:s.templatedValue(28,8,u.hexToUInt)}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(36,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(40,4,u.hexToBatteryLvl)}),this.template.addStateField(s.templatedValue(40,4,this.stateParser))}alarmParser(e){return u.hexToStatus(e,[{name:"pulse_ch1",values:[{change:!1},{change:!0}],bit:1},{name:"pulse_ch2",values:[{change:!1},{change:!0}],bit:2},{name:"pulse_oc",values:[{change:!1},{change:!0}],bit:3}])}stateParser(e){return u.hexToStatus(e,[{name:"msg_type",values:["normal","alarm"],bit:1},{name:"pulse_ch1",values:["open","closed"],bit:6},{name:"pulse_ch2",values:["open","closed"],bit:7},{name:"pulse_oc",values:["open","closed"],bit:8}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},586:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX TEMP CONT2"),this.PAYLOAD_LENGTH=28,this.template.addValueField({temperature_1:{unit:"°C",value:s.templatedValue(12,4,(e=>u.hexToInt(e,10)))}}),this.template.addValueField({temperature_2:{unit:"°C",value:s.templatedValue(16,4,(e=>u.hexToInt(e,10)))}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(20,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(24,4,u.hexToBatteryLvl)}),this.template.addStateField({msg_type:s.templatedValue(24,4,u.hexToMsgType)})}alarmParser(e){return u.hexToStatus(e,[{name:"temperature_1",values:[{high:!1},{high:!0}],bit:1},{name:"temperature_1",values:[{low:!1},{low:!0}],bit:2},{name:"temperature_2",values:[{high:!1},{high:!0}],bit:3},{name:"temperature_2",values:[{low:!1},{low:!0}],bit:4}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},18:(e,t,a)=>{const l=a(90).Z,s=a(806).Z,u=a(136);t.device=class extends l{constructor(){super("TX TEMP CONT2 MP"),this.PAYLOAD_LENGTH=28,this.template.addValueField({temperature_1:{unit:"°C",value:s.templatedValue(12,4,(e=>u.hexToInt(e,10)))}}),this.template.addValueField({temperature_2:{unit:"°C",value:s.templatedValue(16,4,(e=>u.hexToInt(e,10)))}}),this.template.setField(s.fields.ALARM_STATUS,s.templatedValue(20,4,this.alarmParser)),this.template.addStateField({battery:s.templatedValue(24,4,u.hexToBatteryLvl)}),this.template.addStateField({msg_type:s.templatedValue(24,4,u.hexToMsgType)})}alarmParser(e){return u.hexToStatus(e,[{name:"temperature_1",values:[{high:!1},{high:!0}],bit:1},{name:"temperature_1",values:[{low:!1},{low:!0}],bit:2},{name:"temperature_2",values:[{high:!1},{high:!0}],bit:3},{name:"temperature_2",values:[{low:!1},{low:!0}],bit:4}])}decode(e){return super.decode(e,this.PAYLOAD_LENGTH)}}},90:(e,t,a)=>{const l=a(806).Z;t.Z=class{constructor(e){this.name=e,this.template=l.create(e)}decode(e,t){return e.length===t?this.template.fill(e):{result:null,error:`Invalid payload length. Received payload length: ${e.length}. Expected payload length: ${t}`}}}},238:(e,t)=>{t.INT_MIN=-parseInt("0xFFFF"),t.INT_MAX=parseInt("0xFFFF")},136:(e,t,a)=>{const l=a(238);t.hexToUInt=(e,t=1)=>parseInt(e,16)/t,t.hexToInt=(e,t=1)=>{const a=e.toUpperCase();return a>="8000"&&a<="FFFF"?(parseInt(e,16)-l.INT_MAX-1)/t:parseInt(e,16)/t},t.hexToBin=(e,t=2)=>parseInt(e,16).toString(2).padStart(4*t,"0"),t.binToUInt=e=>parseInt(e,2),t.hexToFwVerison=e=>{const a=t.hexToBin(e);return t.binToUInt(a.substring(a.length-4,a.length))},t.hexToStatus=(e,a)=>{const l={},s=t.hexToBin(e,4);return a.forEach((e=>{const t=+s[s.length-e.bit],a=e.values[t];l.hasOwnProperty(e.name)?l[e.name]={...l[e.name],...a}:l[e.name]=a})),l},t.hexToBatteryLvl=(e,a=4,l=2)=>{const s=t.hexToBin(e,4);switch(s.substring(s.length-a,s.length-l)){case"00":return"100%";case"01":return"75%";case"10":return"50%";case"11":return"25%";default:return"unknown"}},t.hexToMsgType=(e,a=1)=>{const l=t.hexToBin(e,4);return+l[l.length-a]?"alarm":"normal"}},806:(e,t,a)=>{const l=a(136);class s{constructor(e=""){this.name=e,this.template={id:new u(0,6,l.hexToUInt),type:new u(6,2,l.hexToUInt),seq_counter:new u(8,2,l.hexToUInt),fw_version:new u(10,2,l.hexToFwVerison),values:[],alarm_status:{},states:[]},this.supportedFields=Object.keys(this.template)}setField(e,t){this.supportedFields.includes(e)&&t instanceof u?this.template[e]=t:console.log(`Field: ${e} is invalid or the inserted value is not of required type.`)}addValueField(e){this.template.values.push(e)}addStateField(e){this.template.states.push(e)}fill(e){if(!Boolean(e.match(/^[0-9a-f]+$/i)))return{result:null,error:"Invalid payload. Only hexadecimal digits are allowed."};const t={},a=t=>{if("object"!=typeof t||t instanceof u){if(t instanceof u){const a=t.evaluate(e);if(a.error)throw new Error("invalid template");return a.result}return t}{let e={...t};for(const l in t)e[l]=a(t[l]);return e}};try{for(const e in this.template)Array.isArray(this.template[e])?(t[e]=[],this.template[e].forEach((l=>{t[e]={...t[e],...a(l)}}))):t[e]=a(this.template[e]);return this.name&&(t.type+=" - "+this.name),{result:t,error:null}}catch(e){return{result:null,error:e.message}}}}class u{constructor(e,t,a){this.start=e,this.len=t,this.parser=a}evaluate(e){if(isFinite(this.start)&&isFinite(this.len)&&this.len>0&&this.parser&&"function"==typeof this.parser){const t=e.substr(this.start,this.len);return{result:this.parser(t),error:null}}return{result:null,error:"Invalid templated value. Value could not be evaluated"}}}t.Z={create:e=>new s(e),templatedValue:(e,t,a)=>new u(e,t,a),fields:{ID:"id",TYPE:"type",SEQ_NUMBER:"seq_number",METADATA:"metadata",ALARM_STATUS:"alarm_status",STATUS:"status"}}}},t={};function a(l){var s=t[l];if(void 0!==s)return s.exports;var u=t[l]={exports:{}};return e[l](u,u.exports,a),u.exports}var l={};(()=>{var e=l;const t=a(274);class s{constructor(e){this.type=e,this.device=t.initialize(e)}decode(e){return this.device&&("string"==typeof e||e instanceof String)?this.device.decode(e):this.device?{result:null,error:"Unsupported payload type"}:{result:null,error:`No decoder found for type: ${this.type}`}}}e.decodeUplink=function(e){let t=new s("600-037").decode(e.bytes.map((e=>e.toString(16).padStart(2,"0"))).join(""));return t.error?{errors:[t.error],warnings:[]}:{data:t.result,errors:[],warnings:[]}}})(),driver=l})();