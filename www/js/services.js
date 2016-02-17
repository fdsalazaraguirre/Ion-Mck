angular.module('starter.services', [])

.factory('Courses', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var courses = [{
    id: 0,
    name: 'Landlord Tenand Act - Basics for All Licenses',
    description: 'This course identifies the unique attributes of apartment complexes and their associated three markets: apartment properties that are bought and sold, vacant sites and the associated rental market. While the skills learned in this course will be applicable to a variety of apartment properties, it is geared towards small apartment complexes, or those between 5 to 20 units. Course also contains contemporary statistical analysis techniques as well as traditional methods of valuation, in addition to a real world case study and several "Deeper Thinking" topics.',
    stars: 5,
    hours: 10,
    type:1,
    price:19.99
  }, {
    id: 1,
    name: 'Contracts & Real Estate License Law',
    description: 'How well do you know the appraisal regulations for California? At both state and federal levels, there are a number of laws that require your understanding and compliance, and familiarity with these laws and regulations is fundamental to the success of any state-licensed or certified real property appraiser. Your instructor will provide you with in-depth information on the nuts-and-bolts of these laws and regulations by exploring the histories and functions of specific terminology, certification agencies, licensing requirements, and standard practice procedures. Course is iPad compatible',
    stars: 5,
    hours: 10,
    type:4,
    price:19.99
  }, {
    id: 2,
    name: 'Consumer Protection',
    description: 'As one of the three primary approaches commonly used by appraisers to value real property, the cost approach is a critical part of your appraisal knowledge base. A thorough working knowledge of the cost approach will help you produce a credible indication of value and will help provide you with the tools to do business with a wide range of clients. Your instructor, Alan Simmons, will equip you with the terminology and procedures associated with cost approach, in addition to related concepts such as alternative methods of site valuation, replacement and reproduction cost, accrued depreciation, and market extraction. Course is iPad compatible – Calculator is Recommended',
    stars: 4,
    hours: 5,
    type:1,
    price:19.99
  }, {
    id: 3,
    name: '2016-2017 7-hour National USPAP Update Course',
    description: 'This is The Appraisal Foundation’s official online 7-Hour National USPAP Update Course.  This course is designed to fulfill the continuing education requirement which specifies that state licensed and certified appraisers must complete a 7-hour update course on the Uniform Standards of Professional Appraisal Practice every two years.</br>While this course contains material pertaining to all aspects of USPAP, the focus is primarily on: </br></br>•Changes to USPAP for 2016-17 </br>•Issues that affect daily appraisal practice. </br>The overall goal of this course is to make students aware, and foster understanding of, the revisions made to USPAP for 2016-17 edition, and to help them apply the requirements of USPAP in situations that occur during their day-to-day activities as real property appraisers. By the conclusion of this course, students will not only be fluent in USPAP concepts and applications, but they will also have demonstrated mastery of the material. ',
    stars: 3,
    hours: 7,
    type:3,
    price:29.99
    }, {
    id: 4,
    name: 'Supervisor-Trainee Course for California',
    description: 'This four-hour course meets the requirements established by the Appraiser Qualifications Board (AQB) of The Appraisal Foundation in its 2015 Real Property Appraiser Qualification Criteria. It provides an overview of the responsibilities and obligations of both the Trainee Appraiser and the Supervisory Appraiser within the context of the Trainee–Supervisor relationship and addresses applicable state and local jurisdictional requirements and relevant USPAP obligations. Periodic assessments (mini-quizzes) in each chapter help track understanding and retention of the material, as well as summative chapter assessments and a comprehensive online final examination at the conclusion of the course. Course is iPad compatible',
    stars: 3,
    hours: 5,
    type:2,
    price:19.99
    }];

  return {
    all: function() {
      return courses;
    },
    remove: function(course) {
      courses.splice(courses.indexOf(course), 1);
    },
    get: function(courseId) {
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].id === parseInt(courseId)) {
          return courses[i];
        }
      }
      return null;
    }
  };
})
.factory('Packages', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var packages = [{
    id: 0,
    name: 'Landlord Tenand Act - Basics for All Licenses',
    description: 'This course identifies the unique attributes of apartment complexes and their associated three markets: apartment properties that are bought and sold, vacant sites and the associated rental market. While the skills learned in this course will be applicable to a variety of apartment properties, it is geared towards small apartment complexes, or those between 5 to 20 units. Course also contains contemporary statistical analysis techniques as well as traditional methods of valuation, in addition to a real world case study and several "Deeper Thinking" topics.',
    stars: 5,
    hours: 10,
    type:1,
    price:19.99
  }, {
    id: 1,
    name: 'Contracts & Real Estate License Law',
    description: 'How well do you know the appraisal regulations for California? At both state and federal levels, there are a number of laws that require your understanding and compliance, and familiarity with these laws and regulations is fundamental to the success of any state-licensed or certified real property appraiser. Your instructor will provide you with in-depth information on the nuts-and-bolts of these laws and regulations by exploring the histories and functions of specific terminology, certification agencies, licensing requirements, and standard practice procedures. Course is iPad compatible',
    stars: 5,
    hours: 10,
    type:4,
    price:19.99
  }, {
    id: 2,
    name: 'Consumer Protection',
    description: 'As one of the three primary approaches commonly used by appraisers to value real property, the cost approach is a critical part of your appraisal knowledge base. A thorough working knowledge of the cost approach will help you produce a credible indication of value and will help provide you with the tools to do business with a wide range of clients. Your instructor, Alan Simmons, will equip you with the terminology and procedures associated with cost approach, in addition to related concepts such as alternative methods of site valuation, replacement and reproduction cost, accrued depreciation, and market extraction. Course is iPad compatible – Calculator is Recommended',
    stars: 4,
    hours: 5,
    type:1,
    price:19.99
  }];

  return {
    all: function() {
      return packages;
    },
    remove: function(course) {
      packages.splice(packages.indexOf(course), 1);
    },
    get: function(packageId) {
      for (var i = 0; i < packages.length; i++) {
        if (packages[i].id === parseInt(packageId)) {
          return packages
        }
      }
      return null;
    }
  };
});

