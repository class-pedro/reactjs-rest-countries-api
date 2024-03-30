import styled from "styled-components";

const CountryCardsContainer = styled.li`
    background-color: hsl(0, 0%, 98%);
    color: hsl(200, 15%, 8%);
    width: 100%;
    max-width: 315px;

    border-radius: 8px;
    box-shadow: 0 0 30px #42424227;

    & > img.country__image {
        width: 100%;
        border-radius: 8px 8px 0 0;
        height: 150px;
        object-fit: cover;
    }

    & > div.country__text {
        padding: 30px;

        & > h2 {
            margin-top: 0;
        }

        & > p {
            font-weight: 600;

            & > span {
                font-weight: 300;
            }
        }
    }
`

interface CountryCardsProps {
    countryImage: string;
    countryName: string;
    countryPopulation: number;
    countryRegion: string;
    countryCapital: string;
}

function CountryCards({ countryImage, countryName, countryPopulation, countryRegion, countryCapital }: CountryCardsProps) {
    return (
        <CountryCardsContainer>
            <img
                src={countryImage}
                alt="Country flag image" 
                className="country__image"
                />
            <div
                className="country__text"
            >
                <h2>{countryName}</h2>
                <p>
                    Population: <span>{countryPopulation}</span>
                </p>
                <p>
                    Region: <span>{countryRegion}</span>
                </p>
                <p>
                    Capital: <span>{countryCapital}</span>
                </p>
            </div>
        </CountryCardsContainer>
    )
}

export default CountryCards;