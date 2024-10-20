import Blog from "@/components/Blog";
import Brand from "@/components/Brand";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Function from "@/components/Function";
import Hader from "@/components/Hader";
import WhatGPT3 from "@/components/WhatGPT3";



export default function Home() {
  return (
    <div>
      <Hader/>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Function/>
      <CTA/>
      <Blog/>
    </div>
  );
}
