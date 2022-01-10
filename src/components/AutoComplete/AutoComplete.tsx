import { ChangeEvent, SetStateAction, useState } from "react";
import { items } from "../../mock/items";
import {
  StyledWrapper,
  StyledInputContainer,
  StyledTagList,
  StyledTagListItem,
  StyledClearIcon,
  StyledList,
  StyledListItem,
} from "./AutoComplete.styles";

interface Props {
  name: string;
  placeholder: string;
  onChange: any;
  defaultTags: string[];
}

const AutoComplete: React.FC<Props> = ({
  name,
  placeholder,
  onChange,
  defaultTags,
}) => {
  const [value, setValue] = useState("");
  const [tags, setTags] = useState(defaultTags ? defaultTags : []);
  const [filterData, setFilterData] = useState([]);

  const handleChangeHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(e.target.value);
    onChange(name, tags);
  };

  const handleClickAdd = (value: never) => {
    setTags([...tags, value]);
    setFilterData([]);
    setValue("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchWord = e.target.value;
    const newFilter: any = items.filter(v => {
      return v.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const handleRemove = (tag: any) => {
    const arr = tags.filter(t => t !== tag);
    setTags(arr);
    onChange(name, arr);
  };

  const handleAdd = (e: any) => {
    e.preventDefault();

    if (e.target.value !== "" && e.target.value !== ",") {
      if (e.key === "Enter") {
        const newTag = value.trim();
        if (!tags.includes(newTag) && newTag !== "") {
          const arr = [...tags, newTag];
          setTags(arr);
          onChange(name, arr);
          setFilterData([]);
        } else {
          if (!tags.includes(newTag) && newTag !== "") {
            const arr = [...tags, newTag];
            setTags(arr);
            onChange(name, arr);
          }
        }
        setValue("");
      }
    }
  };

  return (
    <StyledWrapper>
      <StyledInputContainer>
        <StyledTagList>
          {tags.map((tag, index) => (
            <StyledTagListItem key={index}>
              {tag}
              <StyledClearIcon onClick={() => handleRemove(tag)} />
            </StyledTagListItem>
          ))}
          <input
            type="text"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChangeHandler}
            onChangeCapture={handleChange}
            onKeyUp={handleAdd}
            onKeyDown={e => e.key === "Enter" && e.preventDefault()}
            onKeyPress={e => e.key === "Enter" && e.preventDefault()}
          />
        </StyledTagList>
      </StyledInputContainer>
      {filterData.length !== 0 && (
        <StyledList>
          {filterData.map(({ name }, index) => (
            <StyledListItem onClick={() => handleClickAdd(name)} key={index}>
              {name}
            </StyledListItem>
          ))}
        </StyledList>
      )}
    </StyledWrapper>
  );
};

export default AutoComplete;
