// import { useRef } from "preact/hooks"
import Links from "./Links"

const App = () => {
  return (
    <div className="mx-auto">
      <Links>
        <a href="#">
          <Links.Item>New Sale</Links.Item>
        </a>
        <a href="#">
          <Links.Item>Test Orders</Links.Item>
        </a>
        <a href="#">
          <Links.Item>Refund</Links.Item>
        </a>
        <a href="#">
          <Links.Item>Import Web Order</Links.Item>
        </a>
        <a href="#">
          <Links.Item>Money Transfer</Links.Item>
        </a>
        <a href="#">
          <Links.Item>Import Web Order</Links.Item>
        </a>
        <a href="#">
          <Links.Item>Reports</Links.Item>
        </a>
      </Links>
    </div>
  )
}

export default App
