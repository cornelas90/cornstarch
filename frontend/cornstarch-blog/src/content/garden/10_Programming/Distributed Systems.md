---
Title:
Subject Type:
tags:
aliases:
cssclasses:
Note Created: 2025-10-05
Note Updated: 2025-10-05
---
# Distributed System Overview
---

A **Distributed System** is a collection of independent computers (known as **nodes**) that appear to users or applications as a single, unified system. Each node runs its own processes and communicates with others over a network. The goal is to **share computation, storage, and data** in a way that increases scalability, reliability, and fault-tolerance. Two such examples of Distributed Systems are [[Apache Kafka]] and [[NSQ]]. 

## Core Principles

### Scalability

Distributing work across multiple nodes allows systems to handle greater loads. This can be done **horizontally** (adding more machines) rather than **vertically** (buying bigger ones). 
* Kafka scales horizontally by adding more **brokers** and **partitions**.
* NSQ scales by adding nsqd instances on different machines. Each instance can handle independent topics and channels.

### Fault Tolerance

If a single node fails, the system continues to operate. This is achieved through **replication** — multiple copies of the same data stored on different machines.  

* In Kafka, partitions are replicated across brokers, ensuring data persists even when a broker goes down.
* NSQ nodes operate independently, and message delivery is best-effort. While a single node failure only affects its local messages, there’s no built-in message replication; redundancy must be handled by multiple producers or consumers.
	* Best-effort delivery means that duplicative deliveries may occur, or deliveries may even be lost.

### Availability

The system remains operational and responsive, even if parts of it fail.  
* Kafka clients can automatically switch to a new leader partition replica when one broker becomes unavailable.
* NSQ prioritizes availability by design—each daemon (nsqd) can operate autonomously. If the lookupd or another node goes down, other nodes continue processing without disruption.

### Consistency

All nodes in a distributed system should ideally agree on the same state of data. However, **perfect consistency, availability, and partition tolerance** cannot coexist (the **CAP Theorem**).  
* Kafka favors availability and partition tolerance, accepting that short-lived inconsistencies may occur while replicas synchronize. Within a partition, message ordering is absolute, and consumers read a consistent log.
* NSQ follows an _at-least-once_ delivery model but does not guarantee strict ordering or consistency across nodes. It’s designed for real-time processing where slight inconsistencies are tolerable. 

### Coordination

Nodes must agree on metadata — like who owns which partition, or which replica is the leader. This is managed by a **coordination service**, historically **ZooKeeper**, though Kafka now uses an internal **Raft-based quorum** called KRaft.


## Connections
---





