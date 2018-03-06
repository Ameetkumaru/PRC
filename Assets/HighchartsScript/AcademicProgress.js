var SchoolID = $("#hdnSession").data('value');


$(function () {
    'use strict';

    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    if (SchoolID == null) {
        SchoolID=147703
    }
    var url = '/api/academicProgress/data?unitId=' + SchoolID;
    var tab = getUrlVars()["tab"];

    $.getJSON(url, function (data) {
        //Index Page Illinois chart
        $('#IllinoisEnrollment').highcharts({
            chart: {
                type: 'column'
            },

            title: {
                text: 'Men and Women Enrollment'
            },
            xAxis: {
                type: 'category',
                lineColor: '#000000',
                lineWidth: 1,
                categories: [
                    '2011', '2012', '2013'
                ],
                labels: {
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif',
                        color: '#000000',
                    }
                }
            },
            yAxis: [{
                className: 'highcharts-color-0',
                title: {
                    text: 'Enrollment'
                }
            }, {
                className: 'highcharts-color-1',
                opposite: true,
                title: {
                    text: ''
                }
            }],

            plotOptions: {
                column: {
                    borderRadius: 5
                }
            },

            series: [{
                name: 'Men Enrollment',
                color: '#33AFFF',
                data: data.EnrollMenAndWomen.men

            },
            {
                name: 'Women Enrollment',
                color: '#FF7733',
                data: data.EnrollMenAndWomen.women
            }]
        });

        //Academic Progress Page-Enrollment Chart
        if (tab == "Enrollment") {
            $('#CollegeReadiness').hide();
            $('#DistrictFinance').hide();
            $('#AdminStudentRatio').hide();
            $('#HealthWellness').hide();
            $('#PrincipalTurnover').hide();
            $('#Enrollment').highcharts({
                chart: {
                    type: 'bar',
                    zoomType:'xy'
                },
                title: {
                    text: 'Enrollment for Men and Women',
                    style: { color: '#000000' }
                },
                subtitle: {
                    useHTML: true, text: 'Source: <a target="_blank" href="https://nces.ed.gov/ipeds/Home/UseTheData">The Integrated Postsecondary Education Data system</a>',
                    style: { color: '#000000' }
                },
                xAxis: {
                    type: 'category',
                    lineColor: '#000000',
                    lineWidth: 1,
                    categories: [
                        '2011', '2012', '2013'
                    ],
                    labels: {
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif',
                            color: '#000000',
                        }
                    }
                },
                yAxis: {
                    lineColor: '#000000',
                    lineWidth: 1,
                    title: {
                        text: null,
                    },
                    labels: {
                        enabled: false
                    }
                },
                tooltip: {
                    enabled: false
                },
                legend: {
                    enabled: true,
                    itemWidth: 500,
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        pointPadding: 0
                    },
                    bar: {
                        dataLabels: {
                            enabled: true,
                            allowOverlap: true
                        }
                    }
                },
                series: [{
                    name: 'Men Enrollment',
                    color: '#33AFFF',
                    data: data.EnrollMenAndWomen.men

                },
                {
                    name: 'Women Enrollment',
                    color: '#FF7733',
                    data: data.EnrollMenAndWomen.women
                }]
            });
        }

        if (tab == "CollegeReadiness") {
            $('#Enrollment').hide();
            $('#DistrictFinance').hide();
            $('#AdminStudentRatio').hide();
            $('#HealthWellness').hide();
            $('#PrincipalTurnover').hide();

            $('#CollegeReadiness').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'College Readiness'
                },
                xAxis: {
                    categories: ['2011','2012','2013']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Count'
                    }
                },
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                    shared: true
                },
                plotOptions: {
                    column: {
                        stacking: 'percent'
                    }
                },
                series: [{
                    name: 'School',
                    data: data.EnrollMenAndWomen.men
                }, {
                        name: 'District',
                        data: data.EnrollMenAndWomen.women
                }]
            });
        }

        if (tab == "DistrictFinance") {
            $('#Enrollment').hide();
            $('#CollegeReadiness').hide();
            $('#AdminStudentRatio').hide();
            $('#HealthWellness').hide();
            $('#PrincipalTurnover').hide();

            $('#DistrictFinance').highcharts({
                chart: {
                    type: 'bar',
                   
                },
                title: {
                    text: 'District Finance'
                },
                subtitle: {
                    useHTML: true, text: 'Source: <a target="_blank" href="https://nces.ed.gov/ipeds/Home/UseTheData">The Integrated Postsecondary Education Data system</a>',
                    style: { color: '#000000' }
                },
                xAxis: {
                    
                    categories: [
                        '2011', '2012', '2013'
                    ]                   
                },
                yAxis: {
                    min:0,
                    title: {
                        text: null,
                    }
                },
                tooltip: {
                    enabled: true
                },
                legend: {
                    reversed: true
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },
                series: [{
                    name: 'Men Enrollment',
                    color: '#33AFFF',
                    data: data.EnrollMenAndWomen.men

                },
                {
                    name: 'Women Enrollment',
                    color: '#FF7733',
                    data: data.EnrollMenAndWomen.women
                }]
            });
        }

       


        if (tab == "AdminStudentRatio") {
            $('#Enrollment').hide();
            $('#CollegeReadiness').hide();
            $('#DistrictFinance').hide();
            $('#HealthWellness').hide();
            $('#PrincipalTurnover').hide();

            $('#AdminStudentRatio').highcharts({
                chart: {
                    type: 'column'                   
                },
                title: {
                    text: 'Admin Student Ratio',
                    style: { color: '#000000' }
                },
                subtitle: {
                    useHTML: true, text: 'Source: <a target="_blank" href="https://nces.ed.gov/ipeds/Home/UseTheData">The Integrated Postsecondary Education Data system</a>',
                    style: { color: '#000000' }
                },
                xAxis: {                    
                    categories: [
                        '2011', '2012', '2013'
                    ]
                },
                yAxis: [{
                    min: 0,
                    title: {
                        text: null
                    }
                }, {
                    title: {
                        text: 'Count'
                    },
                    opposite: true
                }],
                tooltip: {
                    shared: false
                },
                legend: {
                    shadow: false
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    column: {
                        grouping: false,
                        shadow: false,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'District',
                    color: '#33AFFF',
                    data: data.EnrollMenAndWomen.men,
                    pointPadding: 0.3,
                    pointPlacement: -0.2

                },
                {
                    name: 'State',
                    color: '#FF7733',
                    data: data.EnrollMenAndWomen.women,
                    pointPadding: 0.4,
                    pointPlacement: -0.2
                }]
            });
        }

        if (tab == "HealthWellness") {
            $('#Enrollment').hide();
            $('#DistrictFinance').hide();
            $('#AdminStudentRatio').hide();
            $('#CollegeReadiness').hide();
            $('#PrincipalTurnover').hide();

            $('#HealthWellness').highcharts({
                chart: {
                    type: 'bar',
                    zoomType: 'xy'
                },
                title: {
                    text: 'Health and Wellness',
                    style: { color: '#000000' }
                },
                subtitle: {
                    useHTML: true, text: 'Source: <a target="_blank" href="https://nces.ed.gov/ipeds/Home/UseTheData">The Integrated Postsecondary Education Data system</a>',
                    style: { color: '#000000' }
                },
                xAxis: {
                    type: 'category',
                    lineColor: '#000000',
                    lineWidth: 1,
                    categories: [
                        '2011', '2012', '2013'
                    ],
                    labels: {
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif',
                            color: '#000000',
                        }
                    }
                },
                yAxis: {
                    lineColor: '#000000',
                    lineWidth: 1,
                    title: {
                        text: null,
                    },
                    labels: {
                        enabled: false
                    }
                },
                tooltip: {
                    enabled: false
                },
                legend: {
                    enabled: true,
                    itemWidth: 500,
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        pointPadding: 0
                    },
                    bar: {
                        dataLabels: {
                            enabled: true,
                            allowOverlap: true
                        }
                    }
                },
                series: [{
                    name: 'School',
                    color: 'rgba(248,161,63,1)',
                    data: data.EnrollMenAndWomen.men

                },
                {
                    name: 'District',
                    color: 'rgba(186,60,61,.9)',
                    data: data.EnrollMenAndWomen.women
                }]
            });
        }

        if (tab == "PrincipalTurnover") {

            $('#Enrollment').hide();
            $('#DistrictFinance').hide();
            $('#AdminStudentRatio').hide();
            $('#HealthWellness').hide();
            $('#CollegeReadiness').hide();

            $('#PrincipalTurnover').highcharts({
                chart: {
                    type: 'bar',
                    zoomType: 'xy'
                },
                title: {
                    text: 'Principal Turnover',
                    style: { color: '#000000' }
                },
                subtitle: {
                    useHTML: true, text: 'Source: <a target="_blank" href="https://nces.ed.gov/ipeds/Home/UseTheData">The Integrated Postsecondary Education Data system</a>',
                    style: { color: '#000000' }
                },
                xAxis: {
                    type: 'category',
                    lineColor: '#000000',
                    lineWidth: 1,
                    categories: [
                        '2011', '2012', '2013'
                    ],
                    labels: {
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif',
                            color: '#000000',
                        }
                    }
                },
                yAxis: {
                    lineColor: '#000000',
                    lineWidth: 1,
                    title: {
                        text: null,
                    },
                    labels: {
                        enabled: false
                    }
                },
                tooltip: {
                    enabled: false
                },
                legend: {
                    enabled: true,
                    itemWidth: 500,
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        pointPadding: 0
                    },
                    bar: {
                        dataLabels: {
                            enabled: true,
                            allowOverlap: true
                        }
                    }
                },
                series: [{
                    name: 'Men',
                    color: 'rgba(165,170,217,1)',
                    data: data.EnrollMenAndWomen.men

                },
                {
                    name: 'Women',
                    color: 'rgba(126,86,134,.9)',
                    data: data.EnrollMenAndWomen.women
                }]
            });
        }

    });
});