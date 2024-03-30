import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const SearchContainer = styled.div`
    width: 100%;
    margin: 50px 0 0 0;
    display: flex;
    flex-direction: column;

    & div {
        background-color: hsl(0, 0%, 98%);
        width: 100%;
        padding: 20px 0;

        border-radius: 8px;
        box-shadow: 0 0 30px #42424227;

        @media(min-width: 768px) {
            width: 60%;
        }


            & label {
                color: hsl(0, 0%, 52%);
                margin: 0 20px;

                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            & input {
                background-color: hsl(0, 0%, 98%);
                color: hsl(0, 0%, 52%);
                
                font-size: 1.25em;
                font-weight: 300;
                
                width: 100%;
                height: 30px;
                margin: 0 0 0 10px;
                padding: 0;
                border: none;
                outline: none;
                
                &::placeholder {
                    color: hsl(0, 0%, 75.29411764705883%);
                    font-weight: 300;
                }
            }

        }

        & select {
            background-color: hsl(0, 0%, 98%);
            color: hsl(200, 15%, 8%);
            width: 60%;
            max-width: 250px;
            margin-top: 50px;
            padding: 0;
            font-size: 1.15em;

            border: 20px solid hsl(0, 0%, 98%);
            outline: none;
            border-radius: 8px;
            box-shadow: 0 0 30px #42424227;

            & option {
                color: hsl(200, 15%, 8%);
                border: none;
                outline: none;
            }

        }

        @media(min-width: 768px) {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;

            & > select {
                width: 40%;
                height: 70px;
                margin-left: 30px;
            }
        }
`

function SearchAndFilter({onSearchChange, searchValue, onSelectChange}:any) {
    return (
        <SearchContainer>
            <div>
                <label htmlFor="search">
                    <IoSearch
                        size={30}
                    />
                    <input
                        id="search"
                        type="search"
                        value={searchValue}
                        placeholder="Search for a country..."
                        onChange={onSearchChange}
                    />
                </label>
            </div>
            <select
                name="selectContinent"
                onChange={onSelectChange}
            >
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </SearchContainer>
    )
}

export default SearchAndFilter;