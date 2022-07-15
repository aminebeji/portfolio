import React from 'react'
import Layout from '../../Layout/Layout'
import AboutMe from '../../sections/AboutMeSection/template'
import {
    ScrollingProvider,
    useScrollSection,
    Section,
} from 'react-scroll-section';
import InfoSection from '../../sections/InfoSections/template';

function HomePage() {
    return (
        <Layout>
            <ScrollingProvider>
                <Section>
                    <AboutMe ></AboutMe>
                </Section>
                <Section>
                    <InfoSection ></InfoSection>
                </Section>
            </ScrollingProvider>

        </Layout>
    )
}

export default HomePage