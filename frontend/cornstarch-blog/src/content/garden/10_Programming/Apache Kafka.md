---
Title: Apache Kafka
Subject Type: Data
tags:
  - Data
  - Software
aliases:
  - Kafka
cssclasses:
Note Created: 2025-10-05
Note Updated: 2025-10-05
---
# Kafka Overview
---

Apache Kafka is an open-source [[Distributed Systems]] and [[Streaming Platform]] designed to handle high-throughput, real-time data feeds. It operates as a distributed network of Brokers and Partitions, allowing for scalability and Fault Tolerance. Unlike traditional [[Batch Processing]], Kafka enables continuous [[Stream Processing]]—allowing systems to react to data as it’s produced.

## Kafka Fundamentals 

### Topics

Topics are a log of "data items" known as **events** or **Messages**. Topics are immutable, and store these events in order of when they were written over time. This analogous to a table in relational databasing but with a heavier focus on historical captures. Topics are schema-less and do not care how events are stored. Logs are not queues, and multiple users can read a single log. 

Log retention is a phrase used to indicate how long a log will be stored in a Kafka cluster. This can be done by file size or by time. 

Log compaction is used to when only the most recent value per key is kept. For example, if a user's physical address has changed, we may not want to keep their old address, since their most up-to-date address is the only one of use to us.
### Messages

Messages in Kafka are made up Values (readings, values, etc.) and Keys (identifiers). Keys are not required, by values are. A timestamp is also assigned (or designated). Messages can also have Header which are used as metadata. Topics are assigned to to Messages, as well as "offsets" which are effectively the count of that event in the log (starting with zero, incrementing by 1).

### Partitions

Topics can be partitioned in Kafka upwards of ~2 million times across different clusters, allowing for massive scalability, efficiency, and reliability. Messages are distributed across the different partitions of a topic in  two primary ways: if a key is NULL, then the message is distributed round-robin. Otherwise, the key will be run through a hash function, modulo # of partitions, and then the message will be assigned to the resulting partition number. This allows for an ordering of keys that allows alike keys to be stored upon the same partition in a topic. Partitions, like offsets, start with zero. *This is decided by the producer library at time of writing.* 

### Brokers

Kafka is composed of a network of machines called **brokers**. The collection of brokers form what is known as a **Kafka Cluster**. 

### Replication

Kafka features a configurable replication process in which partition replications are made and dispersed onto other brokers outside of the original partition. The original replica is called the **Leader Replica** and the copies are called **Follower Replicas**. clients read and write to leader replicas which will then update follower replicas. In instances where a broker containing a leader replica goes down, a new leader replica will be assigned from the remaining brokers. Replication is a foundational procedure to Kafka's reliability.  

### Producers

All clients outside of brokers are considered to either be **Producers** or **Consumers**, or both. Producers are clients that write events into Kafka Clusters. Generally speaking, a client will identifiy brokers that it may want to interact with and then assigning a message to write for a topic. Since Kafka is data-format agnostic (data stored as bytes), the producer may establish the formatting themselves. *Producer libraries decide how partitions are assigned new messages.*

### Consumers

The opposite side of the client coin is the **consumer**, which will connect to kafka clusters for log reading, with calls like consumer.subscript(List.of("topic1","topic2")).  Once this connection is made, a while (true) infinite loop is started as there is no "last" message. Because Kafka logs are not *queues*, messagers are non-consummable. That is, multiple consumers can read the same message multiple times, at the same time. 

**Consumer offset tracking/commits** is a concept of consumers reporting to the cluster the latest-read offset so that offline consumers will leave a record of the last message they have rad. Commits are batched by time or number of commits.

**Consumer Grouping** is the concept of having multiple replications of the same consumer application that can parallelize intake from various partitions. This can be useful when the workload of a specific consumer app is too large to handle on its own. This provides higher processing bandwidth as well as fault tolerance.

Stream processing may be executed by frameworks like [[Apache Flink]] or [[Kafka Streams]]. Flink is considered better for high volumes of events while Kafka Streams is considered better for low to medium levels, but the latter is a native tool with more hands-on coding via Java which may be favorable to Java shops. 




## Connections
---





