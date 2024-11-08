//combine links and contact together here.
import Head from 'next/head'

export default function contact(){
    return (
        <div className="container">
            <Head>
                <title>Contact</title>
            </Head>
            <div style={{padding: 30}}>
                <h1>Contact</h1>
                <p>
                    We welcome your thoughts and ideas.
                    We’d like to know for what purposes you are using the ESI, how it has helped you, and what we can do to make it better.
                    <br/>Please contact us via email: <a href="mailto:david.gardner@dal.ca">david.gard
                    ner@dal.ca</a>
                </p>

                <br/>
                <h4>Information about the developers of Gardner’s Effect Size Illustrator:</h4>

                <br/>
                <h5>David Gardner, BSc Pharm, PharmD, MSc</h5>
                <p>Professor, Department of Psychiatry and College of Pharmacy</p>
                <p>Dalhousie University</p>
                <p>Halifax, Nova Scotia, CANADA</p>

                <h5>Andrea Murphy, BSc Pharm, PharmD</h5>
                <p>Associate Professor, School of Nursing</p>
                <p>Dalhousie University</p>
                <p>Halifax, Nova Scotia, CANADA</p>

                <br/><br/>
                <h5>We gratefully acknowledge:</h5>
                <p>
                    <br/>
                    The Effect Size Illustrator Gen 2 team for their work on this site:

                    <br/><br/>
                    Haojie Cui, Thomas Rizzuto and Pan Gong for their work on the Illustrator and UI.

                    <br/><br/>
                    Adithya Girish and Hamza Ali for their work on Content design and UI.
                </p>

                <p>
                    Haojie Cui: <a href="mailto:hj858960@dal.ca">hj858960@dal.ca</a><br/>
                    Thomas Rizzuto: <a href="ThomasRizzuto@dal.ca">ThomasRizzuto@dal.ca</a><br/>
                    Pan Gong: <a href="Pan.Gong@dal.ca">Pan.Gong@dal.ca</a><br/>
                    Adithya Girish: <a href="ad587421@dal.ca">ad587421@dal.ca</a><br/>
                    Hamza Ali: <a href="mh918605@dal.ca">mh918605@dal.ca</a>
                </p>
            </div>
        </div>
    )
}