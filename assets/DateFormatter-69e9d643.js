import{n as m}from"./SynapseClient-07cb66ce.js";import"./getEndpoint-ac94413e.js";import"./OrientationBanner-caa14b37.js";import{d as e}from"./dayjs.min-59ef0ea6.js";import{u as r,t as a,a as i,l as s}from"./timezone-fd382bd1.js";e.extend(r);e.extend(a);e.extend(i);e.extend(s);function z(t,o){return o||(o="M/D/YYYY h:mm A",m.getUseUtcTimeFromCookie()&&(o+=" z")),m.getUseUtcTimeFromCookie()?e(t).tz("utc").format(o):e(t).tz(e.tz.guess()).format(o)}export{z as f};
//# sourceMappingURL=DateFormatter-69e9d643.js.map