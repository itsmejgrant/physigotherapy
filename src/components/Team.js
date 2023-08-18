import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const people = [
  {
    name: 'Heather Murray',
    role: 'Owner and Senior Physiotherapist',
    imageUrl: '../images/heather.jpg',
    bio:
      '<p>Heather has experience working across the age span and with individuals with a variety of conditions and disabilities which has led her to develop a wide range of skills.</p><p>Her passion is supporting families and their children from infancy to adolescence to maximise their participation at home, school and within the wider community. Heather provides mobile services north of the river.</p>',
    link: '/about-heather'
  },
  {
    name: 'Jan Walters',
    role: 'Physiotherapist',
    imageUrl: '../images/jan-walters.jpg',
    bio:
      '<p>Jan has joined our team after many years of experience working at Child Development Services (CDS) where she provided community-based physiotherapy, as part of a multidisciplinary team, to children with delayed gross motor skills and/or developmental concerns.</p><p>Jan brings a wealth of knowledge and experience in early intervention to our team.</p>',
    link: '/about-jan'
  },
  {
    name: 'Rebecca Joyce',
    role: 'Therapy Assistant (Level 2)',
    imageUrl: '../images/rebecca.jpg',
    bio:
      '<p>Rebecca is an outstanding therapy assistant with a great range of knowledge, skills and experience that she has gathered from various roles within the disability sector over the past 20 years</p><p>Rebecca found that she enjoyed supporting people to work towards their goals and realised her passion for helping people maximise their functional independence.</p><p>Rebecca provides mobile services north of the river and can assist with the implementation of therapy programs and recommendations.</p>',
    link: '/about-rebecca'
  },
]

const Team = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="lg:w-1/3">
            <h2 className="text-base font-semibold text-purple uppercase tracking-wide">Who we are</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">Meet our team</p>
            <p className="mt-4 text-lg text-gray-500">
              Get to know the people who will help you set and fulfil goals tailored to your situation.
            </p>
          </div>
            <ul
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div>
                      {person.name === 'Heather Murray' ? <StaticImage objectPosition="top" className="shadow-lg rounded-lg w-full h-96" src={'../images/heather.jpg'} alt="Heather Murray, senior physiotherapist and owner" />
                      : person.name === 'Jan Walters' ? <StaticImage objectPosition="top" className="shadow-lg rounded-lg w-full h-96" src={'../images/jan-walters.jpg'} alt="Jan Walters, Physiotherapist" />
                      : <StaticImage objectPosition='top' className="shadow-lg rounded-lg w-full h-96" src={'../images/rebecca.jpg'} alt="Rebecca Joyce, therapy assistant" />
                      }
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-light-green">{person.role}</p>
                    </div>
                    <div className="text-lg text-gray-500 flex flex-col gap-4" dangerouslySetInnerHTML={{__html: person.bio}}></div>
                    <a className="text-gray-500 text-lg mt-4 underline inline-block" href={person.link}>More info</a>
                  </div>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Team
