#scp -r output/html/* wwadmin@webwork.moravian.edu:/var/www/apexcalc/
tar czf - -C  output/web . | ssh wwadmin@webwork.moravian.edu "cd /var/www/html/statReview && tar xzf -"
