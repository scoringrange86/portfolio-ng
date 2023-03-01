var app = angular.module("portfolioApp", []);

app.controller("appController", ($scope) => {

    $scope.fullName = "Supreme Intelligence";

    $scope.aboutMe = [
        "Mobile Application and Web Developer",
        "BS Computer Science University of Kentucky",
        "CEO of Success Keeps Growing",
        "Master Herbalist",
        "Hip Hop Artist / MC"
    ];

    $scope.thumbnails = [
        "aurora.jpg", "milkyway.jpg", "startrail.jpg"
    ]

    $scope.email = "skgtechsvcs@gmail.com";
});






/* 
        ### Notes

        ng-app description in index.html file must match module naming
         definition to properly pass module        

        second argument is empty array to pass args (not need for this project)

        controller is written in the form of a callback function, whose arg is scope

        Needs to be same as that mention in body tag of index html

        included a data model called full name

        data binding is when the view auto changes to reflect the changes

        for whatever data model you want to use, you have to include it within the scope
*/