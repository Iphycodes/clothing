import './search.style.css'

export const Search = ({placeholder, handleChange}) => (
    <input
    className="topSearch" 
    type="search" 
    placeholder={placeholder}
    onChange={handleChange}
    />
)