import { useState, useEffect } from 'react';

export function prettify(str) {

  if (str === undefined) {
    return "N/A";
  }
  //Replace all _ with spaces
  str = str.replace(/_/g, ' ');

  //Capitalize the first letter of each word
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export const useWindowSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return size;
};

export const sampleState = {
  "apiObject": {
      "__CLASS__": "Adzuna::API::Response::JobSearchResults",
      "mean": 36946.05,
      "count": 1048939,
      "results": [
          {
              "__CLASS__": "Adzuna::API::Response::Job",
              "salary_min": 39339.44,
              "id": "3701304202",
              "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoidGpPNHRCZlA3UkdwRUhHX0o1blExUSIsImkiOiIzNzAxMzA0MjAyIn0.UGmYcPu2UiwIa2L-qmLelSIu_cznRrifTfJcPmwp3wI",
              "category": {
                  "tag": "logistics-warehouse-jobs",
                  "__CLASS__": "Adzuna::API::Response::Category",
                  "label": "Logistics & Warehouse Jobs"
              },
              "created": "2022-11-18T15:07:39Z",
              "company": {
                  "__CLASS__": "Adzuna::API::Response::Company",
                  "display_name": "my four wheels"
              },
              "contract_type": "permanent",
              "location": {
                  "display_name": "Colintraive, Argyll & Bute",
                  "area": [
                      "UK",
                      "Scotland",
                      "Argyll & Bute",
                      "Colintraive"
                  ],
                  "__CLASS__": "Adzuna::API::Response::Location"
              },
              "salary_max": 39339.44,
              "title": "Driving Instructor",
              "contract_time": "full_time",
              "latitude": 55.923727,
              "salary_is_predicted": "1",
              "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701304202?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=9C79905DD6DD2D4C4B3D8FAE05148B3835664A65",
              "description": "My Four Wheels are looking to expand our team and are recruiting both part time and full time Driving Instructors throughout the UK. Around 1.6 million people take their driving test every year, teaching people how to drive is not only an industry proof profession but one which grows every day due to the expanding population of the UK. Each driving instructor work within their local area, work the hours which suit them (Monday - Sunday) and get their very own branded car complete with duel cont…",
              "longitude": -5.151736
          },
          {
              "longitude": -0.332443,
              "description": "My Four Wheels are on the lookout for people who are looking to start a new career as a Driving Instructor. No experience necessary as we provide full training. Once completed, you are then guaranteed a job with us in your area with earnings of £27,000 - £32,000 per year (dependant on how many hours you work). Due to the ever growing population in the UK, there is always a growing demand for more Driving Instructors year on year. It now takes the average learner driver 47 lessons to pass their …",
              "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701311115?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=AD762714AEB1F15B55FD537765D64A7C167F4207",
              "salary_is_predicted": "1",
              "latitude": 53.744301,
              "title": "Driving Instructor Trainee",
              "contract_time": "full_time",
              "salary_max": 26584.75,
              "location": {
                  "__CLASS__": "Adzuna::API::Response::Location",
                  "display_name": "Hull, East Riding Of Yorkshire",
                  "area": [
                      "UK",
                      "Yorkshire And The Humber",
                      "East Riding Of Yorkshire",
                      "Hull"
                  ]
              },
              "contract_type": "permanent",
              "company": {
                  "display_name": "My Four Wheels",
                  "__CLASS__": "Adzuna::API::Response::Company"
              },
              "created": "2022-11-18T15:13:30Z",
              "category": {
                  "tag": "teaching-jobs",
                  "label": "Teaching Jobs",
                  "__CLASS__": "Adzuna::API::Response::Category"
              },
              "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzcwMTMxMTExNSIsInMiOiJ0ak80dEJmUDdSR3BFSEdfSjVuUTFRIn0.U-oovP-QaXkclOskmG5umR3prPmOkQGEh2o0uMtcRfA",
              "__CLASS__": "Adzuna::API::Response::Job",
              "salary_min": 26584.75,
              "id": "3701311115"
          },
          {
              "salary_is_predicted": "1",
              "description": "My Four Wheels are on the lookout for people who are looking to start a new career as a Driving Instructor. No experience necessary as we provide full training. Once completed, you are then guaranteed a job with us in your area with earnings of £27,000 - £32,000 per year (dependant on how many hours you work). Due to the ever growing population in the UK, there is always a growing demand for more Driving Instructors year on year. It now takes the average learner driver 47 lessons to pass their …",
              "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701310945?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=B0AED244345D12FEA88D87FDC991D630CC8C0ADB",
              "longitude": -4.13241,
              "salary_max": 26693.31,
              "latitude": 57.581001,
              "title": "Driving Instructor Trainee",
              "contract_time": "full_time",
              "category": {
                  "tag": "teaching-jobs",
                  "__CLASS__": "Adzuna::API::Response::Category",
                  "label": "Teaching Jobs"
              },
              "created": "2022-11-18T15:13:29Z",
              "company": {
                  "__CLASS__": "Adzuna::API::Response::Company",
                  "display_name": "My Four Wheels"
              },
              "contract_type": "permanent",
              "location": {
                  "display_name": "Fortrose, Highland",
                  "area": [
                      "UK",
                      "Scotland",
                      "Highland",
                      "Fortrose"
                  ],
                  "__CLASS__": "Adzuna::API::Response::Location"
              },
              "__CLASS__": "Adzuna::API::Response::Job",
              "salary_min": 26693.31,
              "id": "3701310945",
              "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoidGpPNHRCZlA3UkdwRUhHX0o1blExUSIsImkiOiIzNzAxMzEwOTQ1In0.WANqUBg6l2I5EgOMuhht8Y1u3CNwWwKTj7YqPIAibsA"
          },
          {
              "created": "2022-11-18T15:07:46Z",
              "company": {
                  "display_name": "my four wheels",
                  "__CLASS__": "Adzuna::API::Response::Company"
              },
              "category": {
                  "__CLASS__": "Adzuna::API::Response::Category",
                  "label": "Logistics & Warehouse Jobs",
                  "tag": "logistics-warehouse-jobs"
              },
              "location": {
                  "display_name": "Southwick, Fareham",
                  "area": [
                      "UK",
                      "South East England",
                      "Hampshire",
                      "Fareham",
                      "Southwick"
                  ],
                  "__CLASS__": "Adzuna::API::Response::Location"
              },
              "contract_type": "permanent",
              "__CLASS__": "Adzuna::API::Response::Job",
              "id": "3701305958",
              "salary_min": 39290.84,
              "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoidGpPNHRCZlA3UkdwRUhHX0o1blExUSIsImkiOiIzNzAxMzA1OTU4In0.akieRMR5TbQ_WVyqXLKcM4RVZnvTYrG-8ikRnqPVLCE",
              "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701305958?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=32A5D9CB43204FE26913470BB963BAED507816D9",
              "description": "My Four Wheels are looking to expand our team and are recruiting both part time and full time Driving Instructors throughout the UK. Around 1.6 million people take their driving test every year, teaching people how to drive is not only an industry proof profession but one which grows every day due to the expanding population of the UK. Each driving instructor work within their local area, work the hours which suit them (Monday - Sunday) and get their very own branded car complete with duel cont…",
              "salary_is_predicted": "1",
              "longitude": -1.1121,
              "salary_max": 39290.84,
              "latitude": 50.874001,
              "title": "Driving Instructor",
              "contract_time": "full_time"
          },
          {
              "longitude": -2,
              "description": "My Four Wheels are on the lookout for people who are looking to start a new career as a Driving Instructor. No experience necessary as we provide full training. Once completed, you are then guaranteed a job with us in your area with earnings of £27,000 - £32,000 per year (dependant on how many hours you work). Due to the ever growing population in the UK, there is always a growing demand for more Driving Instructors year on year. It now takes the average learner driver 47 lessons to pass their …",
              "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701312045?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=0CF269C8020B35D261ACE0C7A3747AC69198315C",
              "salary_is_predicted": "1",
              "contract_time": "full_time",
              "title": "Driving Instructor Trainee",
              "latitude": 52.459999,
              "salary_max": 27387.16,
              "contract_type": "permanent",
              "location": {
                  "__CLASS__": "Adzuna::API::Response::Location",
                  "display_name": "Quinton, Birmingham",
                  "area": [
                      "UK",
                      "West Midlands",
                      "Birmingham",
                      "Quinton"
                  ]
              },
              "category": {
                  "tag": "teaching-jobs",
                  "label": "Teaching Jobs",
                  "__CLASS__": "Adzuna::API::Response::Category"
              },
              "created": "2022-11-18T15:13:35Z",
              "company": {
                  "display_name": "My Four Wheels",
                  "__CLASS__": "Adzuna::API::Response::Company"
              },
              "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzcwMTMxMjA0NSIsInMiOiJ0ak80dEJmUDdSR3BFSEdfSjVuUTFRIn0.u67Ubdzl38iU6kFWi7WPhSsXItWeJ9nsop5r7OA9y4E",
              "__CLASS__": "Adzuna::API::Response::Job",
              "id": "3701312045",
              "salary_min": 27387.16
          },
          {
              "description": "My Four Wheels are on the lookout for people who are looking to start a new career as a Driving Instructor. No experience necessary as we provide full training. Once completed, you are then guaranteed a job with us in your area with earnings of £27,000 - £32,000 per year (dependant on how many hours you work). Due to the ever growing population in the UK, there is always a growing demand for more Driving Instructors year on year. It now takes the average learner driver 47 lessons to pass their …",
              "salary_is_predicted": "1",
              "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701311534?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=BA934E7182644144DDE6B3EEFD51F3E3E5F177F9",
              "longitude": -0.012192,
              "salary_max": 29051.15,
              "latitude": 51.494301,
              "title": "Driving Instructor Trainee",
              "contract_time": "full_time",
              "created": "2022-11-18T15:13:33Z",
              "company": {
                  "__CLASS__": "Adzuna::API::Response::Company",
                  "display_name": "my four wheels"
              },
              "category": {
                  "tag": "teaching-jobs",
                  "__CLASS__": "Adzuna::API::Response::Category",
                  "label": "Teaching Jobs"
              },
              "location": {
                  "display_name": "Millwall, East London",
                  "area": [
                      "UK",
                      "London",
                      "East London",
                      "Millwall"
                  ],
                  "__CLASS__": "Adzuna::API::Response::Location"
              },
              "contract_type": "permanent",
              "salary_min": 29051.15,
              "__CLASS__": "Adzuna::API::Response::Job",
              "id": "3701311534",
              "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzcwMTMxMTUzNCIsInMiOiJ0ak80dEJmUDdSR3BFSEdfSjVuUTFRIn0.BRbiHG3tS_6e_q2slIZB56D3V7ErlVM-K2FMN70m1nQ"
          },
          {
              "contract_time": "full_time",
              "title": "Driving Instructor Trainee",
              "latitude": 52.4963,
              "salary_max": 29609.68,
              "longitude": -0.446766,
              "description": "My Four Wheels are on the lookout for people who are looking to start a new career as a Driving Instructor. No experience necessary as we provide full training. Once completed, you are then guaranteed a job with us in your area with earnings of £27,000 - £32,000 per year (dependant on how many hours you work). Due to the ever growing population in the UK, there is always a growing demand for more Driving Instructors year on year. It now takes the average learner driver 47 lessons to pass their …",
              "salary_is_predicted": "1",
              "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701310703?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=A0B5093A192E16C5521860AEF6E859967510EE6F",
              "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoidGpPNHRCZlA3UkdwRUhHX0o1blExUSIsImkiOiIzNzAxMzEwNzAzIn0.1iZpIb0bKm5j8__Yex1VyF-LF80h-sUUoheOSPwnCMQ",
              "id": "3701310703",
              "__CLASS__": "Adzuna::API::Response::Job",
              "salary_min": 29609.68,
              "contract_type": "permanent",
              "location": {
                  "area": [
                      "UK",
                      "Eastern England",
                      "Peterborough",
                      "Elmington"
                  ],
                  "display_name": "Elmington, Peterborough",
                  "__CLASS__": "Adzuna::API::Response::Location"
              },
              "category": {
                  "__CLASS__": "Adzuna::API::Response::Category",
                  "label": "Teaching Jobs",
                  "tag": "teaching-jobs"
              },
              "created": "2022-11-18T15:13:28Z",
              "company": {
                  "__CLASS__": "Adzuna::API::Response::Company",
                  "display_name": "my four wheels"
              }
          },
          {
              "salary_max": 41223.21,
              "latitude": 56.052299,
              "title": "Driving Instructor",
              "contract_time": "full_time",
              "description": "My Four Wheels are looking to expand our team and are recruiting both part time and full time Driving Instructors throughout the UK. Around 1.6 million people take their driving test every year, teaching people how to drive is not only an industry proof profession but one which grows every day due to the expanding population of the UK. Each driving instructor work within their local area, work the hours which suit them (Monday - Sunday) and get their very own branded car complete with duel cont…",
              "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701304579?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=CCE3F6B09E63A77E958D9A21F7A492EA9E351367",
              "salary_is_predicted": "1",
              "longitude": -4.2209,
              "__CLASS__": "Adzuna::API::Response::Job",
              "id": "3701304579",
              "salary_min": 41223.21,
              "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoidGpPNHRCZlA3UkdwRUhHX0o1blExUSIsImkiOiIzNzAxMzA0NTc5In0.40glRIlxWOr1eV_dgQRG6B05RcrKojADqfuz0fmgSuI",
              "category": {
                  "tag": "logistics-warehouse-jobs",
                  "label": "Logistics & Warehouse Jobs",
                  "__CLASS__": "Adzuna::API::Response::Category"
              },
              "company": {
                  "display_name": "My Four Wheels",
                  "__CLASS__": "Adzuna::API::Response::Company"
              },
              "created": "2022-11-18T15:07:40Z",
              "contract_type": "permanent",
              "location": {
                  "area": [
                      "UK",
                      "Scotland",
                      "County Stirling",
                      "Fintry"
                  ],
                  "display_name": "Fintry, County Stirling",
                  "__CLASS__": "Adzuna::API::Response::Location"
              }
          },
          {
              "title": "Driving Instructor Trainee",
              "contract_time": "full_time",
              "latitude": 51.801102,
              "salary_max": 27504.03,
              "longitude": -4.97154,
              "description": "My Four Wheels are on the lookout for people who are looking to start a new career as a Driving Instructor. No experience necessary as we provide full training. Once completed, you are then guaranteed a job with us in your area with earnings of £27,000 - £32,000 per year (dependant on how many hours you work). Due to the ever growing population in the UK, there is always a growing demand for more Driving Instructors year on year. It now takes the average learner driver 47 lessons to pass their …",
              "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701311003?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=62864F3A6942BA54136238297C789673866BA915",
              "salary_is_predicted": "1",
              "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzcwMTMxMTAwMyIsInMiOiJ0ak80dEJmUDdSR3BFSEdfSjVuUTFRIn0.cgikoHwE2WtMPkKP_5fKDG0vyJEJx5DMwSUX2z8n7ZM",
              "__CLASS__": "Adzuna::API::Response::Job",
              "id": "3701311003",
              "salary_min": 27504.03,
              "location": {
                  "__CLASS__": "Adzuna::API::Response::Location",
                  "display_name": "Haverfordwest, Pembrokeshire",
                  "area": [
                      "UK",
                      "Wales",
                      "Pembrokeshire",
                      "Haverfordwest"
                  ]
              },
              "contract_type": "permanent",
              "created": "2022-11-18T15:13:30Z",
              "company": {
                  "__CLASS__": "Adzuna::API::Response::Company",
                  "display_name": "My Four Wheels"
              },
              "category": {
                  "tag": "teaching-jobs",
                  "label": "Teaching Jobs",
                  "__CLASS__": "Adzuna::API::Response::Category"
              }
          },
          {
              "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoidGpPNHRCZlA3UkdwRUhHX0o1blExUSIsImkiOiIzNzAxMzA1ODAwIn0.yWOPf41rPoK68T0Ab0YAl67MpDUOno6IMCTIdkgwfTs",
              "id": "3701305800",
              "__CLASS__": "Adzuna::API::Response::Job",
              "salary_min": 41648.32,
              "contract_type": "permanent",
              "location": {
                  "__CLASS__": "Adzuna::API::Response::Location",
                  "area": [
                      "UK",
                      "London",
                      "East London",
                      "South Hackney"
                  ],
                  "display_name": "South Hackney, East London"
              },
              "category": {
                  "__CLASS__": "Adzuna::API::Response::Category",
                  "label": "Logistics & Warehouse Jobs",
                  "tag": "logistics-warehouse-jobs"
              },
              "created": "2022-11-18T15:07:45Z",
              "company": {
                  "__CLASS__": "Adzuna::API::Response::Company",
                  "display_name": "my four wheels"
              },
              "latitude": 51.5439,
              "title": "Driving Instructor",
              "contract_time": "full_time",
              "salary_max": 41648.32,
              "longitude": -0.041842,
              "description": "My Four Wheels are looking to expand our team and are recruiting both part time and full time Driving Instructors throughout the UK. Around 1.6 million people take their driving test every year, teaching people how to drive is not only an industry proof profession but one which grows every day due to the expanding population of the UK. Each driving instructor work within their local area, work the hours which suit them (Monday - Sunday) and get their very own branded car complete with duel cont…",
              "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701305800?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=B03C90D913F843290834FF57C9C3B35B03C01C7C",
              "salary_is_predicted": "1"
          }
      ]
  },
  "jobs": [
      {
          "__CLASS__": "Adzuna::API::Response::Job",
          "salary_min": 39339.44,
          "id": "3701304202",
          "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoidGpPNHRCZlA3UkdwRUhHX0o1blExUSIsImkiOiIzNzAxMzA0MjAyIn0.UGmYcPu2UiwIa2L-qmLelSIu_cznRrifTfJcPmwp3wI",
          "category": {
              "tag": "logistics-warehouse-jobs",
              "__CLASS__": "Adzuna::API::Response::Category",
              "label": "Logistics & Warehouse Jobs"
          },
          "created": "2022-11-18T15:07:39Z",
          "company": {
              "__CLASS__": "Adzuna::API::Response::Company",
              "display_name": "my four wheels"
          },
          "contract_type": "permanent",
          "location": {
              "display_name": "Colintraive, Argyll & Bute",
              "area": [
                  "UK",
                  "Scotland",
                  "Argyll & Bute",
                  "Colintraive"
              ],
              "__CLASS__": "Adzuna::API::Response::Location"
          },
          "salary_max": 39339.44,
          "title": "Driving Instructor",
          "contract_time": "full_time",
          "latitude": 55.923727,
          "salary_is_predicted": "1",
          "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701304202?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=9C79905DD6DD2D4C4B3D8FAE05148B3835664A65",
          "description": "My Four Wheels are looking to expand our team and are recruiting both part time and full time Driving Instructors throughout the UK. Around 1.6 million people take their driving test every year, teaching people how to drive is not only an industry proof profession but one which grows every day due to the expanding population of the UK. Each driving instructor work within their local area, work the hours which suit them (Monday - Sunday) and get their very own branded car complete with duel cont…",
          "longitude": -5.151736
      },
      {
          "longitude": -0.332443,
          "description": "My Four Wheels are on the lookout for people who are looking to start a new career as a Driving Instructor. No experience necessary as we provide full training. Once completed, you are then guaranteed a job with us in your area with earnings of £27,000 - £32,000 per year (dependant on how many hours you work). Due to the ever growing population in the UK, there is always a growing demand for more Driving Instructors year on year. It now takes the average learner driver 47 lessons to pass their …",
          "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701311115?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=AD762714AEB1F15B55FD537765D64A7C167F4207",
          "salary_is_predicted": "1",
          "latitude": 53.744301,
          "title": "Driving Instructor Trainee",
          "contract_time": "full_time",
          "salary_max": 26584.75,
          "location": {
              "__CLASS__": "Adzuna::API::Response::Location",
              "display_name": "Hull, East Riding Of Yorkshire",
              "area": [
                  "UK",
                  "Yorkshire And The Humber",
                  "East Riding Of Yorkshire",
                  "Hull"
              ]
          },
          "contract_type": "permanent",
          "company": {
              "display_name": "My Four Wheels",
              "__CLASS__": "Adzuna::API::Response::Company"
          },
          "created": "2022-11-18T15:13:30Z",
          "category": {
              "tag": "teaching-jobs",
              "label": "Teaching Jobs",
              "__CLASS__": "Adzuna::API::Response::Category"
          },
          "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzcwMTMxMTExNSIsInMiOiJ0ak80dEJmUDdSR3BFSEdfSjVuUTFRIn0.U-oovP-QaXkclOskmG5umR3prPmOkQGEh2o0uMtcRfA",
          "__CLASS__": "Adzuna::API::Response::Job",
          "salary_min": 26584.75,
          "id": "3701311115"
      },
      {
          "salary_is_predicted": "1",
          "description": "My Four Wheels are on the lookout for people who are looking to start a new career as a Driving Instructor. No experience necessary as we provide full training. Once completed, you are then guaranteed a job with us in your area with earnings of £27,000 - £32,000 per year (dependant on how many hours you work). Due to the ever growing population in the UK, there is always a growing demand for more Driving Instructors year on year. It now takes the average learner driver 47 lessons to pass their …",
          "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701310945?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=B0AED244345D12FEA88D87FDC991D630CC8C0ADB",
          "longitude": -4.13241,
          "salary_max": 26693.31,
          "latitude": 57.581001,
          "title": "Driving Instructor Trainee",
          "contract_time": "full_time",
          "category": {
              "tag": "teaching-jobs",
              "__CLASS__": "Adzuna::API::Response::Category",
              "label": "Teaching Jobs"
          },
          "created": "2022-11-18T15:13:29Z",
          "company": {
              "__CLASS__": "Adzuna::API::Response::Company",
              "display_name": "My Four Wheels"
          },
          "contract_type": "permanent",
          "location": {
              "display_name": "Fortrose, Highland",
              "area": [
                  "UK",
                  "Scotland",
                  "Highland",
                  "Fortrose"
              ],
              "__CLASS__": "Adzuna::API::Response::Location"
          },
          "__CLASS__": "Adzuna::API::Response::Job",
          "salary_min": 26693.31,
          "id": "3701310945",
          "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoidGpPNHRCZlA3UkdwRUhHX0o1blExUSIsImkiOiIzNzAxMzEwOTQ1In0.WANqUBg6l2I5EgOMuhht8Y1u3CNwWwKTj7YqPIAibsA"
      },
      {
          "created": "2022-11-18T15:07:46Z",
          "company": {
              "display_name": "my four wheels",
              "__CLASS__": "Adzuna::API::Response::Company"
          },
          "category": {
              "__CLASS__": "Adzuna::API::Response::Category",
              "label": "Logistics & Warehouse Jobs",
              "tag": "logistics-warehouse-jobs"
          },
          "location": {
              "display_name": "Southwick, Fareham",
              "area": [
                  "UK",
                  "South East England",
                  "Hampshire",
                  "Fareham",
                  "Southwick"
              ],
              "__CLASS__": "Adzuna::API::Response::Location"
          },
          "contract_type": "permanent",
          "__CLASS__": "Adzuna::API::Response::Job",
          "id": "3701305958",
          "salary_min": 39290.84,
          "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoidGpPNHRCZlA3UkdwRUhHX0o1blExUSIsImkiOiIzNzAxMzA1OTU4In0.akieRMR5TbQ_WVyqXLKcM4RVZnvTYrG-8ikRnqPVLCE",
          "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701305958?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=32A5D9CB43204FE26913470BB963BAED507816D9",
          "description": "My Four Wheels are looking to expand our team and are recruiting both part time and full time Driving Instructors throughout the UK. Around 1.6 million people take their driving test every year, teaching people how to drive is not only an industry proof profession but one which grows every day due to the expanding population of the UK. Each driving instructor work within their local area, work the hours which suit them (Monday - Sunday) and get their very own branded car complete with duel cont…",
          "salary_is_predicted": "1",
          "longitude": -1.1121,
          "salary_max": 39290.84,
          "latitude": 50.874001,
          "title": "Driving Instructor",
          "contract_time": "full_time"
      },
      {
          "longitude": -2,
          "description": "My Four Wheels are on the lookout for people who are looking to start a new career as a Driving Instructor. No experience necessary as we provide full training. Once completed, you are then guaranteed a job with us in your area with earnings of £27,000 - £32,000 per year (dependant on how many hours you work). Due to the ever growing population in the UK, there is always a growing demand for more Driving Instructors year on year. It now takes the average learner driver 47 lessons to pass their …",
          "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701312045?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=0CF269C8020B35D261ACE0C7A3747AC69198315C",
          "salary_is_predicted": "1",
          "contract_time": "full_time",
          "title": "Driving Instructor Trainee",
          "latitude": 52.459999,
          "salary_max": 27387.16,
          "contract_type": "permanent",
          "location": {
              "__CLASS__": "Adzuna::API::Response::Location",
              "display_name": "Quinton, Birmingham",
              "area": [
                  "UK",
                  "West Midlands",
                  "Birmingham",
                  "Quinton"
              ]
          },
          "category": {
              "tag": "teaching-jobs",
              "label": "Teaching Jobs",
              "__CLASS__": "Adzuna::API::Response::Category"
          },
          "created": "2022-11-18T15:13:35Z",
          "company": {
              "display_name": "My Four Wheels",
              "__CLASS__": "Adzuna::API::Response::Company"
          },
          "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzcwMTMxMjA0NSIsInMiOiJ0ak80dEJmUDdSR3BFSEdfSjVuUTFRIn0.u67Ubdzl38iU6kFWi7WPhSsXItWeJ9nsop5r7OA9y4E",
          "__CLASS__": "Adzuna::API::Response::Job",
          "id": "3701312045",
          "salary_min": 27387.16
      },
      {
          "description": "My Four Wheels are on the lookout for people who are looking to start a new career as a Driving Instructor. No experience necessary as we provide full training. Once completed, you are then guaranteed a job with us in your area with earnings of £27,000 - £32,000 per year (dependant on how many hours you work). Due to the ever growing population in the UK, there is always a growing demand for more Driving Instructors year on year. It now takes the average learner driver 47 lessons to pass their …",
          "salary_is_predicted": "1",
          "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701311534?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=BA934E7182644144DDE6B3EEFD51F3E3E5F177F9",
          "longitude": -0.012192,
          "salary_max": 29051.15,
          "latitude": 51.494301,
          "title": "Driving Instructor Trainee",
          "contract_time": "full_time",
          "created": "2022-11-18T15:13:33Z",
          "company": {
              "__CLASS__": "Adzuna::API::Response::Company",
              "display_name": "my four wheels"
          },
          "category": {
              "tag": "teaching-jobs",
              "__CLASS__": "Adzuna::API::Response::Category",
              "label": "Teaching Jobs"
          },
          "location": {
              "display_name": "Millwall, East London",
              "area": [
                  "UK",
                  "London",
                  "East London",
                  "Millwall"
              ],
              "__CLASS__": "Adzuna::API::Response::Location"
          },
          "contract_type": "permanent",
          "salary_min": 29051.15,
          "__CLASS__": "Adzuna::API::Response::Job",
          "id": "3701311534",
          "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzcwMTMxMTUzNCIsInMiOiJ0ak80dEJmUDdSR3BFSEdfSjVuUTFRIn0.BRbiHG3tS_6e_q2slIZB56D3V7ErlVM-K2FMN70m1nQ"
      },
      {
          "contract_time": "full_time",
          "title": "Driving Instructor Trainee",
          "latitude": 52.4963,
          "salary_max": 29609.68,
          "longitude": -0.446766,
          "description": "My Four Wheels are on the lookout for people who are looking to start a new career as a Driving Instructor. No experience necessary as we provide full training. Once completed, you are then guaranteed a job with us in your area with earnings of £27,000 - £32,000 per year (dependant on how many hours you work). Due to the ever growing population in the UK, there is always a growing demand for more Driving Instructors year on year. It now takes the average learner driver 47 lessons to pass their …",
          "salary_is_predicted": "1",
          "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701310703?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=A0B5093A192E16C5521860AEF6E859967510EE6F",
          "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoidGpPNHRCZlA3UkdwRUhHX0o1blExUSIsImkiOiIzNzAxMzEwNzAzIn0.1iZpIb0bKm5j8__Yex1VyF-LF80h-sUUoheOSPwnCMQ",
          "id": "3701310703",
          "__CLASS__": "Adzuna::API::Response::Job",
          "salary_min": 29609.68,
          "contract_type": "permanent",
          "location": {
              "area": [
                  "UK",
                  "Eastern England",
                  "Peterborough",
                  "Elmington"
              ],
              "display_name": "Elmington, Peterborough",
              "__CLASS__": "Adzuna::API::Response::Location"
          },
          "category": {
              "__CLASS__": "Adzuna::API::Response::Category",
              "label": "Teaching Jobs",
              "tag": "teaching-jobs"
          },
          "created": "2022-11-18T15:13:28Z",
          "company": {
              "__CLASS__": "Adzuna::API::Response::Company",
              "display_name": "my four wheels"
          }
      },
      {
          "salary_max": 41223.21,
          "latitude": 56.052299,
          "title": "Driving Instructor",
          "contract_time": "full_time",
          "description": "My Four Wheels are looking to expand our team and are recruiting both part time and full time Driving Instructors throughout the UK. Around 1.6 million people take their driving test every year, teaching people how to drive is not only an industry proof profession but one which grows every day due to the expanding population of the UK. Each driving instructor work within their local area, work the hours which suit them (Monday - Sunday) and get their very own branded car complete with duel cont…",
          "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701304579?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=CCE3F6B09E63A77E958D9A21F7A492EA9E351367",
          "salary_is_predicted": "1",
          "longitude": -4.2209,
          "__CLASS__": "Adzuna::API::Response::Job",
          "id": "3701304579",
          "salary_min": 41223.21,
          "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoidGpPNHRCZlA3UkdwRUhHX0o1blExUSIsImkiOiIzNzAxMzA0NTc5In0.40glRIlxWOr1eV_dgQRG6B05RcrKojADqfuz0fmgSuI",
          "category": {
              "tag": "logistics-warehouse-jobs",
              "label": "Logistics & Warehouse Jobs",
              "__CLASS__": "Adzuna::API::Response::Category"
          },
          "company": {
              "display_name": "My Four Wheels",
              "__CLASS__": "Adzuna::API::Response::Company"
          },
          "created": "2022-11-18T15:07:40Z",
          "contract_type": "permanent",
          "location": {
              "area": [
                  "UK",
                  "Scotland",
                  "County Stirling",
                  "Fintry"
              ],
              "display_name": "Fintry, County Stirling",
              "__CLASS__": "Adzuna::API::Response::Location"
          }
      },
      {
          "title": "Driving Instructor Trainee",
          "contract_time": "full_time",
          "latitude": 51.801102,
          "salary_max": 27504.03,
          "longitude": -4.97154,
          "description": "My Four Wheels are on the lookout for people who are looking to start a new career as a Driving Instructor. No experience necessary as we provide full training. Once completed, you are then guaranteed a job with us in your area with earnings of £27,000 - £32,000 per year (dependant on how many hours you work). Due to the ever growing population in the UK, there is always a growing demand for more Driving Instructors year on year. It now takes the average learner driver 47 lessons to pass their …",
          "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701311003?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=62864F3A6942BA54136238297C789673866BA915",
          "salary_is_predicted": "1",
          "adref": "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiMzcwMTMxMTAwMyIsInMiOiJ0ak80dEJmUDdSR3BFSEdfSjVuUTFRIn0.cgikoHwE2WtMPkKP_5fKDG0vyJEJx5DMwSUX2z8n7ZM",
          "__CLASS__": "Adzuna::API::Response::Job",
          "id": "3701311003",
          "salary_min": 27504.03,
          "location": {
              "__CLASS__": "Adzuna::API::Response::Location",
              "display_name": "Haverfordwest, Pembrokeshire",
              "area": [
                  "UK",
                  "Wales",
                  "Pembrokeshire",
                  "Haverfordwest"
              ]
          },
          "contract_type": "permanent",
          "created": "2022-11-18T15:13:30Z",
          "company": {
              "__CLASS__": "Adzuna::API::Response::Company",
              "display_name": "My Four Wheels"
          },
          "category": {
              "tag": "teaching-jobs",
              "label": "Teaching Jobs",
              "__CLASS__": "Adzuna::API::Response::Category"
          }
      },
      {
          "adref": "eyJhbGciOiJIUzI1NiJ9.eyJzIjoidGpPNHRCZlA3UkdwRUhHX0o1blExUSIsImkiOiIzNzAxMzA1ODAwIn0.yWOPf41rPoK68T0Ab0YAl67MpDUOno6IMCTIdkgwfTs",
          "id": "3701305800",
          "__CLASS__": "Adzuna::API::Response::Job",
          "salary_min": 41648.32,
          "contract_type": "permanent",
          "location": {
              "__CLASS__": "Adzuna::API::Response::Location",
              "area": [
                  "UK",
                  "London",
                  "East London",
                  "South Hackney"
              ],
              "display_name": "South Hackney, East London"
          },
          "category": {
              "__CLASS__": "Adzuna::API::Response::Category",
              "label": "Logistics & Warehouse Jobs",
              "tag": "logistics-warehouse-jobs"
          },
          "created": "2022-11-18T15:07:45Z",
          "company": {
              "__CLASS__": "Adzuna::API::Response::Company",
              "display_name": "my four wheels"
          },
          "latitude": 51.5439,
          "title": "Driving Instructor",
          "contract_time": "full_time",
          "salary_max": 41648.32,
          "longitude": -0.041842,
          "description": "My Four Wheels are looking to expand our team and are recruiting both part time and full time Driving Instructors throughout the UK. Around 1.6 million people take their driving test every year, teaching people how to drive is not only an industry proof profession but one which grows every day due to the expanding population of the UK. Each driving instructor work within their local area, work the hours which suit them (Monday - Sunday) and get their very own branded car complete with duel cont…",
          "redirect_url": "https://www.adzuna.co.uk/jobs/land/ad/3701305800?se=tjO4tBfP7RGpEHG_J5nQ1Q&utm_medium=api&utm_source=76dbecca&v=B03C90D913F843290834FF57C9C3B35B03C01C7C",
          "salary_is_predicted": "1"
      }
  ],
  "selectedJob": null,
  "page": 1,
  "what": "",
  "where": "",
  "distance": -1,
  "location0": "",
  "location1": "",
  "location2": "",
  "location3": "",
  "location4": "",
  "location5": "",
  "location6": "",
  "location7": "",
  "category": "",
  "salary_min": -1,
  "salary_max": -1,
  "full_time": -1,
  "part_time": -1,
  "company": -1,
  "recentlySubmitted": false
}
