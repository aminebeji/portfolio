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
import Contact from '../../sections/Contact/template';
import Projects from '../../sections/Projects/template';

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
                <Section>
                    <Projects></Projects>
                </Section>
                <Section>
                    <Contact></Contact>
                </Section>

            </ScrollingProvider>

        </Layout>
    )
}

export default HomePage