import { gql } from '@apollo/client';


export const GET_ROCKETS = gql`
query GetRockets {
    rockets(limit: 10) {
      id
      name
      description
      active
      cost_per_launch
      boosters
      success_rate_pct
      first_flight
      country
      company
      height {
        meters
        feet
      }
      diameter {
        meters
        feet
      }
      mass {
        kg
        lb
      }
      payload_weights {
        id
        name
        kg
        lb
      }
      first_stage {
        reusable
        engines
        fuel_amount_tons
        burn_time_sec
        thrust_sea_level {
          kN
          lbf
        }
        thrust_vacuum {
          kN
          lbf
        }
      }
      second_stage {
        engines
        fuel_amount_tons
        burn_time_sec
        thrust {
          kN
          lbf
        }
        payloads {
          option_1
          composite_fairing {
            height {
              meters
              feet
            }
            diameter {
              meters
              feet
            }
          }
        }
      }
      engines {
        number
        type
        version
        layout
        engine_loss_max
        propellant_1
        propellant_2
        thrust_sea_level {
          kN
          lbf
        }
        thrust_vacuum {
          kN
          lbf
        }
      }
    }
}

`