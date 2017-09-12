package com.galagapi.infrastructure;

 
import java.util.logging.Level;
import java.util.logging.Logger;
import org.junit.Before;
import org.junit.ClassRule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.config.KafkaListenerEndpointRegistry;
import org.springframework.kafka.listener.MessageListenerContainer;
import org.springframework.kafka.test.rule.KafkaEmbedded;
import org.springframework.kafka.test.utils.ContainerTestUtils;

@SpringBootApplication(exclude = {
    org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration.class})

public class InfrastructureApplication {

    private static String HELLOWORLD_TOPIC = "helloworld.t";

    @Autowired
    private static KafkaListenerEndpointRegistry kafkaListenerEndpointRegistry;

    @ClassRule
    public static KafkaEmbedded embeddedKafka = new KafkaEmbedded(1, true, HELLOWORLD_TOPIC);

  
    public static void setUp() throws Exception {
        // wait until the partitions are assigned
        for (MessageListenerContainer messageListenerContainer : kafkaListenerEndpointRegistry
                .getListenerContainers()) {
            ContainerTestUtils.waitForAssignment(messageListenerContainer,
                    embeddedKafka.getPartitionsPerTopic());
        }
    }

    public static void main(String[] args) {
        SpringApplication.run(InfrastructureApplication.class, args);
        
        try {
            setUp();
        } catch (Exception ex) {
            Logger.getLogger(InfrastructureApplication.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
