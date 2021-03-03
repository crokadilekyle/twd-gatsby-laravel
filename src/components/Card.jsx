import React from 'react'
import PropTypes from 'prop-types'

function Card({ title, children }) {
    return (
        <article className="flex flex-col border border-twd-blue m-8 max-w-1/2 flex-1">
          <header className="bg-twd-purple text-white p-4">
                <h3>{ title }</h3>
          </header>
          <section className="flex flex-col text-center p-4 flex-grow">
          { children }
          </section>
          <footer className="flex justify-center">
            <button>Read More</button>
          </footer>
        </article>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Card
