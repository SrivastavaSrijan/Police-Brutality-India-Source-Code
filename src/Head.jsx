import React from 'react';
import MainPicture from './Assets/MainPicture.webp';
export const Head = () => {
  return (
    <section class='hero is-primary is-small is-bold'>
      <div class='hero-body container is-fluid'>
        <div class='columns is-vcentered'>
          <div class='column is-7'>
            <h1 className='title is-size-2 is-size-3-mobile has-text-weight-bold'>
              #JusticeforJayarajandFenix
            </h1>

            <p class='subtitle is-size-5 has-margin-top-20 is-family-secondary'>
              Raise your voice against police brutality.
            </p>

            <div class='control'>
              <button class='button is-white is-medium'>
                <a
                  href='#Email'
                  // target='_blank'
                  // rel='noopener noreferrer'
                  className='has-text-black'
                >
                  How you can help
                </a>
              </button>
            </div>
          </div>

          {/* <div class='column is-4 has-text-centered is-paddingless is-marginless'>
            <figure class='image is-128by128'>
              <img src={MainPicture} alt='Jayaraj and Fenix, illustration' />
            </figure>
          </div> */}
        </div>
      </div>

      <div class='hero-foot'>
        <nav class='tabs'>
          <div class='container is-fluid'>
            <ul>
              {/* <li class='is-active'>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://docs.google.com/document/u/0/d/1apRsKSoQQj41Q7U4EVMXO2KS5xsxSeA7UjdhvVyaARA/mobilebasic'
                >
                  Letter Format + Email ID's of Officials
                </a>
              </li> */}

              <li>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://www.change.org/p/tamilnadu-highcourt-the-2-policemen-who-committed-police-brutality-must-me-trialed'
                >
                  Petition to TN Highcourt
                </a>
              </li>

              <li>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://www.change.org/p/tamilnadu-state-government-justice-for-fenix-31-and-jeyaraj-63-that-were-allegedly-killed-by-sathankulam-police?source_location=topic_page'
                >
                  Petition to TN Govt.
                </a>
              </li>

              <li>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://www.change.org/p/ipca-justice-for-fenix-and-jeyaraj'
                >
                  Petition to IPCA
                </a>
              </li>

              <li>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://www.change.org/p/narendra-modi-justice-for-jayaraj-and-fenix?utm_source=share_petition&utm_medium=custom_url&recruited_by_id=30904430-9017-11ea-bf91-c5dcc6e6b414#:~:text=JUSTICE%20FOR%20JAYARAJ%20AND%20FENIX&text=Change.org&text=After%20a%20video%20surfaced%20of,started%20a%20petition%20demanding%20justice.&text=You%20can%20sign%20the%20petition,message%20that%20Black%20lives%20matter.'
                >
                  Petition to PM
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};
