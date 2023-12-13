import { SlBriefcase } from "react-icons/sl";
import { LiaHandshakeSolid } from "react-icons/lia";
import { TbPigMoney } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";

import { security,security2,security3 } from "../assets";
import { analyticsmonitoring,analyticsmonitoring2,analyticsmonitoring3,analyticsmonitoring4,analyticsmonitoring5,analyticsmonitoring6,analyticsmonitoring7 } from "../assets"
import { inframonitoring,inframonitoring2,inframonitoring3,inframonitoring4 } from "../assets";
import { iotmonitor,iotmonitoring2,iotmonitoring4,IotMonitoring4} from "../assets";
import { SchoolMonitor3 } from "../assets";
import { vehiclemonitoring,vehiclemonitoring2,vehiclemonitoring3,vehiclemonitoring4 } from "../assets";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon:<SlBriefcase />,
    title: "Comprehensive Solutions",
    des: "we signify our commitment to providing comprehensive solutions tailored to your needs",
  },
  {
    id: 2,
    icon: <LiaHandshakeSolid />,
    title: "Professional Expertise",
    des: "Our team of skilled professionals is equipped with the knowledge and experience to deliver top-notch services",
  },
  {
    id: 3,
    icon: <TbPigMoney />,
    title: "Efficiency and Savings",
    des: "We understand the importance of optimizing resources and ensuring a solid return on investment",
  },
  {
    id: 4,
    icon: <BsGraphUpArrow />,
    title: "Business Expansion",
    des: "Leverage the power of analytics to identify growth opportunities and stay ahead in your industry.",
  },
];


export const servicesData = [
  {
    id:1,
    img:IotMonitoring4,
    title:"IoT Monitoring Service",
    desc:"At PiSence,we offer IoT monitoring services tailored to your business needs. Our expert team ensures real-time visibility and control over your interconnected devices, allowing your operations to run smoothly. With advanced technologies and best practices, we enable you to focus on growing your business while we manage seamless operations.",
  },
  {
    id:2,
    img:SchoolMonitor3,
    title:"School Monitoring Service",
    desc:"A school management system streamlines education tasks, including enrollment, attendance, and grades. It enhances communication and transparency among teachers, students, and parents through online portals and automation. This ensures efficient operations, a smoother educational experience, and accurate data management."
  },
  {
    id:3,
    img:analyticsmonitoring7,
    title:"Analytics Monitoring",
    desc:"PiSence's analytical monitoring solutions empower informed business decisions by providing valuable insights into your IoT ecosystem. Our state-of-the-art tools collect, analyze, and interpret real-time data from connected devices. Identifying trends and anomalies, we optimize performance, highlight improvement areas, and facilitate data-driven decisions for sustainable growth."
  },
  {
    id:4,
    img:inframonitoring4,
    title:"Infrastructure Monitoring",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque perferendis nesciunt amet, voluptatem fuga iste deleniti doloribus, totam ut pariatur, laboriosam porro in et recusandae? Possimus quisquam nam unde deleniti ullam id itaque eius, iste magni. Quis laborum blanditiis hic nemo eos ipsum neque. Accusantium, rem? Esse, et earum? "
  },
  {
    id:5,
    img:security3,
    title:"Security Monitoring",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque perferendis nesciunt amet, voluptatem fuga iste deleniti doloribus, totam ut pariatur, laboriosam porro in et recusandae? Possimus quisquam nam unde deleniti ullam id itaque eius, iste magni. Quis laborum blanditiis hic nemo eos ipsum neque. Accusantium, rem? Esse, et earum? "
  },
  {
    id:6,
    img:vehiclemonitoring4,
    title:"Vehicle Monitoring",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque perferendis nesciunt amet, voluptatem fuga iste deleniti doloribus, totam ut pariatur, laboriosam porro in et recusandae? Possimus quisquam nam unde deleniti ullam id itaque eius, iste magni. Quis laborum blanditiis hic nemo eos ipsum neque. Accusantium, rem? Esse, et earum?"
  }
]