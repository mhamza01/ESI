// combine Guide and example together here

import Head from "next/head";
import Link from "next/link";
import styles from '../styles/guide.module.css'

export default function guide(){
    return (
        <div className="container">
            <Head>
                <title>Guide</title>
            </Head>
            <div className="row my-5" style={{padding: 30}}>
                <div className="col-lg-8">
                    <h1>Users' Guide</h1>
                    <div id="before_start">
                        <h2>What you need before you start</h2>
                        <p>
                            There are two ways to use the ESI. Using Option 1, you can illustrate an effect size from one that has already been calculated (e.g., from an effect size reported in a study result).
                            With Option 2, you can calculate and illustrate an effect size using the summary data available (e.g., number of participants, means, and any one of standard deviations, standard errors, or 95% confidence intervals).
                            The illustrator allows you to add details to your illustration about the study, participants, and source of information.
                            As such, having the original source available when you use the ESI will enable you to take advantage of this functionality.
                        </p>
                    </div>

                    <br/><br/>
                    <div id="es_calc_tab">
                        <h2>Effect Size Calculation Tab</h2>
                        <p>
                            Once the ESI has been activated you should see the Effect Size Calculation tab’s details (shown below). You can see the other tabs’ details by clicking each tab.

                            <br/><br/>
                            Select either Option 1 (when you are using summary data to calculate, interpret, and illustrate an effect size) or option 2 (to interpret and illustrate an effect size when it has already been calculated for you).
                        </p>

                        <h3>OPTION 1</h3>
                        <p>
                            You have the option to select the specific effect size expression you would like to be calculated.
                            Cohen’s d is the default as it is the most commonly used. Hedges’ g is a slight variation on the same theme in which the Cohen’s d calculation is modified slightly to adjust for biases inherent in using small sample sizes.
                            The difference between the effect sizes calculated using the two formulae is usually quite small.
                            Glass’s delta is appropriate when there are three or more groups being compared.
                            In this case several effect sizes are calculated using a common standard deviation of your choosing, which is usually that of the control group of the study.
                            Use Group 1 for the control group data to calculate Glass’s delta correctly.

                            <br/><br/>
                            Next enter your group names and the group sizes, mean scores, and expression of variance values.
                            The default expression of variance is standard deviation (SD).
                            However, you can enter the standard error (SE) if that is what is provided or you can enter a value related to the 95% confidence interval.

                            95% Confidence Interval: When a study provides the mean and its 95% confidence interval (and no SD or SE) the number to be entered is the difference between the upper and lower limit of the confidence interval.
                            For example, if the group’s mean is 9.7 and the 95% confidence interval is 7.7 to 11.7 you would enter 4.0, which is the difference between the upper (11.7) and lower (7.7) bounds of the confidence interval.

                            Once you have entered your group names and data it is time to take a quick look at your Analysis & Interpretation tab as well as your Illustration tab.
                            At this point you will see the calculated effect size and its illustration.
                        </p>

                        <h3>OPTION 2</h3>
                        <p>
                            Enter the effect size in the box provided and, if known, indicate the type of effect size that was calculated.
                            Add the names of the groups being compared and, if available, the group sizes.
                        </p>
                        <p>
                            Compared with option 1, this option is limited in what additional information can be added to the illustration.
                            For example, the scale cannot be added. However, the illustration does provide an accurate visualization of the overlap in distributions between groups and the
                            percentile ranking in one group that is equivalent to the average person in the other group based on the effect size provided.
                        </p>

                        <h4>Other Features</h4>
                        <p>
                            To change the colour of your illustrations click the border and fill squares for each group.

                            <br/><br/>
                            To add a third or more groups you must use Option 1. This can be accomplished by clicking the “+” button.
                            You will notice when you do this that “Group 2” changes to “Group 3”. Enter the relevant data for the new group.
                            To move among groups 2, 3, 4, and so on use the arrow keys (← →).
                        </p>
                        <p>
                            To delete a group’s data click the " – " key. To completely remove a group click the " – " key a second time.

                            <br/><br/>
                            At this point you can review the analysis and interpretation and your illustration by clicking the respective tabs and you can go on to the Illustration Options and Study Details tabs.
                            These tabs can be used to create an appropriately labelled illustration that suits your image preferences and provides details and context regarding the data.
                        </p>
                    </div>

                    <br/><br/>
                    <div id="illustration_options">
                        <h2>Illustration Options tab</h2>
                        It is recommended that you provide a descriptive or even declarative title to your illustration. Do so using the “Title of figure” box.


                        <br/><br/><br/><br/>
                        It is also recommended that you label your axis by filling in the Name of outcome measure box.<br/>

                        <br/>
                        Do this to indicate what was measured and how it was measured.
                        For example, if a study was measuring pain using a 100 mm visual analogue scale you could label the axis as “Pain severity (100 mm VAS)”,
                        or if the study was measuring a change in depressive symptoms using the Hamilton Depression Rating Scale you could label the axis “HDRS change score”.
                        Indicate the units of measure when appropriate, for example if the axis is showing time you could indicate “Time (hours)” or “Time (days)”.
                        <br/><br/>
                        It is very important that you pay attention to the meaning of higher values as this is critical to the accuracy of the interpretation of the effect size and to how it is illustrated.
                        The default of the system is that higher values are indicative of better health (e.g., exercise tolerance test, mini mental status exam scores).
                        However, higher values of many outcome measures actually indicate worse health, for example total cholesterol and Hamilton Depression Rating Scale scores.
                        Be sure to change the meaning of higher values to “worse health” when appropriate.
                        <br/><br/>
                        There is flexibility in the effect size illustration that you create.
                        The default image is oriented on the y-axis (vertical) and normal distribution of data is shown using Gardner’s ornament (because it looks like a Christmas tree ornament to many).
                        The two or more groups being compared are shown side by side.
                        However, options are provided to switch the illustration to a typical Gaussian distribution (the normal or bell curve), to show the distribution on the x-axis, and to overlap the images.


                        <br/><br/><br/><br/>
                        The image and its interpretation can be further fine tuned with the remaining options:
                        <br/><br/>
                        Range of values: the default range of values is the visual representation of 99% of the calculated confidence interval of all groups.
                        This can be changed by specifying a preferred range of values to illustrate.
                        For example, if the mean and standard deviation values lead to negative values when illustrating 99% of the expected responses on a scale that has a minimum score of 0
                        (such as many symptoms scales) you can change the range of values to begin at zero (0) and to go to a reasonable maximum value.
                        Using this function will limit the use of the “Illustrate” function described below.
                        <br/><br/>
                        Image girth: The default is to show the maximum girth. The distributions can be narrowed if preferred. This can be helpful to improve the visual inspection of how the groups compare.
                        <br/><br/>
                        Illustrate (99%, 95%, and 90%): The range of the distribution illustrated for the groups can be controlled using this option.
                        The default is an illustration of 99% of distribution. This gives the image a truncated appearance, which it is.
                        However, only the outlying 1% (0.5% per tail) has been eliminated. This has been done to focus the visual comparison.
                        Under certain circumstances it may be useful to further limit the data range illustrated (e.g., 95% or 90%).
                        <br/><br/>
                        State percentage of overlap: A measure of how similar the two groups are in terms of the variable measured can be provided by assessing the overlap between groups.
                        This information will be provided in the Analysis & Interpretation tab when “yes” is selected.
                        <br/><br/>
                        Show mean lines: You can add the mean lines for all groups in the illustration. The default is to show the mean line of the healthiest group relative to the other groups.
                        <br/><br/>
                        You should experiment with these illustration options to create the image you find to be most acceptable.
                    </div>

                    <br/><br/>
                    <div id="study_details">
                        <h2>Study Details tab</h2>
                        <p>
                            This tab allows you to add important details about the source of information.
                            What you add to this tab will be included in the Analysis & Interpretation tab.
                            The value of including these details will be more obvious in a future version of the ESI when the “save” and “search” functionality has been added.
                            At this time, you can use the “select all” function to copy and paste the Analysis & Interpretation summary if wishing to save or disseminate this information.


                            <br/><br/>
                            <strong>Citation</strong>: It is recommended you provide useful details about the source of information, for example the study’s citation.


                            <br/><br/>
                            <strong>What was studied?</strong>: Use these boxes to provide details about what was studied. Include what each group was treated with or exposed to. For example, for treatment studies involving medications you could provide the drug name and dosing information (e.g., average dose, dose range, etc.).


                            <br/><br/>
                            <strong>Who was studied?</strong>: Provide a description of who was studied. Provide the most relevant information so that it is clear who the information applies to (e.g., age, diagnosis, concurrent therapies, etc.).


                            <br/><br/>
                            <strong>Duration of study</strong>: Indicate the duration of the study


                            <br/><br/>
                            <strong>Study design</strong>: Indicate if the information comes from an RCT, meta-analysis, or another study methodology.


                            <br/><br/>
                            <strong>Other study design features</strong>: Provide other important design and analysis details (e.g., blinding, cross-over, pre-/post- analysis, intention-to-treat vs. per protocol analysis, etc.).
                        </p>
                    </div>

                    <br/><br/>
                    <div id="analysis">
                        <h2>Analysis & Interpretation tab</h2>
                        <br/><br/>
                        <p>
                            An example of the analysis and interpretation output is provided above when three groups are being compared.
                            The output has been truncated in this example. However, it shows how the various details included in the previous tabs will be included in the effect size analysis and interpretation.
                            To see the full interpretation scroll down using the bar on the right.
                        </p>
                    </div>

                    <br/><br/>
                    <div id="illustration_tab">
                        <h2>Illustration tab</h2>
                        <p>
                            Several illustrations are provided showing the various possible formats of the effect size illustrations.
                            Each is based on a single trial involving three groups.
                            The default illustration shows Gardner’s ornaments and has an interactive component.
                            Click on each ornament to see how each relates to the others in terms of the average person in one group compared to the other group.
                            Percentages do not appear if you are using the “overlapping” option.
                        </p>
                        <br/><br/>
                        <p>
                            <strong>Export</strong>: you may wish to use your effect size illustration for various purposes (in a publication or presentation).
                            This can be accomplished by exporting the image as a JPEG.
                            An alternative is to do a screen capture of the image which can then be pasted and cropped in a word processing or presentation file.
                        </p>
                    </div>

                    <br/><br/>
                    <div id="forthcoming_features">
                        <h2>Forthcoming features</h2>
                        <p>
                            <strong>Save/Search</strong>: We plan to build in save and search features such that you can save your illustrations and later search for it or for illustrations prepared by other uses that are saved to the database.
                            This can be useful if you create an illustration of a highly publicized study or if you want to share your contribution with colleagues.
                            Over time this tool can serve as a repository of effect size illustrations.


                            <br/><br/>
                            <strong>Print</strong>: We plan to build in a print feature in the future.


                            <br/><br/>
                            Do you have any other suggested features you would like to see? Don’t hesitate to let us know.
                            See the <Link href="/contact">
                                        <a>contact</a>
                                    </Link> page for more.
                        </p>
                    </div>


                    <br/><br/>
                    <div id="examples">
                        <h2>Examples</h2>

                        <br/>
                        <h4>Example 1</h4>
                        <p>
                            <strong>Reference article</strong>: Turner EH, Matthews AM, Linardatos E, Tell RA, Rosenthal R.
                            Selective publication of antidepressant trials and its influence on apparent efficacy. N Engl J Med. 2008 Jan 17;358(3):252-60.
                        </p>
                        <p>
                            In January, 2008 the New England Journal of Medicine published the above article that revealed a 32% inflation of apparent antidepressant treatment effect related to publication bias.
                            This inflation was calculated using the Hedges’ g effect size expression. The authors calculated an effect size of 0.41 based on published trials.
                            It was 0.31 when calculated using trials submitted to the FDA. 0.41 divided by 0.31 is 1.32, indicating an inflated effect size of 32%.
                            This and the other findings corroborating selective publication practices of the antidepressant pharmaceutical industry made headlines globally.
                            Using the Effect Size Illustrator we can bring some clarity to the inflated effect that was not apparent in the publication.
                        </p>

                        <div>
                            <table id='example1_table'>
                                <thead>
                                    <tr>
                                        <th>Effect Size (Hedges' g)</th>
                                        <th>The proportion of patients receiving no treatment (placebo) that did worse in terms of depressive symptom burden compared to the average person taking an antidepressant</th>
                                    </tr>
                                    <tr>
                                        <td>0.41</td>
                                        <td>66%</td>
                                    </tr>
                                    <tr>
                                        <td>0.31</td>
                                        <td>62%</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <br/>
                        <p>
                            The effect size is essentially an expression derived from comparing two Gaussian curves.
                            Looking closer at how these curves overlap provides better insight into how the groups compare.
                            For example, one can derive how the average person is doing in one group relative to the responses observed in the other group.
                            An effect size of 0.41 indicates that the average person (mean=median in this case) taking an antidepressant does better (in terms of depressive symptom score) than 66% of people taking placebo.
                            When the effect size is 0.31 this changes to 62%.
                            As such, the inflated effect can be calculated as 0.41/0.31 = 1.32, indicating a 32% magnification of apparent effect. Or, it can be calculated as 66%/62% = 1.065, indicating a 6.5% magnification.
                            The latter approach, which is more clinically meaningful, markedly diminishes the apparent effect of publication bias.
                            The small difference is further clarified by a comparison of the illustrations, using Gardner’s Effect Size Illustrator:
                        </p>
                        <p>
                            While it is true that the published data exaggerated the efficacy of antidepressants relative to the data submitted to the FDA, the difference was rather small.
                            The real issue was the limited effectiveness of antidepressants and not that of publication bias.
                        </p>

                        <br/>
                        <h4>Example 2</h4>
                        <p>
                            <strong>Reference article</strong>: Oral administration of prednisone to control refractory vertigo in Meniere’s disease: a pilot study. Otology & Neurotology. 2005; 26:1022-1026.
                        </p>

                        <div>
                            <table id='example2_table'>
                                <thead>
                                    <tr>
                                        <th>Week post treatment</th>
                                        <th>Control (n=8), min</th>
                                        <th>Prednisone (n=8), min</th>
                                        <th><em>p</em> value</th>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>69 (40-98)</td>
                                        <td>63 (42-84)</td>
                                        <td>NS</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>63 (48-78)</td>
                                        <td>33 (20-46)</td>
                                        <td>NS</td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>65 (50-80)</td>
                                        <td>28 (13-43)</td>
                                        <td>Lesser than 0.05</td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>54 (37-71)</td>
                                        <td>21 (11-31)</td>
                                        <td>Lesser than 0.05</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <br/>
                        <p>
                            <strong>Data entry into ESI using Option 1</strong>:

                            <br/><br/>
                            Results from the article’s table 4 measuring the duration of patient’s vertigo attacks at 18 weeks have been used for illustration & calculation purposes.

                            <br/><br/>
                            Here we have used Cohen’s d for our calculation.

                            <br/><br/>
                            In this example, the variance around the mean is given as a 95% confidence interval (CI).
                            To enter this into the ESI, subtract the upper limit of the CI from the lower limit giving the difference between the two limits as the number to enter in the variance field.
                            For example, in the prednisone group, the 95% CI at 18 weeks is 31 – 11, giving a difference of 20, which is the value to be entered into the variance field. Remember to select the 95% CI option.

                            <br/><br/>
                            What is entered in the group name text field will appear as the labels in the illustration (see below).
                        </p>
                        <br/><br/>
                        <p>
                            <strong>Illustration Options</strong>:

                            <br/><br/>
                            <strong>Note: </strong>
                            In this example, higher values reflect worse health (longer duration of vertigo).

                            Here we have gone with the default Gardner’s Ornament style of illustration, side by side, and vertical layout.

                            The image girth has been decreased from 100% to 80% for esthetic purposes.
                        </p>
                        <br/><br/>
                        <p>
                            <strong>Data entry into Study Details using relevant information from the article</strong>:

                            <br/><br/>
                            Patient description: “Patients with Meniere’s disease with limited vertigo control (Class C) and severe disability (Scale 3).” (American Academy of Otolaryngology—Head and Neck Surgery criteria)

                            <br/><br/>
                            Study Groups/Intervention description: “Two groups (n = 8 per group) were treated orally with either diphenidol (25 mg/d) plus acetazolamide (250 mg/48 h) (control group), or the same treatment plus prednisone (0.35 mg/kg) daily for 18 weeks (prednisone group).”
                        </p>
                        <p>
                            <strong>Analysis & Interpretation output</strong>:
                        </p>
                        <p>
                            <strong>Illustration Output reflecting the calculated effect size (Cohen’s d) of 1.75</strong>:
                        </p>
                        <p>
                            In this example the standard deviations differ between the two groups. As such, the interpretation varies depending on which group you choose as the reference group.
                            With prednisone as the reference group it can be seen that 91% of people taking placebo are doing less well than the average person taking prednisone.
                            With placebo as the reference group it can be stated that 99% of people taking prednisone are doing better than the average person taking placebo.
                            These accuracy of these interpretations need to be qualified considering that this study only compared 8 people per group were studied.
                        </p>

                        <br/><br/>
                        <h4>Example 3(a)</h4>
                        <p>
                            <strong>Reference articles</strong>: <br/><br/>
                            Chang JS, et al. Aripiprazole augmentation in clozapine-treated patients with refractory schizophrenia: An 8-week, randomized, double-blind, placebo-controlled trial. J Clin Psychiatry; 2008 May;69(5):720-31.
                            <br/><br/>
                            Remington G. Refractory schizophrenia: adding aripiprazole to clozapine reduces negative but not overall symptoms*. Evid Based Ment Health. 2009 May;12(2):51.
                            <br/><br/>
                            * Kane et al (J Clin Psychiatry 2009), in a larger, longer RCT found no benefit of aripiprazole on negative symptoms when added to risperidone or quetiapine.
                        </p>
                        <br/><br/>
                        <p>
                            <strong>Data entry into ESI using Option 1</strong>:

                            <br/><br/>
                            In this example we used the following data (derived from reference 2) to illustrate the effect aripiprazole augmentation of clozapine on negative symptoms of schizophrenia
                            (flat affect, poverty of speech, inability to experience pleasure, lack of desire to form relationships, lack of motivation), as measured by the Schedule for the Assessment of Negative Symptoms
                            (SANS) at 8 weeks:
                        </p>

                        <div>
                            <table id='example3a_table'>
                                <thead>
                                    <tr>
                                        <th>Effect Size (Hedges' g)</th>
                                        <th>
                                            The proportion of patients receiving no treatment (placebo) that did worse in terms of depressive symptom burden compared to the
                                            <strong>average</strong> person taking an antidepressant
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>0.41</td>
                                        <td>66%</td>
                                    </tr>
                                    <tr>
                                        <td>0.31</td>
                                        <td>62%</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <br/>
                        <p>
                            <strong>Illustration Options</strong>:
                            <br/><br/>
                            <strong>Note: </strong> In this example, higher values reflect worse health, as a higher value indicates less reduction in negative symptoms (SANS).
                            <br/><br/>
                            Here, we have decided to use horizontal, Gaussian curves to illustrate the effect size.
                        </p>

                        <br/>
                        <p>
                            <strong>Analysis & Interpretation output</strong>:
                        </p>

                        <br/>
                        <p>
                            <strong>Illustration Output reflecting the calculated effect size (Cohen’s d) of 0.71</strong>:
                        </p>

                        <br/>
                        <p>
                            The average person taking aripiprazole in addition to clozapine has an improvement in negative symptoms greater than 77% of people only taking clozapine.
                            The question remains, is the difference clinically significant? See example 3b.
                        </p>

                        <br/><br/>
                        <h4>Example 3(b)</h4>
                        <p>
                            <strong>Reference articles</strong>: See example 3(a)<br/><br/>
                            <strong>Data entry into ESI using Option 1</strong>:<br/><br/>

                            In this example using the same reference article as the previous example, we will create an illustration comparing the final SANS scores between the
                            aripiprazole augmented group and the placebo augmented group, as opposed to the changes in SANS scores.
                        </p>
                        <br/>
                        <p>
                            <strong>Analysis, Interpretation and Illustration Output</strong>:
                            <br/><br/>
                            <strong>Note: </strong> In this example, higher values reflect worse health (higher SANS scores reflect more negative symptoms).
                        </p>

                        <div>
                            <table id='example3b_table'>
                                <thead>
                                    <tr>
                                        <th rowSpan="2">Measure</th>
                                        <th colSpan="2">Adjunctive aripiprazole (n=29)</th>
                                        <th colSpan="2">Adjunctive placebo (n=32)</th>
                                    </tr>
                                    <tr>
                                        <th>Baseline Mean (SD)</th>
                                        <th>8 Weeks Mean (SD)</th>
                                        <th>Baseline Mean (SD)</th>
                                        <th>8 Weeks Mean (SD)</th>
                                    </tr>
                                    <tr>
                                        <td>BPRS positive</td>
                                        <td>11.2 (5.3)</td>
                                        <td>10.8 (5.4)</td>
                                        <td>11.4 (5.3)</td>
                                        <td>10.8 (5.0)</td>
                                    </tr>
                                    <tr>
                                        <td>BPRS negative</td>
                                        <td>9.9 (2.2)</td>
                                        <td>8.3 (2.8)</td>
                                        <td>9.9 (2.6)</td>
                                        <td>9.3 (2.5)</td>
                                    </tr>
                                    <tr>
                                        <td>CGI-S</td>
                                        <td>4.2 (0.7)</td>
                                        <td>3.5 (0.9)</td>
                                        <td>4.0 (0.6)</td>
                                        <td>3.7 (0.7)</td>
                                    </tr>
                                    <tr>
                                        <td>SANS</td>
                                        <td>50.7 (15.9)</td>
                                        <td>43.8 (18.0)</td>
                                        <td>51.3 (13.9)</td>
                                        <td>48.1 (13.0)</td>
                                    </tr>
                                    <tr>
                                        <td>Y-BOCS</td>
                                        <td>14.5 (10.0)</td>
                                        <td>12.0 (9.8)</td>
                                        <td>9.6 (11.0)</td>
                                        <td>8.9 (10.5)</td>
                                    </tr>
                                    <tr>
                                        <td>MADRS</td>
                                        <td>14.0 (6.6)</td>
                                        <td>11.8 (7.1)</td>
                                        <td>14.6 (6.7)</td>
                                        <td>13.4 (6.3)</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <br/>
                        <p>
                            The final illustration shows the differences between groups.
                            It also indicates that both groups continue to experience a significant burden of negative symptoms.
                            The illustration also hints that there may be a small group of patients that respond well to aripiprazole but that most will not.
                        </p>

                        <br/><br/>
                        <h4>Example 4</h4>
                        <p>
                            <strong>Reference article</strong>: Sconce E et al. Vitamin K supplementation can improve stability of anticoagulation for patients with unexplained variability in response to warfarin. Blood. 2007; 109: 2419-2423.
                            <br/><br/>
                            <strong>Data entry into ESI using Option 1</strong>:<br/><br/>

                            This article used a randomized controlled trial to test the hypothesis that daily oral vitamin K supplementation would
                            improve INR stability in patients with previously unstable control when taking oral anticoagulation.


                            <br/><br/>
                            For this example, the comparison of % time in INR range (2-3) during the intervention period (6 months) between the Vitamin K treated group and the placebo group (data from Sconce et al. Table 2)
                            has been used for calculation and illustration purposes.
                        </p>

                        <div>
                            <table id='example4_table'>
                                <thead>
                                    <tr>
                                        <th rowSpan="2">Fields</th>
                                        <th colSpan="3">Vitamin K group</th>
                                        <th colSpan="3">Placebo group</th>
                                    </tr>
                                    <tr>
                                        <th>Before Study</th>
                                        <th>Intervention Period</th>
                                        <th>Difference</th>
                                        <th>Before Study</th>
                                        <th>Intervention Period</th>
                                        <th>Difference</th>
                                    </tr>
                                    <tr>
                                        <td>SD of INR</td>
                                        <td>0.72a ± 0.11</td>
                                        <td>0.47 ± 0.17</td>
                                        <td>-0.24 ± 0.14</td>
                                        <td>0.7 ± 0.11</td>
                                        <td>0.59 ± 0.15</td>
                                        <td>-0.11 ± 0.18</td>
                                    </tr>
                                    <tr>
                                        <td>Time in range, %</td>
                                        <td>59 ± 20</td>
                                        <td>87 ± 14</td>
                                        <td>28 ± 20</td>
                                        <td>63 ± 18</td>
                                        <td>78± 17</td>
                                        <td>15 ± 20</td>
                                    </tr>
                                    <tr>
                                        <td>No. of dose changes, median (range)</td>
                                        <td>5 (3-7)</td>
                                        <td>2 (0-5)</td>
                                        <td>-2 (-5-0)</td>
                                        <td>5 (3-8)</td>
                                        <td>3 (1-8)</td>
                                        <td>3 (1-8)</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <br/>
                        <p>
                            <strong>Illustration Options</strong>:<br/><br/>

                            <strong>Note:</strong> In this example, higher values reflect better health.
                            Here, we have used the default Gardner Ornament style of illustration with the overlapping option.
                            Also, we have specified the range of values as 0% to 100%. This has resulted in a truncated illustration indicating that the data were not normally distributed.
                        </p>
                        <br/><br/>

                        <p><strong>Analysis, Interpretation and Illustration Output:</strong></p>

                        <br/><br/>
                        <p>
                            This illustration shows a common limitation of the assumption implicit in all effect size calculations, which is the assumption of normal distribution.
                            Clearly, the upper limit in this example is 100%. It is not possible, as the illustration implies, to achieve a target INR more than 100% of the time.
                            The cause of this is skewed or otherwise non-normal distribution of data. This limitation should be kept in mind whenever examining effect size illustrations.
                            That is, the range of scores presented in the illustration should not be interpreted literally in many cases.
                        </p>

                        <br/><br/>
                        <h4>Example 5</h4>
                        <p>
                            <strong>Reference article</strong>: Caso G et al. Effect of Coenzyme Q10 on Myopathic Symptoms in Patients Treated With Statins. Am J Cardiol. 2007;99:1409 –1412.
                            <br/><br/>
                            <strong>Data entry into ESI using Option 1:</strong>

                            <br/><br/>
                            In this article, coenzyme Q10 supplementation was compared with Vitamin E supplementation (control) for the treatment of statin-induced myopathic pain.

                            <br/><br/>
                            One of the outcome measures reported was the mean change in Pain Severity Score (PSS).
                            After 30 days, the coenzyme Q10-treated group (n=19) had a 40±11% decrease in pain intensity as measured by the PSS.
                            Pain in the Vitamin E-treated group (n=14) intensified by 9±14%.
                            <br/><br/>
                            * These findings were not replicated in another RCT of Coenzyme Q10 for statin-related myalgia (see Young JM, et al.
                            Effect of coenzyme Q(10) supplementation on simvastatin-induced myalgia. Am J Cardiol. 2007 Nov 1;100(9):1400-3.)
                        </p>
                        <br/><br/>
                        <p>
                            <strong>Illustration output reflecting the calculated effect size (Cohen’s d) of 4.08:</strong>
                        </p>
                        <br/><br/>
                        <p>
                            The above illustration represents the unusual finding of an almost complete separation of treatment outcomes. As stated above, this result was not replicated in another trial.
                        </p>

                        <br/><br/>
                        <h4>Example 6</h4>
                        <p>
                            <strong>Reference article:</strong> Davidson J, et al. Venlafaxine extended release in posttraumatic stress disorder: a sertraline- and placebo-controlled study. J Clin Psychopharmacol. 2006 Jun;26(3):259-67.

                            <br/><br/>
                            <strong>Data entry into ESI using Option 1</strong>:
                            <br/><br/>
                            The objectives of this study were to determine the efficacy and tolerability of sertraline and venlafaxine for the
                            treatment of PTSD and to compare the efficacy and tolerability of sertraline and venlafaxine with placebo.
                            <br/><br/>
                            <strong>The following table reports the main outcome measure:</strong>
                        </p>

                        <div>
                            <table id='example4_table'>
                                <thead>
                                <tr>
                                    <th>Fields</th>
                                    <th>Venlafaxine ER (n=179)</th>
                                    <th>Sertraline (n=173)</th>
                                    <th>Placebo (n=179)</th>
                                </tr>
                                <tr>
                                    <td>CAPS-SX17</td>
                                    <td>-41.5 (-45.7 to -37.4)</td>
                                    <td>-39.4 (-43.7 to -35.2)</td>
                                    <td>-34.2 (-38.3 to -30.0)</td>
                                </tr>
                                </thead>
                            </table>
                        </div>

                        <br/>
                        <p>
                            For this example, we used the mean change score from the 17-item clinician-administered PTSD Scale (CAPS-SX17) for illustration purposes.
                            <br/><br/>
                            Three groups were compared. To add a group use the “+” button and to toggle between the groups use the arrow buttons on the Effect size calculation tab.
                        </p>

                        <br/>
                        <p>
                            <strong>After toggling</strong>:
                        </p>

                        <br/>
                        <p>
                            <strong>Analysis, Interpretation and Illustration Output</strong>:

                            <br/><br/>
                            Since we have three groups, the ESI will calculate and interpret an effect size comparing Group 1 to Group 2 and also comparing Group 1 to Group 3:
                        </p>

                        <br/>
                        <p>
                            <strong>Illustration output reflecting the calculated effect sizes (Cohen’s d) of 0.073 and 0.26</strong>:
                        </p>
                    </div>

                    <br/><br/>
                    <div id="linkd">
                        <h2>Links</h2>

                        <h4>Information about effect size (standardized mean difference):</h4>
                        <p>
                            <a href="http://en.wikipedia.org/wiki/Effect_size">Wikipedia’s overview of effect size</a>

                            <br/><br/>
                            <a href="http://www.uccs.edu/~faculty/lbecker/">Overview and calculator by Lee Becker of the University of Colorado at Colorado Springs (UCCS)</a>

                            <br/><br/>
                            <a href="http://www.work-learning.com/white_papers/effect_sizes/Effect_Sizes_pdf5.pdf">Thalheimer, W., & Cook, S. (2002, August). How to calculate effect sizes from published research articles: A simplified methodology.</a>
                        </p>

                        <br/>
                        <h4>Other effect size calculators and graphing software:</h4>
                        <p>
                            <a href="http://www.uccs.edu/~faculty/lbecker/">Effect Size Calculator</a>

                            <br/><br/>
                            <a href="http://www.pipsproject.org/renderpage.asp?linkID=30325017">Centre for Evaluation & Monitoring Effect Size Calculator and Graphing tool</a>

                            <br/><br/>
                            <a href="http://www.bolderstats.com/jmsl/doc/CohenD.html">Bolder Stats Cohen’s d and Distribution Overlap applet</a>

                            <br/><br/>
                            <a href="http://www.wise.cgu.edu/power/power_applet.asp">Claremount Graduate University Web Interface for Statistical Education Statistical Power Applet</a>
                        </p>

                        <br/>
                        <h4>Calculators and illustrators for dichotomous measures:</h4>
                        <p>
                            <a href="http://understandinguncertainty.org/node/233">Understanding Uncertainty: Spinning the Risk (University of Cambridge)</a>

                            <br/><br/>
                            <a href="http://www.nntonline.net/visualrx/">Visual Rx - Online NNT Calculator</a>

                            <br/><br/>
                            <a href="www.pedro.org.au/wp-content/uploads/CIcalculator.xls">Confidence interval calculator for NNTs and much more (by Robert Herbert, University of Sydney)</a>

                            <br/><br/>
                            <a href="http://www.cebm.utoronto.ca/practise/ca/statscal/">Centre for Evidence Based Medicine, University Health Network (Toronto)</a>
                        </p>
                    </div>

                </div>
                <div className="col-lg-4">

                    <div  className={styles.onpage}>
                        <h2>On This Page</h2>
                        <ul>
                            <li>
                                <a className={styles.navitem} href="#before_start">What you need before you start</a>
                            </li>
                            <li className="nav-itm">
                                <a className={styles.navitem} href="#es_calc_tab">Effect Size Calculation Tab</a>
                            </li>
                            <li className="nav-itm">
                                <a className={styles.navitem} href="#illustration_options">Illustration Options Tab</a>
                            </li>
                            <li className="nav-itm">
                                <a className={styles.navitem} href="#study_details">Study Details Tab</a>
                            </li>
                            <li className="nav-itm">
                                <a className={styles.navitem} href="#analysis">Analysis &amp; Interpretation Tab</a>
                            </li>
                            <li className="nav-itm">
                                <a className={styles.navitem} href="#illustration_tab">Illustration Tab</a>
                            </li>
                            <li className="nav-itm">
                                <a className={styles.navitem} href="#forthcoming_features">Forthcoming features</a>
                            </li>
                            <li className="nav-itm">
                                <a className={styles.navitem} href="#examples">Examples</a>
                            </li>
                            <li className="nav-itm">
                                <a className={styles.navitem} href="#linkd">Links</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}