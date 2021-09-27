import { gql } from "@apollo/client";

export const GET_ALL_CARS = gql`
    query GetCars{
        cars{
            id
            name
            monthlyPrice
            mileage
            thumbnailUrl
            gearType
            gas
            dailyPrice
        }
      }
`