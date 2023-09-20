# This sample, non-production-ready template describes an Amazon EC2 instance and an Elastic Load Balancer.  
# © 2020 Amazon Web Services, Inc. or its affiliates. All Rights Reserved.  
# This AWS Content is provided subject to the terms of the AWS Customer Agreement available at  
# http://aws.amazon.com/agreement or other written agreement between Customer and either
# Amazon Web Services, Inc. or Amazon Web Services EMEA SARL or both.

FROM openjdk:22-slim

COPY ./target/*.jar /opt/target/service.jar

WORKDIR /opt/target

CMD ["java", "-jar" "service.jar"]

EXPOSE 8080
