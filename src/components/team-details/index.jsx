import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import React from 'react';
import TeamDetailsArea from './team-details-area';
import FooterContact from '@/src/layout/footers/footer-contact';
import Header from '@/src/layout/headers/header';
import Footer from '@/src/layout/footers/footer';

const TeamDetails = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb top_title="IT Advisor" page_title="Team Details" />
                <TeamDetailsArea />
                <FooterContact bg_style={true} />
            </main>
            <Footer />
        </>
    );
};

export default TeamDetails;