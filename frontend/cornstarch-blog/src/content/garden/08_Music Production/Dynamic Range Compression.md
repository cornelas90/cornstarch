---
Title: Dynamic Range Compression
Subject Type: Audio Signal Processing
tags:
  - Signal-Processing
  - Audio
aliases:
  - Compression
  - Compressor
cssclasses:
Note Created: 2025-09-14
Note Updated: 2025-09-14
---
# Dynamic Range Compression Overview
---
Compression in audio processing operation that reduces the [[Dynamic Range]] of an audio signal by reducing the volume of loud sounds (called downward compression) or increasing the volume of quiet sounds (upward compression).

## Controls
---
### Threshold

The changes associated with compression are relative to a set *threshold*, set with decibel units. Volumes exceeding or dipping beneath the threshold will be changed by some user-set ratio. 

### Ratio 

The amount of signal change post-threshold is represented as a ratio of X:1. A 4:1 ratio will reduce a signal 4dB over the threshold down to 1dB, 8dB over down to 2dB, etc. Infinity:1 is also an option and is known as [[Limiter|Limiting]], totally cutting off any signal over the threshold.

### Attack and Release

Attack and release are user-set parameters which determine how long it takes to reach the ratio of of the compressed signal and how long it takes for compression to ease off of the signal. 

### Peak vs RMS 

Peak-sensing compression reacts to the maximum input signal while RMS will use a power function (root mean square) for comparison of input signals to more closely mimick human percecption of loudness.

### Stereo Linking

This refers to applying the same level of compression to both L/R channels of a stereo signal as to not accidentally shift the staging of the source signal. For example, a synthesizer that has a higher amplitude sound in the left channel than the right will be compressed equally in both channels so that the softer signal does not suddenly sound relatively louder and thus cause a moving sound image. 

### Make-up gain

Gain that is added post-compression to normalize output volume after changing its dynamic range. 


## Use Cases in Music Production

### Drums

- Compressing quickly decaying instruments like cymbals and snares will effectively create sustained tails.
- "Punch" of percussions can be attained by compressing drums slowly (20-40ms) by allowing initial transients to pop through, and then compressing tail of drum transient, making the initial pop relatively loud and thus punchy. This also reduces "flabby" sound of electronic drum in tail.
- [[Sidechaining]] kick drums to bassline will create "ducking" effect which allows kick drum to cut through the shared bass frequencies of the bassline instead of being muddied together. 
- [[Parallel Compression]] which mixes a dry drum signal with a squashed signal will retain punchiness while highlighting background details and harmonics, making drums "fatter". This will add weight to one-shot electronic drums. Raising the floor reduces clipping drum signal. 
- Gentle compression on electronic drum cymbals and shakers helps them sit in mix more properly.
- [[Glue Compression]] on bus will add sonic cohesion to colletion of vastly different sounds

### Synthesizers

- Compression can help leveling issues with high dynamics as they develop, fliters open, etc. 
- Sidechaining can be used as noted before, adding a breathing groove to a pad.
- Parallel crushing can add airy texture to synth pad to add air without killing lushness.
- Lead synths can be made punchier by adding a slow compression.
- Evens out velocity of notes when playing by hand
- Synth basslines are notoriously dynamic and may need to be controlled by a compressor
