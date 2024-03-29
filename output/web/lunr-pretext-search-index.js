var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front",
  "level": "1",
  "url": "front.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   This material is from the Math and Stat Reviews at Penn State University , remixed here under the CC BY-NC 4.0 license .  "
},
{
  "id": "sec_basicterms",
  "level": "1",
  "url": "sec_basicterms.html",
  "type": "Section",
  "number": "1",
  "title": "Basic Terminology",
  "body": " Basic Terminology   Population and Parameters    Population A population is any large collection of objects or individuals, such as Americans, students, or trees about which information is desired.    Parameter A parameter is any summary number, like an average or percentage, that describes the entire population.    The population mean (the greek letter \"mu\") and the population proportion are two different population parameters. For example:  We might be interested in learning about , the average weight of all middle-aged female Americans. The population consists of all middle-aged female Americans, and the parameter is .  Or, we might be interested in learning about , the proportion of likely American voters approving of the president's job performance. The population comprises all likely American voters, and the parameter is .  The problem is that 99.999999999999... % of the time, we don't or can't know the real value of a population parameter. The best we can do is estimate the parameter! This is where samples and statistics come in to play.    Samples and statistics   Sample  A sample is a representative group drawn from the population.    Statistic  A statistic is any summary number, like an average or percentage, that describes the sample.   The sample mean, , and the sample proportion are two different sample statistics. For example:   We might use , the average weight of a random sample of 100 middle-aged female Americans, to estimate , the average weight of all middle-aged female Americans.  Or, we might use , the proportion in a random sample of 1000 likely American voters who approve of the president's job performance, to estimate , the proportion of all likely American voters who approve of the president's job performance.   Because samples are manageable in size, we can determine the actual value of any statistic. We use the known value of the sample statistic to learn about the unknown value of the population parameter.    What was the prevalence of smoking at Penn State University before the 'no smoking' policy?   The main campus at Penn State University has a population of approximately 42,000 students. A research question is \"what proportion of these students smoke regularly?\" A survey was administered to a sample of 987 Penn State students. Forty-three percent (43%) of the sampled students reported that they smoked regularly. How confident can we be that 43% is close to the actual proportion of all Penn State students who smoke?  What is the population of interest? What is the parameter of interest? What is the sample? What statistic will be computed?     The population is all 42,000 students at Penn State University.  The parameter of interest is p , the proportion of students at Penn State University who smoke regularly.  The sample is a random selection of 987 students at Penn State University.  The statistic is the proportion, , of the sample of 987 students who smoke regularly. The value of the sample proportion is 0.43.      Are the grades of college students inflated?   Let's suppose that there exists a population of 7 million college students in the United States today. (The actual number depends on how you define \"college student.\") And, let's assume that the average GPA of all of these college students is 2.7 (on a 4-point scale). If we take a random sample of 100 college students, how likely is it that the sampled 100 students would have an average GPA as large as 2.9 if the population average was 2.7?  What is the population of interest? What is the parameter of interest? What is the sample? What statistic will be computed?     The population is all 7 million college students in the United States today.  The parameter of interest is , the average GPA of all college students in the United States today.  The sample is a random selection of 100 college students in the United States.  The statistic is the mean grade point average, , of the sample of 100 college students. The value of the sample mean is 2.9.      Next... Confidence intervals and hypothesis tests  There are two ways to learn about a population parameter.  1) We can use confidence intervals to estimate parameters.   \"We can be 95% confident that the proportion of Penn State students who have a tattoo is between 5.1% and 15.3%.\"   2) We can use hypothesis tests to test and ultimately draw conclusions about the value of a parameter.   \"There is enough statistical evidence to conclude that the mean normal body temperature of adults is lower than 98.6 degrees F.\"   We review these two methods in the next two sections.   "
},
{
  "id": "p-2",
  "level": "2",
  "url": "sec_basicterms.html#p-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "population parameter "
},
{
  "id": "example-1",
  "level": "2",
  "url": "sec_basicterms.html#example-1",
  "type": "Example",
  "number": "1.0.1",
  "title": "What was the prevalence of smoking at Penn State University before the 'no smoking' policy?",
  "body": " What was the prevalence of smoking at Penn State University before the 'no smoking' policy?   The main campus at Penn State University has a population of approximately 42,000 students. A research question is \"what proportion of these students smoke regularly?\" A survey was administered to a sample of 987 Penn State students. Forty-three percent (43%) of the sampled students reported that they smoked regularly. How confident can we be that 43% is close to the actual proportion of all Penn State students who smoke?  What is the population of interest? What is the parameter of interest? What is the sample? What statistic will be computed?     The population is all 42,000 students at Penn State University.  The parameter of interest is p , the proportion of students at Penn State University who smoke regularly.  The sample is a random selection of 987 students at Penn State University.  The statistic is the proportion, , of the sample of 987 students who smoke regularly. The value of the sample proportion is 0.43.    "
},
{
  "id": "example-2",
  "level": "2",
  "url": "sec_basicterms.html#example-2",
  "type": "Example",
  "number": "1.0.2",
  "title": "Are the grades of college students inflated?",
  "body": " Are the grades of college students inflated?   Let's suppose that there exists a population of 7 million college students in the United States today. (The actual number depends on how you define \"college student.\") And, let's assume that the average GPA of all of these college students is 2.7 (on a 4-point scale). If we take a random sample of 100 college students, how likely is it that the sampled 100 students would have an average GPA as large as 2.9 if the population average was 2.7?  What is the population of interest? What is the parameter of interest? What is the sample? What statistic will be computed?     The population is all 7 million college students in the United States today.  The parameter of interest is , the average GPA of all college students in the United States today.  The sample is a random selection of 100 college students in the United States.  The statistic is the mean grade point average, , of the sample of 100 college students. The value of the sample mean is 2.9.    "
},
{
  "id": "p-11",
  "level": "2",
  "url": "sec_basicterms.html#p-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "confidence intervals "
},
{
  "id": "p-13",
  "level": "2",
  "url": "sec_basicterms.html#p-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hypothesis tests "
},
{
  "id": "sec_confints",
  "level": "1",
  "url": "sec_confints.html",
  "type": "Section",
  "number": "2",
  "title": "Confidence Intervals",
  "body": " Confidence Intervals   Let's review the basic concept of a confidence interval.  Suppose we want to estimate an actual population mean . As you know, we can only obtain , the mean of a sample randomly selected from the population of interest. We can use our sample to find a range of values: that we can be really confident contains the population mean . The range of values is called a confidence interval .    Should using a hand-held cell phone while driving be illegal?  There is little doubt that over the years you have seen numerous confidence intervals for population proportions reported in newspapers.  For example, a newspaper report (ABC News poll, May 16-20, 2001) was concerned whether or not U.S. adults thought using a hand-held cell phone while driving should be illegal. Of the 1,027 U.S. adults randomly selected for participation in the poll, 69% thought that it should be illegal. The reporter claimed that the poll's margin of error was 3%. Therefore, the confidence interval for the (unknown) population proportion is 69% ± 3%. That is, we can be really confident that between 66% and 72% of all U.S. adults think using a hand-held cell phone while driving a car should be illegal.      General Form of (Most) Confidence Intervals  The previous example illustrates the general form of most confidence intervals, namely:   The lower limit is obtained by: The upper limit is obtained by:   Once we've obtained the interval, we can claim that we are really confident that the value of the population parameter is somewhere between the value of and the value of .  So far, we've been very general in our discussion of the calculation and interpretation of confidence intervals. To be more specific about their use, let's consider a specific interval, namely the -interval for a population mean .      -interval for the population mean  If we are interested in estimating a population mean , it is very likely that we would use the -interval for a population mean .   -Interval for a Population Mean  The formula for the confidence interval in words is: and you might recall that the formula for the confidence interval more precisely is:    Note that:  the -multiplier , which we denote as , depends on the sample size through - 1 (called the degrees of freedom ) and the confidence level through .  the standard error , which is , quantifies how much the sample means vary from sample to sample. That is, the standard error is just another name for the estimated standard deviation of all the possible sample means.  the quantity to the right of the sign, the -multiplier standard error , is just a more specific form of the margin of error. That is, the margin of error in estimating a population mean µ is calculated by multiplying the t -multiplier by the standard error of the sample mean.  the formula is only appropriate if a certain assumption is met, namely that the data are normally distributed.    Clearly, the sample mean , the sample standard deviation , and the sample size are all readily obtained from the sample data. Now, we just need to review how to obtain the value of the -multiplier, and we'll be all set.    How is the t-multiplier determined?  As the following graph illustrates, we put the confidence level in the center of the t -distribution. Then, since the entire probability represented by the curve must equal 1, a probability of must be shared equally among the two \"tails\" of the distribution. That is, the probability of the left tail is and the probability of the right tail is . If we add up the probabilities of the various parts , we get 1. The -multiplier, denoted , is the -value such that the probability \"to the right of it\" is :   The -distribution   Graph of the t-distribution with left and right tails shaded.     It should be no surprise that we want to be as confident as possible when we estimate a population parameter. This is why confidence levels are typically very high. The most common confidence levels are 90%, 95% and 99%. The following table contains a summary of the values of corresponding to these common confidence levels. (Note that the confidence coefficient is merely the confidence level reported as a proportion rather than as a percentage.)     Confidence  Confidence      Coefficient  Level      0.90  90%  0.95  0.05    0.95  95%  0.975  0.025    0.99  99%  0.995  0.005       Using Software  The good news is that statistical software, such as R , will calculate most confidence intervals for us.  Let's take an example of researchers who are interested in the average heart rate of male college students. Assume a random sample of 130 male college students were taken for the study.  The following is the R output of a one-sample t -test for the population mean. Note this output includes a 95% confidence interval.   One Sample t-test data: Heartrates t = 18.857, df = 129, p-value < 2.2e-16 alternative hypothesis: true mean is not equal to 0 95 percent confidence interval: 72.536 74.987 sample estimates: mean of x 73.762   In this example, the researchers were interested in estimating , the heart rate. The output indicates that the mean for the sample of = 130 male students equals 73.762. The 95% confidence interval for the population mean is (72.536, 74.987). We can be 95% confident that the mean heart rate of all male college students is between 72.536 and 74.987 beats per minute.    Factors Affecting the Width of the t-interval for the Mean  Think about the width of the interval in the previous example. In general, do you think we desire narrow confidence intervals or wide confidence intervals? If you are not sure, consider the following two intervals:  We are 95% confident that the average GPA of all college students is between 1.0 and 4.0.  We are 95% confident that the average GPA of all college students is between 2.7 and 2.9.    Which of these two intervals is more informative? Of course, the narrower one gives us a better idea of the magnitude of the true unknown average GPA. In general, the narrower the confidence interval, the more information we have about the value of the population parameter. Therefore, we want all of our confidence intervals to be as narrow as possible. So, let's investigate what factors affect the width of the t -interval for the mean .  Of course, to find the width of the confidence interval, we just take the difference in the two limits: What factors affect the width of the confidence interval? We can examine this question by using the formula for the confidence interval and seeing what would happen should one of the elements of the formula be allowed to vary. What is the width of the -interval for the mean? If you subtract the lower limit from the upper limit, you get: Now, let's investigate the factors that affect the length of this interval. Convince yourself that each of the following statements is accurate:  As the sample mean increases, the length stays the same. That is, the sample mean plays no role in the width of the interval.  As the sample standard deviation s decreases, the width of the interval decreases. Since s is an estimate of how much the data vary naturally, we have little control over s other than making sure that we make our measurements as carefully as possible.  As we decrease the confidence level, the t -multiplier decreases, and hence the width of the interval decreases. In practice, we wouldn't want to set the confidence level below 90%.  As we increase the sample size, the width of the interval decreases. This is the factor that we have the most flexibility in changing, the only limitation being our time and financial constraints.      Supplemental Materials  For more practice thinking about confidence intervals watch the following video:   Confidence Intervals , part of `against all odds' at Annenberg Learner.      In Closing  In our review of confidence intervals, we have focused on just one type of confidence interval. The important thing to recognize is that the topics discussed here the general form of intervals, determination of -multipliers, and factors affecting the width of an interval generally extend to all of the confidence intervals we will encounter in this course.   "
},
{
  "id": "p-17",
  "level": "2",
  "url": "sec_confints.html#p-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "confidence interval "
},
{
  "id": "example-3",
  "level": "2",
  "url": "sec_confints.html#example-3",
  "type": "Example",
  "number": "2.0.1",
  "title": "",
  "body": "  Should using a hand-held cell phone while driving be illegal?  There is little doubt that over the years you have seen numerous confidence intervals for population proportions reported in newspapers.  For example, a newspaper report (ABC News poll, May 16-20, 2001) was concerned whether or not U.S. adults thought using a hand-held cell phone while driving should be illegal. Of the 1,027 U.S. adults randomly selected for participation in the poll, 69% thought that it should be illegal. The reporter claimed that the poll's margin of error was 3%. Therefore, the confidence interval for the (unknown) population proportion is 69% ± 3%. That is, we can be really confident that between 66% and 72% of all U.S. adults think using a hand-held cell phone while driving a car should be illegal.   "
},
{
  "id": "p-24",
  "level": "2",
  "url": "sec_confints.html#p-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-interval for a population mean "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "sec_confints.html#definition-1",
  "type": "Definition",
  "number": "2.2.1",
  "title": "<span class=\"process-math\">\\(t\\)<\/span>-Interval for a Population Mean.",
  "body": " -Interval for a Population Mean  The formula for the confidence interval in words is: and you might recall that the formula for the confidence interval more precisely is:   "
},
{
  "id": "p-27",
  "level": "2",
  "url": "sec_confints.html#p-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-multiplier degrees of freedom standard error -multiplier standard error "
},
{
  "id": "figure-1",
  "level": "2",
  "url": "sec_confints.html#figure-1",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": "The -distribution   Graph of the t-distribution with left and right tails shaded.   "
},
{
  "id": "p-30",
  "level": "2",
  "url": "sec_confints.html#p-30",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "confidence coefficient "
},
{
  "id": "sec_hyptest",
  "level": "1",
  "url": "sec_hyptest.html",
  "type": "Section",
  "number": "3",
  "title": "Hypothesis Testing",
  "body": " Hypothesis Testing   In reviewing hypothesis tests, we start first with the general idea. Then, we keep returning to the basic procedures of hypothesis testing, each time adding a little more detail.  The general idea of hypothesis testing involves:  Making an initial assumption.  Collecting evidence (data).  Based on the available evidence (data), deciding whether to reject or not reject the initial assumption.  Every hypothesis test regardless of the population parameter involved requires the above three steps.   Is Normal Body Temperature Really 98.6 Degrees F?   Consider the population of many, many adults. A researcher hypothesized that the average adult body temperature is lower than the often-advertised 98.6 degrees F. That is, the researcher wants an answer to the question: \"Is the average adult body temperature 98.6 degrees? Or is it lower?\" To answer his research question, the researcher starts by assuming that the average adult body temperature was 98.6 degrees F.  Then, the researcher went out and tried to find evidence that refutes his initial assumption. In doing so, he selects a random sample of 130 adults. The average body temperature of the 130 sampled adults is 98.25 degrees.  Then, the researcher uses the data he collected to make a decision about his initial assumption. It is either likely or unlikely that the researcher would collect the evidence he did given his initial assumption that the average adult body temperature is 98.6 degrees:  If it is likely , then the researcher does not reject his initial assumption that the average adult body temperature is 98.6 degrees. There is not enough evidence to do otherwise.   If it is unlikely , then:   either the researcher's initial assumption is correct and he experienced a very unusual event;  or the researcher's initial assumption is incorrect.      In statistics, we generally don't make claims that require us to believe that a very unusual event happened. That is, in the practice of statistics, if the evidence (data) we collected is unlikely in light of the initial assumption, then we reject our initial assumption.     Criminal Trial Analogy   One place where you can consistently see the general idea of hypothesis testing in action is in criminal trials held in the United States. Our criminal justice system assumes \"the defendant is innocent until proven guilty.\" That is, our initial assumption is that the defendant is innocent.  In the practice of statistics, we make our initial assumption when we state our two competing hypotheses -- the null hypothesis ( ) and the alternative hypothesis ( ). Here, our hypotheses are:  : Defendant is not guilty (innocent)  : Defendant is guilty    In statistics, we always assume the null hypothesis is true. That is, the null hypothesis is always our initial assumption.  The prosecution team then collects evidence such as finger prints, blood spots, hair samples, carpet fibers, shoe prints, ransom notes, and handwriting samples with the hopes of finding \"sufficient evidence\" to make the assumption of innocence refutable.  In statistics, the data are the evidence.  The jury then makes a decision based on the available evidence:  If the jury finds sufficient evidence beyond a reasonable doubt to make the assumption of innocence refutable, the jury rejects the null hypothesis and deems the defendant guilty. We behave as if the defendant is guilty.  If there is insufficient evidence, then the jury does not reject the null hypothesis . We behave as if the defendant is innocent.    In statistics, we always make one of two decisions. We either \"reject the null hypothesis\" or we \"fail to reject the null hypothesis.\"      Errors in Hypothesis Testing  Did you notice the use of the phrase \"behave as if\" in the previous discussion? We \"behave as if\" the defendant is guilty; we do not \"prove\" that the defendant is guilty. And, we \"behave as if\" the defendant is innocent; we do not \"prove\" that the defendant is innocent.  This is a very important distinction! We make our decision based on evidence not on 100% guaranteed proof. Again:  If we reject the null hypothesis, we do not prove that the alternative hypothesis is true.  If we do not reject the null hypothesis, we do not prove that the null hypothesis is true.  We merely state that there is enough evidence to behave one way or the other. This is always true in statistics! Because of this, whatever the decision, there is always a chance that we made an error.  Let's review the two types of errors that can be made in criminal trials:       Truth:      Not Guilty  Guilty    Jury Decision:  Not Guilty  OK  ERROR     Guilty  ERROR  OK     The next table shows how this corresponds to the two types of errors in hypothesis testing.       Truth:      Null Hypothesis  Alternate Hypothesis    Decision:  Fail to Reject Null  OK  Type II Error     Reject Null  Type I Error  OK     Note that, in statistics, we call the two types of errors by two different names -- one is called a Type I error , and the other is called a Type II error . Here are the formal definitions of the two types of errors:   Type I Error The null hypothesis is rejected when it is true.   Type II Error The null hypothesis is not rejected when it is false.  There is always a chance of making one of these errors. But, a good scientific study will minimize the chance of doing so!    Making the Decision  Recall that it is either likely or unlikely that we would observe the evidence we did given our initial assumption. If it is likely , we do not reject the null hypothesis. If it is unlikely , then we reject the null hypothesis in favor of the alternative hypothesis. Effectively, then, making the decision reduces to determining \"likely\" or \"unlikely.\"  In the next section, we review the p-value procedure for determining if a result is unlikely. To make our review concrete, let's imagine that is the average grade point average of all American students who major in mathematics. We first review the critical value approach for conducting each of the following three hypothesis tests about the population mean :   Type  Null  Alternative    Right-tailed          Left-tailed          Two-tailed             In Practice   We would want to conduct the first hypothesis test if we were interested in concluding that the average grade point average of the group is more than 3.  We would want to conduct the second hypothesis test if we were interested in concluding that the average grade point average of the group is less than 3.  And, we would want to conduct the third hypothesis test if we were only interested in concluding that the average grade point average of the group differs from 3 (without caring whether it is more or less than 3).   The procedures that we review here easily extend to hypothesis tests about any other population parameter.    Supplemental Materials  For another discussion of hypothesis testing, watch the following video:   Tests of Significance , part of `against all odds' at Annenberg Learner.     "
},
{
  "id": "example-4",
  "level": "2",
  "url": "sec_hyptest.html#example-4",
  "type": "Example",
  "number": "3.0.1",
  "title": "Is Normal Body Temperature Really 98.6 Degrees F?",
  "body": " Is Normal Body Temperature Really 98.6 Degrees F?   Consider the population of many, many adults. A researcher hypothesized that the average adult body temperature is lower than the often-advertised 98.6 degrees F. That is, the researcher wants an answer to the question: \"Is the average adult body temperature 98.6 degrees? Or is it lower?\" To answer his research question, the researcher starts by assuming that the average adult body temperature was 98.6 degrees F.  Then, the researcher went out and tried to find evidence that refutes his initial assumption. In doing so, he selects a random sample of 130 adults. The average body temperature of the 130 sampled adults is 98.25 degrees.  Then, the researcher uses the data he collected to make a decision about his initial assumption. It is either likely or unlikely that the researcher would collect the evidence he did given his initial assumption that the average adult body temperature is 98.6 degrees:  If it is likely , then the researcher does not reject his initial assumption that the average adult body temperature is 98.6 degrees. There is not enough evidence to do otherwise.   If it is unlikely , then:   either the researcher's initial assumption is correct and he experienced a very unusual event;  or the researcher's initial assumption is incorrect.      In statistics, we generally don't make claims that require us to believe that a very unusual event happened. That is, in the practice of statistics, if the evidence (data) we collected is unlikely in light of the initial assumption, then we reject our initial assumption.   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "sec_hyptest.html#example-5",
  "type": "Example",
  "number": "3.0.2",
  "title": "Criminal Trial Analogy.",
  "body": " Criminal Trial Analogy   One place where you can consistently see the general idea of hypothesis testing in action is in criminal trials held in the United States. Our criminal justice system assumes \"the defendant is innocent until proven guilty.\" That is, our initial assumption is that the defendant is innocent.  In the practice of statistics, we make our initial assumption when we state our two competing hypotheses -- the null hypothesis ( ) and the alternative hypothesis ( ). Here, our hypotheses are:  : Defendant is not guilty (innocent)  : Defendant is guilty    In statistics, we always assume the null hypothesis is true. That is, the null hypothesis is always our initial assumption.  The prosecution team then collects evidence such as finger prints, blood spots, hair samples, carpet fibers, shoe prints, ransom notes, and handwriting samples with the hopes of finding \"sufficient evidence\" to make the assumption of innocence refutable.  In statistics, the data are the evidence.  The jury then makes a decision based on the available evidence:  If the jury finds sufficient evidence beyond a reasonable doubt to make the assumption of innocence refutable, the jury rejects the null hypothesis and deems the defendant guilty. We behave as if the defendant is guilty.  If there is insufficient evidence, then the jury does not reject the null hypothesis . We behave as if the defendant is innocent.    In statistics, we always make one of two decisions. We either \"reject the null hypothesis\" or we \"fail to reject the null hypothesis.\"   "
},
{
  "id": "p-58",
  "level": "2",
  "url": "sec_hyptest.html#p-58",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Type I error Type II error "
},
{
  "id": "sec_hyptestprocedure",
  "level": "1",
  "url": "sec_hyptestprocedure.html",
  "type": "Section",
  "number": "4",
  "title": "Hypothesis Testing Procedure",
  "body": " Hypothesis Testing Procedure   The -value approach involves determining \"likely\" or \"unlikely\" by determining the probability assuming the null hypothesis were true of observing a more extreme test statistic in the direction of the alternative hypothesis than the one observed. If the -value is small, say less than (or equal to) , then it is \"unlikely.\" And, if the -value is large, say more than , then it is \"likely.\"  If the -value is less than (or equal to) , then the null hypothesis is rejected in favor of the alternative hypothesis. And, if the -value is greater than , then the null hypothesis is not rejected.  Specifically, the four steps involved in using the -value approach to conducting any hypothesis test are:  Specify the null and alternative hypotheses.  Using the sample data and assuming the null hypothesis is true, calculate the value of the test statistic. Again, to conduct the hypothesis test for the population mean , we use the -statistic which follows a -distribution with degrees of freedom.  Using the known distribution of the test statistic, calculate the -value : \"If the null hypothesis is true, what is the probability that we'd observe a more extreme test statistic in the direction of the alternative hypothesis than we did?\" (Note how this question is equivalent to the question answered in criminal trials: \"If the defendant is innocent, what is the chance that we'd observe such extreme criminal evidence?\")  Set the significance level, , the probability of making a Type I error to be small -- 0.01, 0.05, or 0.10. Compare the -value to . If the -value is less than (or equal to) , reject the null hypothesis in favor of the alternative hypothesis. If the -value is greater than , do not reject the null hypothesis.      Mean GPA   In our example concerning the mean grade point average, suppose that our random sample of students majoring in mathematics yields a test statistic equaling 2.5. Since , our test statistic has degrees of freedom. Also, suppose we set our significance level at 0.05, so that we have only a 5% chance of making a Type I error.    Right Tailed  The -value for conducting the right-tailed test versus is the probability that we would observe a test statistic greater than if the population mean really were 3. Recall that probability equals the area under the probability curve. The -value is therefore the area under a curve and to the right of the test statistic . It can be shown using statistical software that the -value is 0.0127. The graph depicts this visually.    Area under a t distribution to the right of 2.5    The -value, 0.0127, tells us it is \"unlikely\" that we would observe such an extreme test statistic in the direction of if the null hypothesis were true. Therefore, our initial assumption that the null hypothesis is true must be incorrect. That is, since the -value, 0.0127, is less than , we reject the null hypothesis in favor of the alternative hypothesis .  Note that we would not reject in favor of if we lowered our willingness to make a Type I error to instead, as the -value, 0.0127, is then greater than .    Left Tailed  In our example concerning the mean grade point average, suppose that our random sample of students majoring in mathematics yields a test statistic instead equaling -2.5. The -value for conducting the left-tailed test versus is the probability that we would observe a test statistic less than if the population mean really were 3. The -value is therefore the area under a curve and to the left of the test statistic . It can be shown using statistical software that the -value is 0.0127. The graph depicts this visually.    Area under a distribution to the left of -2.5    The -value, 0.0127, tells us it is \"unlikely\" that we would observe such an extreme test statistic in the direction of if the null hypothesis were true. Therefore, our initial assumption that the null hypothesis is true must be incorrect. That is, since the -value, 0.0127, is less than , we reject the null hypothesis H_0 : \\mu = 3 in favor of the alternative hypothesis .  Note that we would not reject in favor of if we lowered our willingness to make a Type I error to instead, as the -value, 0.0127, is then greater than .    Two Tailed  In our example concerning the mean grade point average, suppose again that our random sample of students majoring in mathematics yields a test statistic instead equaling -2.5. The -value for conducting the two-tailed test versus is the probability that we would observe a test statistic less than -2.5 or greater than 2.5 if the population mean really were 3. That is, the two-tailed test requires taking into account the possibility that the test statistic could fall into either tail (and hence the name \"two-tailed\" test). The -value is therefore the area under a curve to the left of -2.5 and to the right of the 2.5. It can be shown using statistical software that the -value is 0.0127 + 0.0127, or 0.0254. The graph depicts this visually.    Area under a distribution to the right of 2.5 and to the left of -2.5    Note that the -value for a two-tailed test is always two times the -value for either of the one-tailed tests. The -value, 0.0254, tells us it is \"unlikely\" that we would observe such an extreme test statistic in the direction of if the null hypothesis were true. Therefore, our initial assumption that the null hypothesis is true must be incorrect. That is, since the -value, 0.0254, is less than , we reject the null hypothesis in favor of the alternative hypothesis .  Note that we would not reject in favor of if we lowered our willingness to make a Type I error to instead, as the -value, 0.0254, is then greater than .   Now that we have reviewed the -value procedures for each of three possible hypotheses, in the next section we look at three new examples one of a right-tailed test, one of a left-tailed test, and one of a two-tailed test.  The good news is that, whenever possible, we will take advantage of the test statistics and -values reported in statistical software, such as R, to conduct our hypothesis tests in this course.    Supplemental Materials  For another discussion of the -distribution, watch the following video:   Small Sample Inference for One Mean , part of `against all odds' at Annenberg Learner.     "
},
{
  "id": "p-67",
  "level": "2",
  "url": "sec_hyptestprocedure.html#p-67",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right-tailed "
},
{
  "id": "sec_hyptestexamples",
  "level": "1",
  "url": "sec_hyptestexamples.html",
  "type": "Section",
  "number": "5",
  "title": "Hypothesis Testing Examples",
  "body": " Hypothesis Testing Examples   In this section we share two more examples of hypothesis test procedures.    Right-Tailed Test  A biologist was interested in determining whether sunflower seedlings treated with an extract from Vinca minor roots resulted in a lower average height of sunflower seedlings than the standard height of 15.7 cm. The biologist treated a random sample of seedlings with the extract and subsequently obtained the following heights:   Sunflower height data    11.5  11.8  15.7  16.1  14.1  10.5  9.3  15.0  11.1    15.2  19.0  12.8  12.4  19.2  13.5  12.2  13.3      16.5  13.5  14.4  16.7  10.9  13.0  10.3  15.8      15.1  17.1  13.3  12.4  8.5  14.3  12.9  13.5       The biologist's hypotheses are: The biologist entered her data into R and ran the t.test function. She obtained the following output:   One Sample t-test data: Heartrates t = -4.60, df = 32, p-value < 2.2e-16 alternative hypothesis: true mean is less than 15.7 sample estimates: mean of x 13.664   The output tells us that the average height of the sunflower seedlings was 13.664. The test statistic is -4.60, and the -value is less than .  If the biologist set her significance level, at 0.05, then she would see that the -value is significantly less than and so she has strong evidence that the mean of all such sunflower seedlings is less than 15.7 cm.    Left-Tailed Test  An engineer measured the Brinell hardness of 25 pieces of ductile iron that were subcritically annealed. The resulting data were:   Brinell hardness data    170  167  174  179  179  187  179  183  179    156  163  156  187  156  167  156  174  170    183  179  174  179  170  159  187       The engineer hypothesized that the mean Brinell hardness of all such ductile iron pieces is greater than 170. Therefore, he was interested in testing the hypotheses: The engineer entered his data into R and ran the t.test function to obtain the following output:   One Sample t-test data: Heartrates t = 1.22, df = 24, p-value 0.177 alternative hypothesis: true mean is greater than 170 sample estimates: mean of x 172.52   The output tells us that the average Brinell hardness of the pieces of ductile iron was 172.52. The test statistic is 1.22, and the -value is 0.117.  If the engineer set his significance level, at 0.05, then he would see that the -value is greater than and so we do not have evidence that the mean Brinell hardness of all such ductile iron pieces is greater than 170.   "
},
{
  "id": "table-1",
  "level": "2",
  "url": "sec_hyptestexamples.html#table-1",
  "type": "Table",
  "number": "5.1.1",
  "title": "Sunflower height data",
  "body": " Sunflower height data    11.5  11.8  15.7  16.1  14.1  10.5  9.3  15.0  11.1    15.2  19.0  12.8  12.4  19.2  13.5  12.2  13.3      16.5  13.5  14.4  16.7  10.9  13.0  10.3  15.8      15.1  17.1  13.3  12.4  8.5  14.3  12.9  13.5      "
},
{
  "id": "table-2",
  "level": "2",
  "url": "sec_hyptestexamples.html#table-2",
  "type": "Table",
  "number": "5.2.1",
  "title": "Brinell hardness data",
  "body": " Brinell hardness data    170  167  174  179  179  187  179  183  179    156  163  156  187  156  167  156  174  170    183  179  174  179  170  159  187      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
