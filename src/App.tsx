import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeSwitcher from './pages/theme-switcher/theme-switcher.component'
import GlobalLayout from './utils/layouts/theme-switcher.layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, deleniti. Saepe nihil tenetur in velit sapiente maiores id laboriosam accusamus corrupti atque, sit qui est ipsam accusantium voluptatibus, error nisi dicta officia excepturi eius nam quisquam? Delectus quis odit expedita nam tenetur laborum eaque, ipsa, sapiente est ducimus cupiditate sint et labore voluptates dicta ut quisquam. Voluptas, quam consequatur ratione ipsam delectus, excepturi quibusdam voluptatem, modi ipsa architecto facilis perferendis voluptates quia repudiandae quod sequi voluptatibus obcaecati? Ea sequi excepturi mollitia quas sapiente facilis, tempore quia nihil quaerat saepe amet enim corrupti molestiae? Eos voluptatibus delectus aut expedita iusto fugit cum, architecto modi rerum quaerat quisquam? Voluptas a atque expedita delectus beatae corporis soluta nulla ab perspiciatis doloribus non, facere in. Nobis fuga hic, nam excepturi officia quibusdam ad esse maiores vero at, eos soluta? Saepe, porro. Minima, deserunt? Laborum ipsa odit tempore, ducimus doloremque et cum nulla natus tempora sint incidunt accusamus deserunt, voluptatum, perspiciatis itaque inventore? Aperiam voluptas nemo quibusdam? Atque neque placeat aspernatur alias voluptatem voluptates, voluptatum ipsum perferendis nobis sequi eaque dolor, animi error quidem molestias tempora repudiandae, repellat aut at hic mollitia illum recusandae sint? Dolore et dolor commodi at enim accusantium id fugiat cum.</div>
      <GlobalLayout />
    </>
  )
}

export default App
