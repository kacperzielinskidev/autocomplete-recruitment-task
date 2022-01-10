import { useState } from "react";
import AutoComplete from "../../components/AutoComplete/AutoComplete";
import { GlobalStyle } from "../../assets/styles/GlobalStyle";

const Root = () => {
  const [tags, setTags] = useState([]);

  const changeHandler = (name: any, value: any) => {
    if (name === "tags") {
      setTags(value);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AutoComplete
        name="tags"
        placeholder="Press Enter to Add Tags..."
        onChange={changeHandler}
        defaultTags={tags}
      />
    </>
  );
};

export default Root;
