import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

import Page from '../components/Page'

function UseContext() {
  const [isDark, setIsDark] = useState('false');

  return (
    <UserContext.Provider value={'김기범'}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}

export default UseContext;


// Context는 꼭 필요할때만!
// - Context를 사용하면 컴포넌트를 재사용하기 어려워질 수 있다
// - prop drilling을 피하기 위한 목적이라면 Component CompositionEvent(컴포넌트 합성) 을 먼저 고려해보자

