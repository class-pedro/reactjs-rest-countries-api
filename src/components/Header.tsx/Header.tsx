import styled from "styled-components";
import { IoMoonOutline } from "react-icons/io5";
import { FaRegSun } from "react-icons/fa";

const HeaderContainer = styled.header`
    background-color: hsl(0, 0%, 100%);
    width: 100%;
    margin: 0px;
    padding: 30px 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 0 30px #42424227;

    & > div {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & h1 {
        color: hsl(200, 15%, 8%);
        margin: 0;
        padding: 0;
        font-size: 1.25em;
        font-weight: 800;
    }

    & button {
        background-color: transparent;
        color: hsl(200, 15%, 8%);
        width: 110px;
        margin: 0;
        padding: 0;
        font-size: 1em;
        font-weight: 600;

        display: flex;
        align-items: center;
        justify-content: space-between;

        border: none;
        cursor: pointer;

        & > span {
            margin-top: 3px;
        }
    }

`

function Header({ buttonClick, buttonText, displayMoonIcon, displaySunIcon }: any) {
    return (
        <HeaderContainer>
            <div>
                <h1>Where in the world?</h1>
                <button
                    onClick={buttonClick}
                >
                    <IoMoonOutline
                        size={18}
                        display={displayMoonIcon}
                    />
                    <FaRegSun
                        size={18}
                        display={displaySunIcon}
                    />

                    <span>
                        {buttonText}
                    </span>
                </button>
            </div>
        </HeaderContainer>
    )
}

export default Header;