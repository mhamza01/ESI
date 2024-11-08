
//combine clincial and statistical information together here.
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/information.module.css'
import inner_table from '../public/img/interpreting_inner_table.png'
import Image from "next/image";

export default function information(){
    return (
        <div className="container">
            <Head>
                <title>Information</title>
            </Head>
            <div className="row my-5" style={{padding: 30}}>
                <div className="col-lg-8">

                    <h1>About</h1>
                    <br/><br/>
                    <h2 id="effect_size">Effect Size</h2>
                    <p>
                        In health research, effect size has become a commonly used expression of the effectiveness of a treatment, intervention, or program. In general terms, “effect size” means the strength of the
                        relationship between two variables, such as when calculating an odds ratio or correlation coefficient, however there is another unique meaning of this term – the standardized mean difference or SMD.
                        With this specific meaning in mind, use of the term effect size is applicable when working with continuous variables
                        (e.g., weight, depression symptom scores, pain severity, cognitive test performance, blood pressure, etc.). In its simplest form, effect size is calculated by taking the difference of two means and dividing
                        it by their pooled standard deviation.
                    </p>
                    <p>
                        <strong>General Equation: </strong>Effect size = (mean1 - mean2)/SDP
                    </p>
                    <p>
                        It is not a measure of statistical significance, but rather it provides a standardized assessment of the magnitude of difference between two groups.
                        For treatment studies it provides an indication of the magnitude of the treatment’s effect. Unlike statistical significance, it is not particularly sensitive to sample size.
                        Therefore, it can be useful in revealing statistically significant findings that are essentially clinically meaningless, or potentially clinically important findings in which the role of chance cannot be excluded.
                        <br/><br/>
                        While there are several ways to calculate effect size, Cohen’s d and the slightly more conservative Hedges’ g are the most commonly used.
                        The resulting value is, in essence, a signal to noise ratio – the higher the number the greater the signal relative to the noise.
                        However, putting the calculated value into context requires due consideration of other factors and an appreciation of its assumptions and limitations (see below).
                    </p>
                    <br/>

                    <h2 id="what_is_esi">What is the ESI?</h2>
                    <p>
                        Gardner’s Effect Size Illustrator (ESI) is an intuitive, clinically informative, interactive online illustrator that supports the
                        clinician, researcher, educator, and policy maker in determining the apparent importance of the effect size observed between two treatment groups using an advanced graphical approach.
                        Effect sizes are calculated based on the assumption that the distribution of responses around the means are normal.
                        This implies that the mean and median are the same, or at least very similar.
                        The effect size illustrator is based on the same assumption and illustrates not only the means of the groups being compared but also the distributions around each mean.
                        <br/><br/>


                        This assumption allows for a useful interpretation of the results when calculating an effect size.
                        The effect size illustrator shows the percentile ranking of those in one group relative to the average person in the other group.
                        For example, a calculated effect size of 0.5 (when the pooled SD is twice the size of the difference in means) indicates that the average person
                        in one group (the 50th percentile) is at the level of the 69th percentile of the other group. If this were based on a study evaluating two treatment options for pain,
                        it would be said that the average person in group 1 would have less pain than 69% of people in the other group.
                        If the effect size was 0.47 the average person in group 1 would be doing better than 68% of those in group 2 in terms of pain severity.
                        This percentile comparison, especially when simultaneously illustrated, provides for a clearer indication of how the two groups compare.
                        A table is provided that relates the calculated effect size to the estimated percentile comparisons.
                        <br/><br/>

                        Regarding research on health interventions, the ESI is a unique resource that can help clinicians and health policy makers use evidence from research
                        studies in making patient-specific decisions and health policy decisions that affect our community.
                        This online tool allows users to input data from continuous outcome measures taken directly from the results of a clinical study
                        (e.g. randomized controlled trial or meta analysis) to create illustrations that provide specific visualizations and interpretations of effect size calculations.
                    </p>

                    <br/>
                    <h2 id="interpreting">Interpreting Effect Sizes</h2>
                    <p>
                        It is important to address the mythologies that relate to the interpretation of effect size values.
                        Professor Jacob Cohen reluctantly suggested thresholds of 0.2, 0.5, and 0.8 as indicators of small, medium, and large effects.

                        <br/><br/>
                        However, in his statistical text he warns:<br/>

                            <strong>"</strong>The terms ‘small’, ‘medium’, and ‘large’ are relative . . . to each other . . . the definitions are arbitrary . . .
                            these proposed conventions were set forth throughout with much diffidence, qualifications, and invitations not to employ them if possible. …
                            The values chosen had no more reliable a basis than my own intuition.<strong>"</strong>

                        <br/><br/>
                        In: Cohen J. Statistical power analysis for the behavioural sciences. Second edition, 1988. Hillsdale, NJ: Lawrence Earlbaum Associates. p. 532.

                        <br/><br/>
                        Despite Professor Cohen’s warnings and pleadings not to use them, these thresholds are being perpetuated and applied uncritically as if they provide meaningful distinctions.
                        The Effect Size Illustrator allows for a more precise interpretation of the effect size expression and in doing so obviates the need for arbitrary thresholds.

                        <br/><br/>
                        It is also important to keep in mind that fully understanding the meaning of any calculated effect size goes beyond the number calculated or any picture illustrating
                        the two groups’ means and variances. It requires consideration of the baseline severity, the amount of change observed within groups, the difference between means,
                        the measurement used, the study’s methods, and related clinical and research findings.

                        <br/><br/>
                        <strong>The following questions provide a guide to understanding the implications of any calculated and illustrated effect size</strong>:
                    </p>

                    <div>
                        <table id="interpreting_table">
                            <thead>
                                <tr>
                                    <th>What is the effect size?</th>
                                    <td>
                                        The larger the number the greater the difference between the two groups being compared.
                                        It is important to keep in mind that larger effect sizes can be a result of important differences
                                        in means between groups OR small variances in individual responses within groups.
                                    </td>
                                </tr>
                                <tr>
                                    <th>Were change scores or final scores used to calculate effect size?</th>
                                    <td>
                                        Calculations can be very different depending on whether you calculate an effect size based on changes in score from baseline
                                        (“change scores”) or from scores observed at the end of the study (final scores).
                                        An impressive appearing effect size from change scores can be quickly nullified, in terms of its importance, when the final scores are considered.
                                        <br/><br/>
                                        <Image src={inner_table}></Image>
                                        <br/><br/>
                                        The change score effect size is (0.5-0.3)/0.2=1.0 and the final score effect size is (8.2-8.0)/0.6=0.33.
                                        Drug treatment confers a precise advantage in terms of change from baseline.
                                        However, the amount of change is small when the final scores are compared.
                                    </td>
                                </tr>
                                <tr>
                                    <th>What is the difference in means between the two groups?</th>
                                    <td>To more accurately understand the clinical meaning of the calculated effect size it is important to look at the difference between the groups’ mean scores and consider its clinical meaning.
                                        Is the difference in means an important difference or is it relatively trivial? What is the minimal difference that would be considered to be important or worthwhile?</td>
                                </tr>
                                <tr>
                                    <th>What is the variance measured?</th>
                                    <td>
                                        It should be noted that effect size calculations are sensitive to the standard deviation calculated.
                                        A large effect size may result from a small standard deviation as opposed to an impressive mean difference between groups.
                                        A homogeneous set of responses (small standard deviation) may not represent the effect of the intervention when used under normal clinical circumstances.
                                        The sample studied may not be representative of the clinical population.
                                        A larger variance might indicate either the presence of subgroups who respond well and less well to the treatment or that treatment response is highly unpredictable and varies from positive to negative among individuals.
                                    </td>
                                </tr>
                                <tr>
                                    <th>What was measured?</th>
                                    <td>
                                        All outcome measures are not created equal.
                                        An effect size of 0.9 that measures pain is likely more clinically important than an effect size that measures cortisol levels.
                                        The former is a patient-oriented effect that matters whereas cortisol levels are non-specific biomarkers that may or may not have any relevance to the individual’s current or future well-being.
                                        It is also important to consider other characteristics about the measure including its validity and reliability.
                                        Is it a measure of what it says it measures?
                                        Is it sensitive to changes in the individual’s status? Does it reliably reflect the individual’s status and does it do it similarly when repeated?
                                        <br/><br/>
                                        If the measure is a biomarker (or surrogate outcome), is this difference associated with clinically important differences. How strong or weak is the link between the biomarker and meaningful clinical outcomes.
                                    </td>
                                </tr>
                                <tr>
                                    <th>What else could have affected the results?</th>
                                    <td>
                                        The findings of comparative studies can be a result of chance, differences caused by the intervention under study, confounding variables, and a multitude of possible biases.
                                        Better study designs are used to markedly reduce the latter two concerns and are able to report the role of chance (e.g., p-value).
                                        However the effect size calculated still has a rather narrow interpretation.
                                        It applies to the people who were studied (or others who would be considered “not different in important ways from those studied”),
                                        for the duration that they were studied, and under the circumstances of their treatment (e.g., adherence to the treatment protocol, the frequency or dose of the intervention,
                                        the training of the provider of the intervention, the purity of the intervention, and other considerations such as history of other treatments and concurrent interventions).
                                    </td>
                                </tr>
                                <tr>
                                    <th>What have other studies found?</th>
                                    <td>
                                        Of course the effect size estimated from a single comparative study or a single meta-analysis does not exist in isolation.
                                        It adds to a pre-existing and always expanding knowledge base that includes related research and theories as well as clinical and patient experiences.
                                        The meaning of the effect size at hand should be considered in the context of other findings.
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <br/><br/>
                    <h2 id="esi_nnt">Effect Sizes and NNTs</h2>
                    <p>
                        The translation of research findings into clinical practice requires that clinicians, educators, and policy makers be competent in understanding pivotal research.
                        Significant progress has been made to the benefit of clinicians regarding understanding the clinical importance of results that are based on dichotomous outcomes
                        (e.g., calculating the number needed to treat (NNT) for one person to benefit).
                        Intuitive online illustrators are also available that can be used to translate study results using dichotomous variables (e.g., responder/non-responder) to support informed decision making
                        (e.g. Chris Cates Visual Rx). Similar tools, such as the Effect Size Illustrator, have long been needed to support the clinical interpretation of findings that are based on continuous variables,
                        for example symptom scales (e.g. pain, depression), severity of impairment or disability, quality of life, cognitive test performance, laboratory indices, exercise tolerance, and so on,
                        all of which serve as the basis of effect size calculations.
                    </p>

                    <br/>
                    <h2 id='clinical'>Clinical Information Regarding Effect Size</h2>

                    <p>
                    The translation of research findings into clinical practice requires that clinicians and policy makers be competent in understanding pivotal clinical research.
                    Comparing two groups using an effect size or standardized mean difference (e.g. Cohen's d, Hedges' g) has become increasingly common in the past few years.
                    Effect side is the ratio of the difference between groups divided by the calculated standard deviation.
                    This is akin to a signal to noise ratio; the higher the value the more noticeable the signal compared to the noise.
                    </p>

                    <p>
                    Cohen (1969, 1988) hesitantly offered the following thresholds for clinically interpreting effect size calculations and provides the following common examples:
                    </p>

                    <div>
                        <table id='clinical_table1'>
                            <thead>
                                <tr>
                                    <th>Effect Size</th>
                                    <th>Clinical Interpretation</th>
                                    <th>Lay Example</th>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td>No Effect</td>
                                    <td>Complete overlap; no difference in means</td>
                                </tr>
                                <tr>
                                    <td>0.2</td>
                                    <td>Small clinical effect</td>
                                    <td>Difference in heights of 15 and 16 year old girls</td>
                                </tr>
                                <tr>
                                    <td>0.5</td>
                                    <td>Medium clinical effect</td>
                                    <td>Difference in heights of 14 and 18 year old girls</td>
                                </tr>
                                <tr>
                                    <td>0.8</td>
                                    <td>Large clinical effect</td>
                                    <td>Difference in heights of 13 and 18 year old girls, or difference in IQ between PhDs and 'typical college freshmen'</td>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <p>Interpreting the clinical significance of an effect size is not intuitive. The effect size thresholds, offered by Professor Cohen, of 0.2, 0.5, and 0.8 have been extensively cited as relating to small, medium, and large clinical effects, but are not without criticism.
                        What is often overlooked is what else Professor Cohen said: "The terms 'small', 'medium', and 'large' are relative... to each other... the definitions are arbitrary... these proposed conventions were set forth throughout with much diffidence, qualifications, and invitations not to employ them if possible.” “The values chosen had no more reliable a basis than my own intuition."
                    </p>

                    <p>
                    An effect size needs to be interpreted with consideration of the observed difference between means in context of illness severity or burden, measured variance, and other factors.
                    </p>

                    <h2 id='statistic'>Statistical Information Regarding Effect Size</h2>

                    <p>
                    The concept of effect size was developed to facilitate comparisons of efficacy across studies (e.g., meta analysis), but it is also commonly used to express treatment effect in single studies.
                    A commonly used effect size measure calculates the difference between 2 groups (e.g., drug vs. placebo or drug A vs. drug B), adjusted for the variance in response within groups.
                    Required for this calculation are: a) continuous data, b) means, and c) standard deviations. Adjusting for the variance within groups is accomplished by dividing the difference between the groups by a specific measure of variance, the most common one being the pooled standard deviation.
                    The resulting effect size is then unitless. As such, a researcher or clinician can compare different effect sizes that are measures of different outcomes using different measurement scales.
                    </p>

                    <p>
                    Effect sizes can also be thought of as the percentile standing of the control group participant (e.g., treatment group A) who scores similarly to the average experimental group participant (treatment group B).
                    An ES of 0.0 indicates that the mean of the experimental group is at the 50th percentile of the control group's average response. An ES of 0.8 indicates that the mean of the experimental group is at the 79th percentile of the control group.
                    An effect size of 1.7 indicates that the mean of the experimental group is at the 95.5 percentile of the control group. These percentiles come from the 'normal distribution'. An effect size is exactly equivalent to a 'Z-score' of a standard Normal distribution.
                    </p>

                    <p>
                    The following able shows conversions of effect sizes to percentiles (I1) (based on the assumption that scores are normally distributed) and the equivalent change in rank order for a group of 25 (I2).
                    </p>

                    <div>{/* INSERT CHART FOR STATISTICAL INFO HERE */}</div>

                    <div id='table'>
                        <table id='clinical_table1'>
                            <thead>
                                <tr>
                                    <th>Effect Size</th>
                                    <th>Percentage in one group (e.g., group X) who are doing less well
                                        <br></br> than the average person in the other group (e.g., group Y)</th>
                                    <th></th>
                                    <th>Effect Size</th>
                                    <th>Percentage in one group (e.g., group X) who are doing less well
                                        <br></br> than the average person in the other group (e.g., group Y)</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>Cohen's d</th>
                                    <th>Hedge's d</th>
                                    <th></th>
                                    <th>Cohen's d</th>
                                    <th>Hedge's g</th>
                                </tr>
                                <tr>
                                    <td>0.00</td>
                                    <td>50.0</td>
                                    <td>50.0</td>
                                    <td>0.85</td>
                                    <td>80.0</td>
                                    <td>80.2</td>
                                </tr>
                                <tr>
                                    <td>0.05</td>
                                    <td>52.0</td>
                                    <td>52.0</td>
                                    <td>0.90</td>
                                    <td>81.3</td>
                                    <td>81.6</td>
                                </tr>
                                <tr>
                                    <td>0.10</td>
                                    <td>53.9</td>
                                    <td>54.0</td>
                                    <td>0.95</td>
                                    <td>82.6</td>
                                    <td>82.9</td>
                                </tr>
                                <tr>
                                    <td>0.15</td>
                                    <td>55.9</td>
                                    <td>56.0</td>
                                    <td>1.00</td>
                                    <td>83.9</td>
                                    <td>84.1</td>
                                </tr>
                                <tr>
                                    <td>0.20</td>
                                    <td>57.8</td>
                                    <td>1.10</td>
                                    <td>1.10</td>
                                    <td>86.2</td>
                                    <td>86.4</td>
                                </tr>
                                <tr>
                                    <td>0.25</td>
                                    <td>59.8</td>
                                    <td>59.9</td>
                                    <td>1.20</td>
                                    <td>88.3</td>
                                    <td>88.5</td>
                                </tr>
                                <tr>
                                    <td>0.30</td>
                                    <td>61.7</td>
                                    <td>61.8</td>
                                    <td>1.30</td>
                                    <td>90.1</td>
                                    <td>90.3</td>
                                </tr>
                                <tr>
                                    <td>0.35</td>
                                    <td>63.6</td>
                                    <td>63.7</td>
                                    <td>1.40</td>
                                    <td>91.7</td>
                                    <td>91.9</td>
                                </tr>
                                <tr>
                                    <td>0.40</td>
                                    <td>65.4</td>
                                    <td>65.5</td>
                                    <td>1.50</td>
                                    <td>93.1</td>
                                    <td>93.3</td>
                                </tr>
                                <tr>
                                    <td>0.45</td>
                                    <td>67.2</td>
                                    <td>67.4</td>
                                    <td>1.60</td>
                                    <td>94.3</td>
                                    <td>94.5</td>
                                </tr>
                                <tr>
                                    <td>0.50</td>
                                    <td>69.0</td>
                                    <td>69.2</td>
                                    <td>1.70</td>
                                    <td>95.4</td>
                                    <td>95.5</td>
                                </tr>
                                <tr>
                                    <td>0.55</td>
                                    <td>70.7</td>
                                    <td>70.9</td>
                                    <td>1.80</td>
                                    <td>96.3</td>
                                    <td>96.4</td>
                                </tr>
                                <tr>
                                    <td>0.60</td>
                                    <td>72.4</td>
                                    <td>72.6</td>
                                    <td>1.90</td>
                                    <td>97.0</td>
                                    <td>97.1</td>
                                </tr>
                                <tr>
                                    <td>0.65</td>
                                    <td>74.0</td>
                                    <td>74.2</td>
                                    <td>2.00</td>
                                    <td>97.6</td>
                                    <td>97.7</td>
                                </tr>
                                <tr>
                                    <td>0.70</td>
                                    <td>75.6</td>
                                    <td>75.8</td>
                                    <td>2.25</td>
                                    <td>98.7</td>
                                    <td>98.8</td>
                                </tr>
                                <tr>
                                    <td>0.75</td>
                                    <td>77.1</td>
                                    <td>77.3</td>
                                    <td>2.50</td>
                                    <td>99.3</td>
                                    <td>99.4</td>
                                </tr>
                                <tr>
                                    <td>0.80</td>
                                    <td>78.6</td>
                                    <td>78.8</td>
                                    <td>3.00</td>
                                    <td>99.8</td>
                                    <td>99.9</td>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <p>
                    1. Effect size estimates in this table are based on a standardized sample size of 50 people per group.
                    The difference between Cohen’s d and Hedges’ g percentiles increases slightly as the sample size decreases.
                    For example, when the samples are 20 per group the percentiles for an effect size of 0.8 for Cohen’s d and for Hedges’ g are 78.2% and 78.8%. respectively.
                    </p>

                    <p>
                    2. It can also be stated that the effect size indicates the percentage in one group (e.g., group Y) who are doing better than the average person in the other group (group X).
                    Note that the average person represents the 50th percentile of that group and that distributions are assumed to be normal such that the mean and median are essentially equal.
                    </p>

                    <p>
                    3. With significant reservations and pleas not to use them, Cohen offered that 0.2, 0.5, and 0.8 might denote small, medium, and large effect sizes.
                    However, we recommend that these terms not be used. Instead, use the effect size illustrator and its provided interpretation along with your appraisal of the source of data and other evidence to determine the importance of the effect size calculated.
                    </p>
                    </div>
                    <div class="col-lg-4">

                    <div className={styles.onpage}>
                        <h2>On This Page</h2>
                        <ul>
                            <li>
                                <a className={styles.navitem} href="#effect_size">Effect Size</a>
                            </li>
                            <li className="nav-itm">
                                <a className={styles.navitem} href="#what_is_esi">What is ESI?</a>
                            </li>
                            <li className="nav-itm">
                                <a className={styles.navitem} href="#interpreting">Interpreting Effect Sizes</a>
                            </li>
                            <li className="nav-itm">
                                <a className={styles.navitem} href="#esi_nnt">Effect Sizes and NNTs</a>
                            </li>
                            <li className="nav-itm">
                                <a className={styles.navitem} href="#clinical">Clinical Information Regarding Effect Size</a>
                            </li>
                            <li className="nav-itm">
                                <a className={styles.navitem} href="#statistic">Statistical Information Regarding Effect Size</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    )
}