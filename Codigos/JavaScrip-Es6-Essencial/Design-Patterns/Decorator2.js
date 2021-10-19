function readOnly(target, name, descriptor){
    descriptor.writable = false
    return descriptor
}

class Job{
    @readOnly
    title() { return 'CEO' }
}