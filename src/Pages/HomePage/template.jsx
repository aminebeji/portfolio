import React from 'react'
import Layout from '../../Layout/Layout'
import AboutMe from '../../sections/AboutMeSection/template'
import {
    ScrollingProvider,
    useScrollSection,
    Section,
} from 'react-scroll-section';
import InfoSection from '../../sections/InfoSections/template';
import ExprienceSection from '../../sections/Experience/template';

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
                <Section>
                   <ExprienceSection></ExprienceSection>
                </Section>
            </ScrollingProvider>

        </Layout>
    )
}

export default HomePage